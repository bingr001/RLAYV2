import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const MarielleMorad= () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/mariellepic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Marielle Wakim</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: The Lord of The Rings trilogy, extended editions (I'm counting all three movies as one, obviously).{"\n"}
              Favorite Book: It's a three-way tie between Ready Player One, Harry Potter and the Prisoner of Azkaban, and The Phantom Tollbooth.{"\n"}
              Favorite Food: Cookies all day every day. Pancakes are a super close second, though. {"\n"}
              Favorite Book of the Bible: Isaiah. So much wisdom. {"\n"}
              Favorite Band: The Backstreet Boys, who are and always will be the best boyband of all time. But also Demi Lovato. {"\n"}
              Favorite Hobbies: Beatboxing. Baking. Coming up with puns. Crossword puzzles. Accumulating great gel pens. Petting all dogs. Drinking coffee. {"\n"}
              
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default MarielleMorad;
