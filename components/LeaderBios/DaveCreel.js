import React from 'react';
import { Text, View, Image } from 'react-native';
import {
  Card,
  CardSection
} from "/Users/brent/Projects/expo-firebase-redux-starter-master/components/common";


// Create a component
const DaveCreel = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
              <Image style={{
                width: 300,
                height: 300,
                
                backgroundColor: '#F5FCFF',
              }}
                resizeMode="contain"
                source={require("./LeaderImages/davepic.jpg")} />
          </View>

          <View>
            <Text>Dave Creel</Text>
          </View>
          <View>
            <Text>
              Favorite Movie: Heavy Weights 
              Favorite Book: For Whom the Bell
              Tolls by Ernest Hemingway 
              Favorite Food: Tacos, always tacos
              Favorite Book of the Bible: James (It's a straightforward book of
              practical wisdom that serves as a constant reminder on how our
              everyday actions can be a reflection of Christ's love) 
              Favorite Band: Blind Pilot 
              Favorite Hobbies: Cooking food for friends,
              camping, playing music
            </Text>
          </View>

        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default DaveCreel;
