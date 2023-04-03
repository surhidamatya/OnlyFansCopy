import { Image, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image src = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' 
        style = {styles.userImage}/>
        <View>
        <Text style= {{color: 'white', fontSize: 22, fontWeight: '500'}}>Elon Musk</Text>
        <Text style= {{color: 'white'}}>@eleonmusk</Text>
        </View>

      </View>
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
    alignItems: 'flex-end'
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
