import React from 'react';
import {Link} from 'react-router-dom';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked>CANCEL</Button>
            <Link to="/Checkout">
            <Button 
                btnType="Success"
                clicked
                to="/Checkout">CONTINUE</Button></Link>
        </div>
    );
}

export default checkoutSummary;