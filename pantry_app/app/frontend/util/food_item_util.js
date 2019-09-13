export const createFood = (foodParams) => {
    return fetch('/food_items', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(foodParams)
    })
    .then(response => response.json())
}

export const fetchFoods = () => {
    return fetch('/food_items')
        .then(response => response.json())
}

export const fetchFood = (foodId) => {
    return fetch(`/food_items/${foodId}`)
        .then(response => response.json())
}

export const updateAFood = (foodId, updatedFoodParams) => {
    return fetch(`/food_items/${foodId}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFoodParams)
    }) 
    .then(response => response.json())
}

export const deleteFood = (foodId) => {
    return fetch(`/food_items/${foodId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}