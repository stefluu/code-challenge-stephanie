import * as APIUtil from '../util/food_item_util';

export const CREATE_FOOD = 'CREATE_FOOD';
export const FETCH_FOODS = 'FETCH_FOODS';
export const FETCH_FOOD = 'FETCH_FOOD';
export const UPDATE_FOOD = 'UPDATE_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';


export const createFood = (foodParams) => {
    return dispatch => {
        return APIUtil.createFood(foodParams)
            .then(foodItem => {
                return dispatch(createNewFood(foodItem))
            })
    }
}

export const fetchFoods = () => {
    return dispatch => {
        return APIUtil.fetchFoods()
            .then(foods => {
                return dispatch(fetchAllFoods(foods))
            })
    }
}

export const fetchFood = (foodId) => {
    return dispatch => {
        return APIUtil.fetchFood(foodId)
            .then(food => {
                return dispatch(fetchOneFood(food))
            })
    }
}

export const updateFood = (foodId, updatedFoodParams) => {
    return dispatch => {
        return APIUtil.updateAFood(foodId, updatedFoodParams)
            .then(updatedFood => {
                return updateTheFood(updatedFood)
            })
    }
}

export const eatFood = (foodId) => {
    return dispatch => {
        return APIUtil.deleteFood(foodId)
            .then(deletedFood => {
                return deleteTheFood(deletedFood)
            })
    }
}


const createNewFood = (foodItem) => {
    return{
        type: CREATE_FOOD,
        foodItem
    }
}

const fetchAllFoods = (foods) => {
    return{
        type: FETCH_FOODS,
        foods
    }
}

const fetchOneFood = (food) => {
    return{
        type: FETCH_FOOD,
        food
    }
}

const updateTheFood = (updatedFood) => {
    return{
        type: UPDATE_FOOD,
        updatedFood
    }
}

const deleteTheFood = (deletedFood) => {
    return{
        type: DELETE_FOOD,
        deletedFood
    }
}