import React from "react";
import { ScrollView, Text } from "react-native";

const DetailScreen = ({route}) => {
    const { title,
            // author,
            // image
          } = route.params;
    return(
        <ScrollView>
            <Text>{title}</Text>
        </ScrollView>
)};

export default DetailScreen;