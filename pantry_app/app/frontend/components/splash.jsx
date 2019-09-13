
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class splash extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div>
                    This is the splash page
                    <button>
                        <Link to='/index'>Let's open the pantry!</Link>
                    </button>
                </div>
            </div>
        )
    }
}




