import React from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../../hoc/ReactAux/ReactAux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong> {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Link to="/Checkout">
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </Link>  
        </Aux>
    )
};

export default orderSummary;