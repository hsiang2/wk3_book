import React from "react";
import {Pressable, Image} from  "react-native";

const BookMark = () => {
    let isActived = false;
    const activate = () => {isActived = !isActived}
    const img = <Image 
        source={require("../../assets/icon_bookmark.png")}
      />;
    const imgActived = <Image 
    source={require("../../assets/icon_nav_bookmark_actived.png")}
  />;
    return (
    <Pressable onPress={activate}>
    {isActived ? imgActived : img}
  </Pressable>);
}
export default BookMark;