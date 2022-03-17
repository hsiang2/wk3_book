import React from "react";
import { StyleSheet, ScrollView, Text, Image, View, Pressable } from "react-native";
import printStar from "../components/Star";

const DetailScreen = ({route}) => {
    const { image,
            title,
            author,
            star,
            description,
            price
          } = route.params;
    return(
        <ScrollView style={styles.backgroundStyle}>
          <View style={styles.containerStyle}>
            <Image 
              style={styles.imageStyle}
              source={{uri: image}}
            />
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>{author}</Text>
            <View style={styles.ratingStarStyle}>
              {printStar(star)}
              <Text style={styles.numberStyle}>{star + ".0"}</Text>
              <Text style={styles.totalNumberStyle}> / 5.0</Text>
            </View>
            <Text style={styles.descriptionStyle}>{description}</Text>
            <Pressable style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}>{`BUY NOW FOR $${price}`}</Text>
            </Pressable>
          </View>
        </ScrollView>
)};

const styles = StyleSheet.create({
    imageStyle: {
      height: 300,
      width: 210,
      marginTop: 8
    },
    backgroundStyle: {
      backgroundColor: "#fff",
    },
    containerStyle: {
      flex: 1,
      alignItems: "center"
    },
    titleStyle: {
      color: "#131313",
      fontSize: 24,
      marginTop: 28,
      marginBottom: 8
    },
    subtitleStyle: {
      color: "#666666",
      fontSize: 14
    },
    ratingStarStyle: {
      flex: 1,
      flexDirection: 'row'
    },
    numberStyle: {
      marginLeft: 8,
      marginTop: 8,
      color: "#131313",
      fontSize: 14
    },
    totalNumberStyle: {
      color: "#666666",
      marginTop: 8,
      fontSize: 14
    },
    descriptionStyle: {
      marginTop: 16,
      marginBottom: 28,
      marginHorizontal: 20,
      fontSize: 14,
      color: "#131313",
      lineHeight: 24,
      textAlign: 'center',
    },
    buttonStyle: {
      backgroundColor:'#6200EE',
      width: 190,
      height: 36,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4
    },
    buttonTextStyle: {
      fontSize: 14,
      color: "#fff"
    }
  });
  

export default DetailScreen;