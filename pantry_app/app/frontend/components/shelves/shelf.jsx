import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Section from '../sections/sectionShow';

export default class shelf extends Component {

    constructor(props){
        super(props);
        this.state = {
            foodItems: [],
            sections: []
        }
        
        this.setFoodAndSections = this.setFoodAndSections.bind(this);
    }

    componentDidMount(){
        fetch(`/shelves/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then(jsonResponse => (
            this.setFoodAndSections(jsonResponse)
            // console.log(jsonResponse)
            // this.setState({ sections: jsonResponse.sections })
            ))
    }
        
    setFoodAndSections(response) {
        this.setState({sections: response.shelf.sections})
        this.setState({foodItems: response.shelf.food_items})
    }

    render() {
        return (
            <div>
                <div className="shelf-sections">
                    <h3>Sections</h3>
                    <ul>
                        {this.state.sections.map((section, idx) => (
                        <li key={idx}>
                            <Link to={`/sections/${section.id}`}>
                                {section.name}
                            </Link>    
                        </li>
                                
                        ))}
                    </ul>
                </div>

                <div className="shelf-food">
                    <h3>
                        <Link to={'/food_items'}>Foods</Link>
                    </h3>
                </div>
            </div>
        )
    }
}
