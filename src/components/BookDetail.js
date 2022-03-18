import React from "react";
import { Box, Image, Pressable, Text } from "native-base";
import printStar from "./Star";

const BookDetail = ({book, navigation}) => {
  return(
    <Box mr={4}>
      <Pressable
        onPress={() => navigation.navigate('Detail', book)}
      >
        <Image 
          h={200} w={140} mb={2}
          source={{uri: book.image}}
        />
      </Pressable>
      {book.star ? (
        printStar(book.star)
      ) : null}
      <Text color="#131313" fontSize="16" my="2">{book.title}</Text>
      <Text color="#666666" fontSize={12} mb={2}>{book.author}</Text>
    </Box>
)};

export default BookDetail;