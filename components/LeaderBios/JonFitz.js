import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";


// Create a component
const JonFitz = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300,
                backgroundColor: "#F5FCFF" }} resizeMode="contain" source={require("./LeaderImages/fitzpic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Jon "Fitz" Fitzgerald</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: Jurassic Park {"\n"}
              Favorite Book: The Silmarillion {"\n"}
              Favorite Food: Mexican {"\n"}
              Favorite Book of the Bible: Ephesians, because it clearly shows the as believers in Jesus, we are becoming who we already are in Christ. We don’t have to become good people to be accepted by God, but being accepted by God makes us good people.{"\n"}
              Favorite Band: Thrice {"\n"}
              Favorite Hobbies: writing songs and singing, watching tv and movies, talking theology{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default JonFitz;
