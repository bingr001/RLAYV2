import React, { Component } from 'react';
import { ScrollView,View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import { Container } from '../components/Container';
import { DevoButton } from '../components/Buttons';
import { ScheduleButton } from '../components/Buttons';
import { LeadersButton } from '../components/Buttons';

class Home extends Component {

  /*handleDevo = () =>
  {
    onPress={() => navigate('Devo')}
  };

  handleSchedule = () => {
    console.log('press Schedule');
  };

  handleLeaders = () => {
    console.log('press Leaders');
  };
*/


  render() {
    const { navigate } = this.props.navigation;
    return(

      <Container>

        <View>
          <StatusBar
            translucent={false}
            barStyle="dark-content"/>
        </View>
        <ScrollView style={styles.wrapper}>
          <DevoButton onPress={() => navigate('Devo')} />
          <ScheduleButton onPress={this.handleSchedule} />
          <LeadersButton onPress={this.handleLeaders} />

        </ScrollView>

      </Container>
    );
  }
}

const styles = EStyleSheet.create({
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
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
})


export default Home;
