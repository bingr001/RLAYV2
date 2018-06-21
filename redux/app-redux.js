
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//
// Initial State...
//

const initialState = {
    favoriteAnimal: "duck",
    personData: { },
    //+ testing for devo page

    favoriteAnimal1: "cat",
};


//
// Reducer...
//

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setFavoriteAnimal":
            return { ...state, favoriteAnimal: action.value };
//+ added just below here
        case "setFavoriteAnimal1":
            return { ...state, favoriteAnimal1: action.value};

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

const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: "setFavoriteAnimal",
        value: favoriteAnimal,
    };
}

//+ added below one too
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

export { setFavoriteAnimal, setFavoriteAnimal1, setPersonData, watchPersonData };
