import React from "react";
import { ScrollView } from "native-base";
import Booklist from "../components/BookList";
import popularBooksData from "../json/popular_books.json";
import newestData from "../json/newest"

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView bgColor="white">
            <Booklist 
                data={popularBooksData}
                navigation={navigation}
            />
            <Booklist 
                data={newestData}
                navigation={navigation}
            />
        </ScrollView>
    );
};

export default HomeScreen;