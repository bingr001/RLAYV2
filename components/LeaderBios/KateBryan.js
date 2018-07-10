import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from "../common";

// Create a component
const KateBryan= () => {
  return <View>
      <Card>
        <CardSection>
          <View>
            <Image style={{ width: 300, height: 300}} resizeMode="contain" source={require("./LeaderImages/katepic.jpg")} />
          </View>

          <View>
            <Text style={{ fontWeight: "bold" }}>Kate Bryan</Text>
          </View>
          <View>
            <Text style={{ width: 300 }}>
              Favorite Movie: Clueless{"\n"}
              Favorite Book: Til We Have Faces by CS Lewis{"\n"}
              Favorite Food: Burritos{"\n"}
              Favorite Book of the Bible: Ephesians because I love the encouragements it gives for us as a community of believers{"\n"}
              Favorite Band: Eisley {"\n"}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>;
};

//make it available for other parts of the app

export default KateBryan;
