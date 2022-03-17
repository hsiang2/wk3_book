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
    <View style={styles.containerStyle}>
      <Pressable
        onPress={() => navigation.navigate('Detail', book)}
      >
        <Image 
          style={styles.imageStyle}
          source={{uri: book.image}}
        />
      </Pressable>
      {book.star ? (
        printStar(book.star)
      ) : null}
      <Text style={styles.titleStyle}>{book.title}</Text>
      <Text style={styles.subtitleStyle}>{book.author}</Text>
    </View>
)};

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 16
    //backgroundColor: "#fff"
  },
  imageStyle: {
    height: 200,
    width: 140,
    marginBottom: 8
  },
  titleStyle: {
    color: "#131313",
    fontSize: 16,
    marginVertical: 8
  },
  subtitleStyle: {
    color: "#666666",
    fontSize: 12,
    marginBottom: 8
  }
});

export default BookDetail;