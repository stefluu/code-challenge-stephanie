import { connect } from 'react-redux';
import { fetchFoods } from '../../actions/food_items' 
import ShowPage from './foodShow';


const mstp = (state) => {
    return{
        foods: state.foodItems.foods
    }
}

const mdtp = (dispatch) => {
    return{
        fetchFoods: () => dispatch(fetchFoods())
    };
};

export default connect(mstp, mdtp)(ShowPage);