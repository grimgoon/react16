import React, {Component} from 'react';
import style from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends CompositionEvent {

    render ()
    {
        let ingredient = null;

    switch(this.props.type) {
        case('bread-bottom'):
            ingredient = <div classsName={style.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div classsName={style.BreadTop}>
                    <div classname={style.Seeds1}></div>
                    <div classname={style.Seeds1}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div classsName={style.Meat}></div>;
            break;
        case('cheese'):
            ingredient = <div classsName={style.Cheese}></div>;
            break;
        case('bacon'):
            ingredient = <div classsName={style.Bacon}></div>;
            break;
        case('salad'):
            ingredient = <div classsName={style.Salad}></div>;
            break;
        default:
            ingredient = null;
    };

    return ingredient;
    }
    
}

BurgerIngredient.PropTypes = {
    type : PropTypes.string.isRequired,
}

export default BurgerIngredient;