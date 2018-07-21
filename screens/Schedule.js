import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class Schedule extends React.Component {
  render() {
    return <ScrollView style={{ flex: 1, padding: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Saturday
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Devo </Text>
        <Text>9:15 AM | Quiet Time / Reflection</Text>
        <Text>9:30 AM | Group Discussion</Text>
        <Text>10:30 AM | Group Competitive Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1 PM | Group Competitive Activity</Text>
        <Text>3 PM | Free Time/ Zip Line Available</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Group Competitive Activity</Text>
        <Text>7:30 PM | Worship and Sermon</Text>
        <Text>9:30 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>
         <View style={{ height: 20 }} />


        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Sunday
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Senior Send-Off </Text>
        <Text>10:30 AM | Group Competitive Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1 PM | Group Competitive Activity</Text>
        <Text>3 PM | Free Time</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Worship Service</Text>
        <Text>8 PM | Group Competitive Activity</Text>
        <Text>10 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>
        <View style={{ height: 20 }} />


        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Monday
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        
        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Devo </Text>
        <Text>9:15 AM | Quiet Time / Reflection</Text>
        <Text>9:30 AM | Group Discussion</Text>
        <Text>10:30 AM | Group Competitive Activity</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1 PM | Group Competitive Activity</Text>
        <Text>3 PM | Free Time/Archery Available</Text>
        <Text>5 PM | Dinner</Text>
        <Text>6 PM | Group Competitive Activity</Text>
        <Text>7:30 PM | Worship Service</Text>
        <Text>9:30 PM | Intentional Hangout Time</Text>
        <Text>11 PM | Boys and Girls separate for bed</Text>
        <View style={{ height: 20 }} />


        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {" "}
          Tuesday
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        <Text>7:30 AM | Breakfast</Text>
        <Text>9 AM | Pack up and clean cabins </Text>
        <Text>9:30 AM | Devo</Text>
        <Text>9:45 AM | Final Exhortation</Text>
        <Text>10 AM | Final Discussion</Text>
        <Text>11 AM | Photo Scavenger Hunt Results</Text>
        <Text>12 PM | Lunch</Text>
        <Text>1:30 PM | Leave Camp</Text>
        <View style={{ height: 60 }} />


      </ScrollView>;
  }
}

const styles = StyleSheet.create({

});

export default Schedule;
