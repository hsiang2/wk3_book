import React from "react";
import { Box, Image, Pressable, Text } from "native-base";
import printStar from "./Star";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const BookDetail = ({book, navigation}) => {
  let [fontsLoaded] = useFonts({Roboto_500Medium, Roboto_400Regular});
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return(
      <Box mr={4}>
        <Pressable
          onPress={() => navigation.navigate('Detail', book)}
        >
          <Image 
            h={200} w={140} mb={2}
            source={{uri: book.image}}
            alt="book"
          />
        </Pressable>
        {book.star ? (
          printStar(book.star)
        ) : null}
        <Text color="#131313" fontSize="16" fontFamily="Roboto_500Medium" my="2">{book.title}</Text>
        <Text color="#666666" fontSize={12} fontFamily="Roboto_500Medium" mb={2}>{book.author}</Text>
      </Box>
    )
  }
};

export default BookDetail;