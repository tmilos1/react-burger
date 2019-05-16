import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad: 0.4,
    bacon: 1.3,
    cheese: 1.0,
    meat: 0.8
}
class BurgerBuilder extends Component {
    
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3,
        purchasable: false,
        purchasing: false
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;

        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;

        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingridients: updatedIngridients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;

        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingridients: updatedIngridients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngridients);
    }

    updatePurchaseState(ingridients) {
        const sum = Object.keys(ingridients)
            .map(ingKey => ingridients[ingKey])
            .reduce((sum, ing) => sum + ing);

        this.setState({purchasable: sum > 0});

    }

    shouldDisableOrderButton(updatedIngridients) {
        let ingridientCount = 0;
        for (var ingridientType in this.state.ingridients) {
            ingridientCount += updatedIngridients[ingridientType];
        }

        if (ingridientCount > 0) {
            return false;
        }

        return true;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        console.log('cancelled')
        this.setState({purchasing: false});
    }

    render() {
        const disabledInfo = {...this.state.ingridients}

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary ingridients={this.state.ingridients} />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuilderControls 
                    ingridientAdded={this.addIngridientHandler}
                    ingridientRemoved={this.removeIngridientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;