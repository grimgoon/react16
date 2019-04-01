import React, {Component} from 'react';
import {connect} from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {


    state = {
        purchasing: false,
        loading : false,
        error : false
    }

    componentDidMount() {
        axios.get('https://react16-21ae9.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients : response.data})
            }).catch(error => {
                this.setState({error : true});
            });

        console.log(this.props);
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
    
            return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = () => {
        
        const queryParams = [];
        for(let i in this.props.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
        }  
    
        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname : '/checkout',
            search : '?' + queryString,
        });

    }

    render(){

        const disabledInfo =  {
            ...this.props.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        };

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if(this.props.ingredients) {

            orderSummary =  <OrderSummary
                burgerPrice={this.props.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ingredients}/>;

            burger = (
                <>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        ingredientRemoveAll={this.removeAllIngredientsHandler}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchaseable={this.updatePurchaseState(this.props.ingredients)}
                        ordered={this.purchaseHandler}/>
                </>
            )
        }

        if(this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </>
       );
    } 
}

const mapStateToProps = state => {
    return {
        ingredients : state.ingredients,
        totalPrice : state.totalPrice
    }
}

const mapDispathToProps = dispatch => {
    return {
        onIngredientAdded : (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName}),
        onIngredientRemoved : (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName}),
    }
}



export default connect(mapStateToProps,mapDispathToProps)(withErrorHandler(BurgerBuilder,axios));