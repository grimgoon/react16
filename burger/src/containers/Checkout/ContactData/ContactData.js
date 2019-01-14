import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
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
            customer : {
                name : 'Alexander Hermansson',
                address : {
                    street : 'Test Street 1',
                    zipCode : '5140',
                    country : 'Sweden',
                },
                email : 'test@test.com',  
            },
            deliveryMethod : 'fastest'
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

    render() {

        let form = (
        <form>
            <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
            <Input inputtype="input" type="text" name="email" placeholder="Your Email"/>
            <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
            <Input inputtype="input" type="text" name="postal" placeholder="Postcode"/>
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