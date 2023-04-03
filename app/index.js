import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import users from '../assets/data/users';

const user = users[0];

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground source= {{uri: user.coverImage}} style={styles.userCard}>
        <View style = {styles.overlay}/>
        <Image src = {user.avatar} 
        style = {styles.userImage}/>
        <View>
        <Text style= {{color: 'white', fontSize: 22, fontWeight: '500'}}>{user.name}</Text>
        <Text style= {{color: 'white'}}>@{user.handle}</Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 75
  },
  userCard:{
    backgroundColor: 'gray',
    padding: 10,
    flexDirection:'row',
    alignItems: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden'
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
