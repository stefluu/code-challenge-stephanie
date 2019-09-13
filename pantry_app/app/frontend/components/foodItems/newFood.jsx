import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class newFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            brand_id: 0,
            quantity: 0,
            section_id: 0
        }

        this.onChange = this.onChange.bind(this);
        this.addNewFood = this.addNewFood.bind(this);

    }


    onChange(type){
        return (e) => this.setState({ [type]: e.target.value })
    }


    addNewFood(){
        fetch('/food_items', {
            method: "POST",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        
        })
            .then(response => {
                response.json();
                this.props.history.push(`/sections/${this.state.section_id}`)
            })  
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Food Name" onChange={this.onChange("name")}/>
                    <input type="text" placeholder="Food Brand" onChange={this.onChange("brand_id")}/>
                        <input type="text" placeholder="Food Quantity" onChange={this.onChange("quantity")}/>
                        <input type="text" placeholder="Section Number" onChange={this.onChange("section_id")}/>

                    <button onClick={() => this.addNewFood()}>Add New Food!</button>
                </form>

            </div>
        )
    }
}

export default withRouter(newFood);
