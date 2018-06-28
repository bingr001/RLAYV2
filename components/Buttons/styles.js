import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



export default EStyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  wrapper: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',


  //  alignItems: 'flex-start',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    //marginRight: 5,
    //marginLeft: 5,
    margin:20,
    flexDirection: 'column',

    resizeMode: 'contain',
    // height: imageHeight/100,
    justifyContent: 'space-between',
  },
  icon2: {
    flex: 1,
    alignItems: 'center',
    flexShrink: 1,
    //marginRight: 5,
    //marginLeft: 5,
    margin:20,
    //width: imageWidth,
    // height: imageHeight,
    justifyContent: 'space-between'
  },
  icon3: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    margin:20,
    //marginRight: 5,
    //marginLeft: 5,
    //width: imageWidth,
    // height: imageHeight/100,
    justifyContent: 'space-between'
  },



});
