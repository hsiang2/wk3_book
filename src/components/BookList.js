import react from "react";
import BookDetail from "./BookDetail";
import { Text, FlatList } from "react-native";

const Booklist = ({data, navigation}) => {
    const renderItem = ({item}) => (<BookDetail book={item} navigation={navigation}/>)
    return(
        <>
            <Text>{data.title}</Text>
            <FlatList 
              horizontal={true}
              data={data.list}
              renderItem={renderItem}
              keyExtractor={item => item.title}
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

export default Booklist;