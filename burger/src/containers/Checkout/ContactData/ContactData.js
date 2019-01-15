import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {

    state = {
        orderForm : {
            name : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder : 'Your Name'
                },
                value : ''
            },
            street : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder : 'Street'
                },
                value : ''
            },
            zipCode : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder : 'Zipcode'
                },
                value : ''
            },
            country : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder : 'Country'
                },
                value : ''
            },
            email : {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder : 'Your Email'
                },
                value : ''
            },  
            deliveryMethod : {
                elementType: 'input',
                elementConfig: {
                    type: 'select',
                    options: [
                        {value : 'fastest', displayValue : 'Fastest'},
                        {value : 'cheapest', displayValue : 'Cheapest'}
                    ],
                },
                value : ''
            }
        },
        loading: false,
        ingredients: null,
    }

    componentWillMount() {
        this.setState({ingredients : this.props.ingredients});
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading : true});

        console.log("Marp",this.state.ingredients);

        const order = {
            ingredients : this.state.ingredients,
            price : this.props.price,
           
        }

        axios.post('/orders.json', order)
            .then(respone => {
                this.setState({loading : false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading : false})
            });
    }

    renderInputElements = () => {
        
    }

    render() {

        const formElementArray = [];

        for(let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }

        let form = (
        <form>
            {formElementArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    inputtype={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value} />
            ))}
            <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
        </form>);

        if(this.state.loading) {
            form = <Spinner />
        }

        return(
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}


export default ContactData;