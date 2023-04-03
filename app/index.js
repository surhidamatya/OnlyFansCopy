import { Image, ImageBackground, StyleSheet, FlatList, View } from "react-native";
import UserCard from "./component/UserCard";



import users from '../assets/data/users';

export default function Page() {
  return (
    <View style={styles.container}>

      <FlatList 
      data = {users}
      renderItem = {(item) => <UserCard user = {item}/>}
      showsVerticalScrollIndicator = {false}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 75
  }
});
