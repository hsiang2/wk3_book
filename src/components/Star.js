import React from "react";
import { Image, HStack } from "native-base";

const printStar = (star) => {
      const starlist = [];
      for(let i = 0; i < star; i++){
        starlist.push(
          <Image
            mr={1}
            source={require('../../assets/icon_star_filled.png')}
        />)
      }
      for(let i = 5; i > star; i--){
        starlist.push(
          <Image
            mr={1}
            source={require('../../assets/icon_star_empty.png')}
        />)
      }
      return (
        <HStack mt={2} alignItems="center">
          {starlist}
        </HStack>
        );
    }

  export default printStar;