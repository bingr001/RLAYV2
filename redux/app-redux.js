
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

    answer1: "cat",
};


//
// Reducer...
//

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setFavoriteAnimal":
            return { ...state, favoriteAnimal: action.value };
//+ added just below here
        case "setanswer1":
            return { ...state, answer1: action.value};

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
const setanswer1 = (answer1) => {
    return {
        type: "setanswer1",
        value: answer1,
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

export { setFavoriteAnimal, setanswer1, setPersonData, watchPersonData };
