import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const ErikaRuiz = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/erikapic.png")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Erika Ruiz</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: Cinderella{"\n"}
              Favorite Book: Tuck Everlasting{"\n"}
              Favorite Food: Asian Food{"\n"}
              Favorite Book of the Bible: No fave. Too hard to pick!{"\n"}
              Favorite Band: Red Hot Chili Peppers{"\n"}
              Favorite Hobbies: traveling, hiking, trying new things, hanging out with friends{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};
//make it available for other parts of the app

export default ErikaRuiz;
