import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

class Schedule extends React.Component {
  render() {
    return <ScrollView style={{ flex: 1, padding: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Saturday
        </Text>

        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Devo </Text>
        <Text>9:15 AM | Quiet Time / Reflection</Text>
        <Text>9:30 AM | Group Discussion</Text>
        <Text>10:30 AM | Group Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1:30 PM | Group Activity</Text>
        <Text>3 PM | Free Time</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Group Activity</Text>
        <Text>7:30 PM | Worship and Sermon</Text>
        <Text>9:30 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>


        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Sunday
        </Text>

        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Devo </Text>
        <Text>9:15 AM | Quiet Time / Reflection</Text>
        <Text>9:30 AM | Group Discussion</Text>
        <Text>10:30 AM | Group Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1:30 PM | Group Activity</Text>
        <Text>3 PM | Free Time</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Group Activity</Text>
        <Text>7:30 PM | Worship and Sermon</Text>
        <Text>9:30 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>

        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Monday
        </Text>
        
        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Senior Send-Off </Text>
        <Text>10:30 AM | Group Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1:30 PM | Group Activity</Text>
        <Text>3 PM | Free Time</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Group Activity</Text>
        <Text>7:30 PM | Worship and Sermon</Text>
        <Text>9:30 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>


        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Tuesday
        </Text>

        <Text>7:30 AM | Breakfast</Text>
        <Text>8:30 AM | Pack up and clean cabins </Text>
        <Text>9:30 AM | Devo</Text>
        <Text>9:45 AM | Final Exhortation</Text>
        <Text>10 AM | Group Discussion</Text>
        <Text>11 AM | Go through Scavenger Hunt Pics</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1:30 PM | Leave Camp</Text>

      </ScrollView>;
  }
}

const styles = StyleSheet.create({

});

export default Schedule;
