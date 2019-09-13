import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class shelfIndex extends Component {

    constructor(props){
        super(props);
        this.state = {
            shelves: []
        }
    }

    componentDidMount(){
        fetch('/shelves')
            .then((response) => (response.json()))
            .then((jsonResponse) => 
                {
                    let shelves = jsonResponse.shelves.map((currentShelf) => currentShelf.shelf)
                    this.setState({shelves: shelves})
                })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.shelves.map((shelf, idx) => 
                        <li key={idx}> 
                            {/* <Shelf info={shelf}/> */}
                            <Link to={`/shelves/${shelf.id}`}>
                            {shelf.name}</Link> 
                            {/* <button onClick={this.props.history.push(`/shelves/${shelf.id}`)}>
                                {shelf.name}</button> */}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
