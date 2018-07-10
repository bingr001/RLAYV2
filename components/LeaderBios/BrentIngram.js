import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const BrentIngram = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/brentpic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Brent Ingram</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: The Notebook. Just Kidding, Lord of The Rings{"\n"}
              Favorite Book: Mere Christianity by C.S. Lewis {"\n"}
              Favorite Food: Chick-fil-A{"\n"}
              Favorite Book of the Bible: Proverbs + Ephesians{"\n"}
              Favorite Band: Chance the Rapper + Kings Kaleidoscope{"\n"}
              Favorite Hobbies: Running Too Far + Video Games + Spending time with my wife and daughter{"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default BrentIngram;
