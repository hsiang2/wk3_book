import React from "react";
import { StyleSheet, Image, View } from "react-native";

const printStar = (star) => {
      const starlist = [];
      for(let i = 0; i < star; i++){
        starlist.push(
          <Image
            //style={style.imageStyle}
            source={require('../../assets/icon_star_filled.png')}
        />)
      }
      for(let i = 5; i > star; i--){
        starlist.push(
          <Image
            //style={style.imageStyle}
            source={require('../../assets/icon_star_empty.png')}
        />)
      }
      return (
        <View style={styles.starStyle}>
          {starlist}
        </View>
        );
    }

const styles = StyleSheet.create({
  starStyle: {
    flexDirection: "row"
  }
});


  export default printStar;