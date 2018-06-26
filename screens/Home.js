import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { DevoButton } from '../components/Buttons';
import { ScheduleButton } from '../components/Buttons';
import { LeadersButton } from '../components/Buttons';
import styles from '../components/Buttons/styles';

class Home extends Component {

  handleDevo = () => {
    console.log('press Devo');
  };

  handleSchedule = () => {
    console.log('press Schedule');
  };

  handleLeaders = () => {
    console.log('press Leaders');
  };


  render() {
    return(

      <Container>

        <View>
          <StatusBar
            translucent={false}
            barStyle="dark-content"/>
        </View>
        <View style={styles.wrapper}>
          <DevoButton onPress={this.handleDevo} />
          <ScheduleButton onPress={this.handleSchedule} />
          <LeadersButton onPress={this.handleLeaders} />

        </View>

      </Container>
    );
  }
}




export default Home;
