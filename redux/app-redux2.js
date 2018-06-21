
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//
// Initial State...
//

const initialState1 = {
    favoriteAnimal1: "cat",
    personData: { },
};

//
// Reducer...
//

const reducer = (state = initialState1, action) => {
    switch(action.type) {
        case "setFavoriteAnimal1":
            return { ...state, favoriteAnimal1: action.value };

        case "setPersonData":
            return { ...state, personData: action.value };

        default:
            return state;
    }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setFavoriteAnimal1 = (favoriteAnimal1) => {
    return {
        type: "setFavoriteAnimal1",
        value: favoriteAnimal1,
    };
}

const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
}

const watchPersonData = () => {
    return function(dispatch) {
        firebase.database().ref("person").on("value", function(snapshot) {
            var personData = snapshot.val();
            dispatch(setPersonData(personData));
        }, function(error) { });
    };
}

export { setFavoriteAnimal1, setPersonData, watchPersonData };
