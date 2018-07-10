import React from 'react';
import { Text, View, Image } from 'react-native';
import {
  Card,
  CardSection
} from "../common";

// Create a component
const ACSanford = () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300 }} resizeMode="contain" source={require("./LeaderImages/acpic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>AC Sanford</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: The Shawshank Redemption{"\n"}
              Favorite Book: Uncle Tom's Cabin{"\n"}
              Favorite Food: Cuban Sandwiches {"\n"}
              Favorite Book of the Bible: James and Romans {"\n"}
              Favorite Band: Hillsong United {"\n"}
              Favorite Hobbies: Flying to Florida. {"\n"}
              Fun Florida Fact: It is illegal for an unmarried woman to skydive on Sundays {"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default ACSanford;
