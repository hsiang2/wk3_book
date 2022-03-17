import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Booklist from "../components/BookList";
import popularBooksData from "../json/popular_books.json";
import newestData from "../json/newest"

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.containerStyle}>
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

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#fff",
    }
});

export default HomeScreen;