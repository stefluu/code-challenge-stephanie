import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NewFood from './newFood';

class foodIndex extends Component {
    constructor(props){
        super(props)

        this.state = {
            foods: [{food_item:{}}],
        }

    }
    componentDidMount(){
        fetch('/food_items')
        .then((response) => response.json())
        .then((jsonResponse) => {
            let getFoodItem = jsonResponse.foods
            this.setState({foods: getFoodItem})
        })
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.foods.map((foodObj) => (
                        <li key={foodObj.food_item.id}>
                            <Link to={`/food_items/${foodObj.food_item.id}`}>
                                {foodObj.food_item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <NewFood />
            </div>
        )
    }
}

export default withRouter(foodIndex)

