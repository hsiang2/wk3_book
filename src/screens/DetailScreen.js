import React from "react";
import { StyleSheet, ScrollView, Text, Image, View, Button } from "react-native";
import printStar from "../components/Star";

const DetailScreen = ({route}) => {
    const { image,
            title,
            author,
            star,
            description,
            price
            // author,
            // image
          } = route.params;
    return(
        <ScrollView>
            <Image 
                style={styles.imageStyle}
                source={{uri: image}}
            />
            <Text>{title}</Text>
            <Text>{author}</Text>
                <View>
                    {printStar(star)}
                    <Text>{star + ".0"}</Text>
                    <Text> / 5.0</Text>
                </View>
                <View>
                    <Text>{description}</Text>
                </View>
                <Button
                  title={`BUY NOW FOR $${price}`}
                />
        </ScrollView>
)};

const styles = StyleSheet.create({
    imageStyle: {
      height: 200,
      width: 140
    }
  });
  

export default DetailScreen;