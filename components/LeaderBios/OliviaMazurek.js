import React from 'react';
import { Text, View, Image } from 'react-native';
import {
  Card,
  CardSection
} from "/Users/brent/Projects/expo-firebase-redux-starter-master/components/common";


// Create a component
const OliviaMazurek = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300,
                backgroundColor: "#F5FCFF" }} resizeMode="contain" source={require("./LeaderImages/Livpic.jpg")} />
          </View>

          <View>
            <Text>Olivia Mazurek</Text>
          </View>
          <View>
            <Text>
              Favorite Movie:The Holiday 
              Favorite Book:The Catcher in the Rye
              Favorite Food:Sushi 
              Favorite Book of the Bible and Why:
              Ecclesiastes. Most authentic and poetic book to me. Reveals a
              level of humanity that is relatable. Plus, it leads us to the
              meaning of life (which is to know and to be known and loved by
              God). 
              Favorite Band: LANY 
              Favorite Hobbies: SoulCycle, going to
              the beach, watching movies, hanging with friends, traveling,
              taking photos.
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default OliviaMazurek;
