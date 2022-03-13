import React from "react";
import { View } from "react-native";
import Booklist from "../components/BookList";
import popularBooksData from "../json/popular_books.json";
import newestData from "../json/newest"

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Booklist 
                data={popularBooksData}
                navigation={navigation}
            />
            <Booklist 
                data={newestData}
                navigation={navigation}
            />
        </View>
    );
};

export default HomeScreen;