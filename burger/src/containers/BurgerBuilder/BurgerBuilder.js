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


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
};

class BurgerBuilder extends Component {


    state = {
        totalPrice : 4,
        purchaseable: false,
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
    
            this.setState({purchaseable: sum > 0});
    }

    removeAllIngredientsHandler = () => {
        const updatedIngredients = {
            ...this.props.ingredients
        }

        const oldPrice = this.state.totalPrice;

        let reducedPrice = 0;

        Object.keys(updatedIngredients).forEach(type => {

            reducedPrice = reducedPrice + (updatedIngredients[type] * INGREDIENT_PRICES[type]);
            console.log(reducedPrice);
            updatedIngredients[type] = 0;
        });

        let newPrice = oldPrice - reducedPrice;

        this.setState({totalPrice : newPrice, ingredients : updatedIngredients})

        this.updatePurchaseState(updatedIngredients);

    }

    addIngredientHandler = (type) => {
        const oldCount = this.props.ingredients[type];
        const updatedCount = oldCount +1;

        const updatedIngredients = {
            ...this.props.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.props.ingredients[type];
        if(oldCount <=  0){
            return;
        }
        
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.props.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
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
                burgerPrice={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ingredients}/>;

            burger = (
                <>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.removeIngredientHandler}
                        ingredientRemoveAll={this.removeAllIngredientsHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
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
        ingredients : state.ingredients
    }
}

const mapDispathToProps = dispatch => {
    return {
        onIngredientAdded : (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName}),
        onIngredientRemoved : (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName}),
    }
}



export default connect(mapStateToProps,mapDispathToProps)(withErrorHandler(BurgerBuilder,axios));