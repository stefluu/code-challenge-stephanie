import { combineReducers } from 'redux';
import brandReducer from './brand_reducer';
import foodItemReducer from './food_item_reducer';
import sectionReducer from './section_reducer';
import shelfReducer from './shelf_reducer';


const RootReducer = combineReducers({
    foodItems: foodItemReducer
    // brands: brandReducer,
    // foodItems: foodItemReducer,
    // sections: sectionReducer,
    // shelves: shelfReducer
})

export default RootReducer;