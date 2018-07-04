import React, { Component } from 'react';
import { ScrollView,View, StatusBar, StyleSheet } from 'react-native';


import { Container } from '../components/Container';
import { DevoButton } from '../components/Buttons';
import { ScheduleButton } from '../components/Buttons';
import { LeadersButton } from '../components/Buttons';

class Home extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.containerStyle}>
        <StatusBar
          translucent={false}
          barStyle="dark-content" />
        <Container >
          <ScrollView >
            <View style={{ height: 30 }} />

            <View>
              <DevoButton onPress={() => navigate('Devo')} />
            </View>
            <View style={{ height: 30 }} />

            <View>
              <ScheduleButton onPress={() => navigate('Schedule')} />
            </View>
            <View style={{ height: 30 }} />

            <View>
              <LeadersButton onPress={() => navigate('Leaders')} />
            </View>

          </ScrollView>

        </Container>
      </View>

    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative'
  }
};


export default Home;
