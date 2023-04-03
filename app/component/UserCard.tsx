import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from 'react';

const UserCard = (props) => {
    const { user } = props;

  return (
    <ImageBackground source= {{uri: user.item.coverImage}} style={styles.userCard}>
        <View style = {styles.overlay}/>
        <Image src = {user.item.avatar} 
        style = {styles.userImage}/>
        <View>
        <Text style= {{color: 'white', fontSize: 22, fontWeight: '500'}}>{user.item.name}</Text>
        <Text style= {{color: 'white'}}>@{user.item.handle}</Text>
        </View>

      </ImageBackground>
  )
}

export default UserCard;
const styles = StyleSheet.create({
    userCard:{
      backgroundColor: 'gray',
      padding: 10,
      flexDirection:'row',
      alignItems: 'flex-end',
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 5
    },
    overlay:{
      backgroundColor: 'rgba(0,0,0,0.3)',
      position: 'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0
    },
    userImage:{
      height: 100,
      width: 100,
      borderRadius: 100,
      borderColor: 'white',
      borderWidth: 5,
      marginRight: 20
    }
  });