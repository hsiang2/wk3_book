import React from "react";
import BookDetail from "./BookDetail";
import { Text, FlatList } from "native-base";

const Booklist = ({data, navigation}) => {
    const renderItem = ({item}) => (<BookDetail book={item} navigation={navigation}/>)
    return(
        <>
            <Text color="#131313" fontSize={24} mt={2} mb={4} ml={5}>{data.title}</Text>
            <FlatList
              contentContainerStyle={{paddingRight: 4, paddingLeft: 20}}
              horizontal={true}
              data={data.list}
              renderItem={renderItem}
              keyExtractor={item => item.title}
              showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export default Booklist;