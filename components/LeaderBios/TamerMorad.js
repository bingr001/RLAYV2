import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const TamerMorad= () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 200}} resizeMode="contain" source={require("./LeaderImages/tamerpic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Tamer Morad</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: We Were Soliders{"\n"}
              Favorite Book: Great Gatsby, All the Kings Men{"\n"}
              Favorite Food: Hamburgers{"\n"}
              Favorite Book of the Bible: Matthew, Psalms{"\n"}
              Favorite Band: Linkin Park, Skillet {"\n"}
              Favorite Hobbies: Board Games, Camping/Hiking{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default TamerMorad;
