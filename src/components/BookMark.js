import React, {useState} from 'react';
import {Pressable, Image, Text} from "native-base"

const BookMark = () => {
    const [isPressed, setIsPressed] = useState(false);
    const img = "https://compai.pub/v1/png/8eefbd07bbe4affd002062f538ea33178395984ed6b2ccbf0d785115fe838bf2";
    const imgActived = "https://compai.pub/v1/png/b48f4a0a4b8efb36a35d38032a24de70cf41ed943c82ad88769e50ff2b5d09b7";
    return(
        <Pressable onPress={() => setIsPressed(isPressed? false:true)}>
            <Image w={6} h={6}
              source={{uri: isPressed? imgActived : img}}
              alt='bookmark'/>
        </Pressable>
    )
}

export default BookMark;