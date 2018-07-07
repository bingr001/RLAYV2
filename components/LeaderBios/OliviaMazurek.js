import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";


// Create a component
const OliviaMazurek = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300,
                }} resizeMode="contain" source={require("./LeaderImages/Livpic.jpg")} />
          </View>

          <View>
          <Text style={{ fontWeight: "bold" }}>Olivia Mazurek</Text>
          </View>
          <View >
            <Text style={{ width: 300 }}>
              Favorite Movie:The Holiday {"\n"}
              Favorite Book:The Catcher in the Rye {"\n"}
              Favorite Food:Sushi {"\n"}
              Favorite Book of the Bible and Why:
              Ecclesiastes. Most authentic and poetic book to me. Reveals a
              level of humanity that is relatable. Plus, it leads us to the
              meaning of life (which is to know and to be known and loved by
              God). {"\n"}
              Favorite Band: LANY {"\n"}
              Favorite Hobbies: SoulCycle, going to
              the beach, watching movies, hanging with friends, traveling,
              taking photos.{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default OliviaMazurek;
