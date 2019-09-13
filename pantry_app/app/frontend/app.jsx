import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Splash from './components/splash';
import ShelfIndex from "./components/shelves/shelfIndex";
import Shelf from './components/shelves/shelf';
import Section from './components/sections/sectionShow';
import FoodShow from './components/foodItems/foodShow_container';
import FoodIndex from './components/foodItems/foodIndex';

const App = ({ store }) => (
    <div>
        {/* rendering from root jsx */}
        <Provider store={store} >
            <HashRouter>
                <Switch>
                    <Route path="/index" component={ShelfIndex} />
                    <Route path="/shelves/:id" component={Shelf}/>
                    <Route path="/sections/:id" component={Section} />
                    <Route path="/food_items/:id" component={FoodShow} />
                    <Route path="/food_items" component={FoodIndex} />
                    <Route exact path="/" component={Splash} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        </Provider>

    </div>
)

export default App;