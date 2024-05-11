import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FooterMenu from "../../components/Menus/FooterMenu";
import { PostContext } from "../../context/postContext";
import PostCard from "../../components/PostCard";
const Home = () => {
  //global satate
  //const [state] = useContext(AuthContext);
  const [posts] = useContext(PostContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
        {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
      </ScrollView>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});
export default Home;
