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
            <Image style={{ width: 300, height: 300,
                backgroundColor: "#F5FCFF" }} resizeMode="contain" source={require("./LeaderImages/davepic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Dave Creel</Text>
          </View>
        <View >
            <Text style={{ width: 300 }}>
              Favorite Movie: Heavy Weights{"\n"}
              Favorite Book: For Whom the Bell{"\n"}
              Tolls by Ernest Hemingway{"\n"}
              Favorite Food: Tacos, always tacos{"\n"}
              Favorite Book of the Bible: James (It's a straightforward book of practical wisdom that serves as a constant reminder on how our everyday actions can be a reflection of Christ's love){"\n"}
              Favorite Band: Blind Pilot{"\n"}
              Favorite Hobbies: Cooking food for friends, camping, playing music{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default DaveCreel;
