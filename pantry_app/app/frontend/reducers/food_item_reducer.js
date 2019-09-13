import { CREATE_FOOD, FETCH_FOODS, FETCH_FOOD, UPDATE_FOOD, DELETE_FOOD } from '../actions/food_items';
import { merge } from 'lodash';


const FoodItemReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case CREATE_FOOD:
            return merge({}, state, {[action.foodItem.id]: action.foodItem})
        case FETCH_FOODS:
            return merge({}, state, action.foods)
        case FETCH_FOOD:
            return merge({}, state, {[action.food.id]: action.food})
        case UPDATE_FOOD:
            return merge({}, state, {[acton.updatedFood.id]: action.updatedFood})
        case DELETE_FOOD:
            let newState = merge({}, state);
            delete newState[action.deletedFood.id]
            return newState;
        default: return state;
    };
};

export default FoodItemReducer;