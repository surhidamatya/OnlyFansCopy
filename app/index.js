import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import UserCard from "./component/UserCard";



import users from '../assets/data/users';
const user = users[0];

export default function Page() {
  return (
    <View style={styles.container}>
      <UserCard user = {users[0]}/>
      <UserCard user = {users[1]}/>
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
