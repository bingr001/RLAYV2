import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const LaurenCreel = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/Laurenpic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Lauren Creel</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: Amelie{"\n"}
              Favorite Book: The Chronicles of Narnia{"\n"}
              Favorite Food: Donuts{"\n"}
              Favorite Book of the Bible: Song of Solomon {"\n"}
              Favorite Band: The Head and The Heart{"\n"}
              Favorite Hobbies: Cooking, playing board games, hanging out with my community group {"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default LaurenCreel;
