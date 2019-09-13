import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class foodShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            food: {}
        }
        // this.state = {
        //     foodInfo: {
        //         section: {},
        //         brand: {},
        //         shelf: {shelf:{}}
        //     }
        // }
    }

    componentDidMount(){
        // fetch(`/food_items/${this.props.match.params.id}`)
        // .then((response) => response.json())
        // // this.props.fetchFood(this.props.match.params.id)
        //     .then(jsonResponse => this.setState({foodInfo: jsonResponse.food_item}))

        let foodId = this.props.match.params.id;
        this.props.fetchFoods()
            .then(() => this.setState({food: this.props.foods[foodId]}))

        // if(!this.props.foods) return null;
        // console.log("state", this.state.food, "prop",this.props.foods)
        // if(!this.state.food) return null;
        // deb÷ugger
    }

    render() {
        if(!this.props.foods || !this.state.food) { 
            console.log("state", this.state.food, "prop",this.props.foods);
            return null };
        return (
            <div>
                <table>
                    <tr>
                        <th>Food Item: {this.state.food.name}</th>
                    </tr>
                    <tr>
                        Brand: {this.state.food.brand.name}
                    </tr>
                    <tr>
                        Quantity: {this.state.food.quantity}
                    </tr>
                    <tr>
                        Section: {this.state.food.section.name}
                    </tr>
                    <tr>
                        Shelf: {this.state.food.shelf.shelf.name}
                    </tr>
                </table>

                <button><Link to={`/sections/${this.state.food.section.id}`}>Back to Section</Link></button>
                <button><Link to={'/food_items'}>To All Foods</Link></button>
                
                {/* <table>
                    <tr>
                        <th>Food Item: {this.state.foodInfo.name}</th>
                    </tr>
                    <tr>
                        Brand: {this.state.foodInfo.brand.name}
                    </tr>
                    <tr>
                        Quantity: {this.state.foodInfo.quantity}
                    </tr>
                    <tr>
                        Section: {this.state.foodInfo.section.name}
                    </tr>
                    <tr>
                        Shelf: {this.state.foodInfo.shelf.shelf.name}
                    </tr>
                </table>

                <button><Link to={`/sections/${this.state.foodInfo.section.id}`}>Back to Section</Link></button>
                <button><Link to={'/food_items'}>To All Foods</Link></button> */}
            </div>
        )
    }
}
