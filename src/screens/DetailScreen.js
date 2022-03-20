import React from "react";
import { ScrollView, Image, Text, Center, HStack, Pressable } from "native-base";
import printStar from "../components/Star";

const DetailScreen = ({route}) => {
    const { image,
            title,
            author,
            star,
            description,
            price
          } = route.params;
    return(
        <ScrollView bgColor="white">
          <Center>
            <Image h={300} w={210} mt={2} source={{uri: image}} alt="book"/>
            <Text color="#131313" fontSize="24" mt="28" mb="2">{title}</Text>
            <Text color="#666666" fontSize="14">{author}</Text>
            {star ? (
              <HStack>
              {printStar(star)}
              <Text ml={2} mt={2} color="#131313" fontSize={14}>{star + ".0"}</Text>
              <Text color="#666666" fontSize={14} mt={2}> / 5.0</Text>
              </HStack>
            ) : null
            }
            {description ? (
              <>
                <Text mt={4} mb={7} mx={5} fontSize={14} color="#131313" lineHeight={24} textAlign="center">
                  {description}
                </Text>
                <Pressable bgColor="#6200EE" w={190} h={36} borderRadius={4} flex={1} alignItems="center" justifyContent="center">
                  <Text fontSize={14} color="#fff">{`BUY NOW FOR $${price}`}</Text>
                </Pressable>
              </>
            ) : null
            }
          </Center>
        </ScrollView>
)};
  
export default DetailScreen;