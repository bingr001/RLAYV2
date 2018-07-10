import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const AudreyStanton= () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/audreypic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Audrey Stanton</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: 10 Things I Hate About You{"\n"}
              Favorite Book: The Golden Compass{"\n"}
              Favorite Food: Veggie Burger{"\n"}
              Favorite Book of the Bible: 1 Corinthians{"\n"}
              Favorite Band: Paramore {"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default AudreyStanton;
