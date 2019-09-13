import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class sectionShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {food_items: []}
        }
    }

    componentDidMount(){
        fetch(`/sections/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((jsonResponse) => 
            this.setState({data: jsonResponse.section}))
    }

    render() {
        return (
            <div>
                <h2>{this.state.data.name}</h2>

                <ul>
                    {this.state.data.food_items.map((food) => (
                        <li key={food.id}>
                            <Link to={`/food_items/${food.id}`}>
                                {food.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* <table>
                    <tr>
                        <th>Food </th>
                        <th>Quantity</th>
                        <th>Brand</th>
                    </tr>

                    {this.state.data.food_items.map((food) => (
                        <tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.quantity}</td>
                            <td>{food.brand}</td>
                        </tr>
                    ))}
                </table> */}
            </div>
        )
    }
}

export default withRouter(sectionShow);
