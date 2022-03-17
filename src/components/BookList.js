import react from "react";
import BookDetail from "./BookDetail";
import { StyleSheet, Text, FlatList } from "react-native";

const Booklist = ({data, navigation}) => {
    const renderItem = ({item}) => (<BookDetail book={item} navigation={navigation}/>)
    return(
        <>
            <Text style={styles.titleStyle}>{data.title}</Text>
            <FlatList 
              style={styles.listStyle}
              horizontal={true}
              data={data.list}
              renderItem={renderItem}
              keyExtractor={item => item.title}
              showsHorizontalScrollIndicator={false}
            />
        </>
    );
    // const renderSectionHeader = ({section}) => (
    //     <>
    //     <Text>{section.title}</Text>
    //     <FlatList 
    //       horizontal={true}
    //       data={section.data}
    //       renderItem={({item})=> <BookDetail book={item} />}
    //     />
    //     </>
    // );
    // const renderItem = ({item}) => (
        
    // );
    // return(
    //   <SectionList 
    //     sections={sections}
    //     renderSectionHeader={renderSectionHeader}
    //     renderItem={}
    //   />
    // );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: "#131313",
        fontSize: 24,
        marginTop: 8,
        marginBottom: 16,
        marginLeft: 20
    },
    listStyle: {
        paddingLeft: 20,
        paddingRight: 4
    }
});

export default Booklist;