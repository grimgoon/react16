import React from 'react';
import styles from './Order.module.css';

const order = (props) => {
    return (
        <div className={styles.Order}>
            <p>
                <strong>Ingredients</strong>

                {Object.keys(props.orderData.ingredients).map(ingredient => {
                    return <p>{ingredient}: {props.orderData.ingredients[ingredient]} </p> ;
                })}
                
            </p>
            <p> 
                Price: <strong>{Number.parseFloat(props.orderData.price).toFixed(2)}</strong>
            </p>
        </div>
    )
}

export default order;