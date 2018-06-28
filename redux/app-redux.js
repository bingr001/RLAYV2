
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
    answer2: "dog",
    answer3: "dogg",
    answer4: "doggy",
    answer5: "kitty",
    answer6: "racoon",
    event1: "8 AM Breakfast",
    event2: "9 AM Prayer",
    event3: "10 AM hula hoop",
    event4: "11 AM water relay",
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
        case "setanswer2":
            return { ...state, answer2: action.value};
        case "setanswer3":
            return { ...state, answer3: action.value};
        case "setanswer4":
            return { ...state, answer4: action.value};
        case "setanswer5":
            return { ...state, answer5: action.value};
        case "setanswer6":
            return { ...state, answer6: action.value};

        case "event1":
            return { ...state, answer6: action.value};
        case "event2":
            return { ...state, answer6: action.value};
        case "event3":
            return { ...state, answer6: action.value};
        case "event4":
            return { ...state, answer6: action.value};


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

const setanswer2 = (answer2) => {
    return {
        type: "setanswer2",
        value: answer2,
    };
}

const setanswer3 = (answer3) => {
    return {
        type: "setanswer3",
        value: answer3,
    };
}

const setanswer4 = (answer4) => {
    return {
        type: "setanswer4",
        value: answer4,
    };
}

const setanswer5 = (answer5) => {
    return {
        type: "setanswer5",
        value: answer5,
    };
}

const setevent1 = (event1) => {
    return {
      type: "setevent1",
      value: event1,
    };
}

const setevent2 = (event2) => {
    return {
      type: "setevent2",
      value: event2,
    };
}

const setevent3 = (event3) => {
    return {
      type: "setevent3",
      value: event3,
    };
}

const setevent4 = (event4) => {
    return {
      type: "setevent4",
      value: event4,
    };
}

const setanswer6 = (answer6) => {
    return {
        type: "setanswer6",
        value: answer6,
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

export { setFavoriteAnimal, setanswer1, setanswer2, setanswer3, setanswer4, setanswer5, setanswer6, setevent1, setevent2, setevent3, setevent4, setPersonData, watchPersonData };
