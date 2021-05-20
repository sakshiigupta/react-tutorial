import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actors/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id=== action.mealId);
            if(existingIndex>=0)
            {
                const updatedFavmeals =[...state.favoriteMeals];
                updatedFavmeals.splice(existingIndex,1);
                return{ ...state, favoriteMeals: updatedFavmeals};
            }
            else{
                const mealAdd = state.meals.find(meal => meal.id===action.id);
                return{ ...state, favoriteMeals=state.favoriteMeals.concat(mealAdd)};
            }
        default:
            return state;
    }
    return state;
}

export default mealsReducer;