import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import printStar from "./Star";

// const Star = (star) => {
//   const starlist = [];
//   for(let i = 0; i < star; i++){
//     starlist.push(
//       <Image
//         //style={style.imageStyle}
//         source={require('../images/icon_star_filled.png')}
//     />)
//   }
//   for(let i = 5; i > star; i--){
//     starlist.push(
//       <Image
//         //style={style.imageStyle}
//         source={require('../images/icon_star_empty.png')}
//     />)
//   }
//   return (
//     <View style={style.starStyle}>
//       {starlist}
//     </View>
//     );
// }

const BookDetail = ({book, navigation}) => {
  return(
    <View>
      <Pressable
        onPress={() => navigation.navigate('Detail', book)}
      >
        <Image 
          style={styles.imageStyle}
          source={{uri: book.image}}
        />
      </Pressable>
      {book.star ? (
        //<Star star={book.star}/>
        printStar(book.star)
        // <View style={style.starStyle}>
        //   <Star star={book.star}/>
        // </View>
      ) : null}
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
)};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 140
  }
});

export default BookDetail;