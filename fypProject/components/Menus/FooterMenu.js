import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  //hooks
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          style={[
            styles.iconStyle,
            route.name === "Home" && { color: "rebeccapurple" },
          ]}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <FontAwesome5
          name="user-friends"
          style={[
            styles.iconStyle,
            route.name === "About" && { color: "rebeccapurple" },
          ]}
        />
        <Text style={{ marginLeft: 10 }}>Network</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Post")}>
        <FontAwesome5
          name="plus-circle"
          style={[
            { marginLeft: 20 },
            styles.iconStyle,
            route.name === "Post" && { color: "rebeccapurple" },
          ]}
        />
        <Text style={{ marginLeft: 20 }}>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
        <FontAwesome5
          name="chalkboard-teacher"
          style={[
            styles.iconStyle,
            route.name === "Courses" && { color: "rebeccapurple" },
          ]}
        />
        <Text style={styles.text}>Courses </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ProjectBoard")}>
        <FontAwesome5
          name="briefcase"
          style={[
            styles.iconStyle,
            route.name === "ProjectBoard" && { color: "rebeccapurple" },
          ]}
        />
        <Text>Project Board</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconStyle: {
    margin: 20,
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
    color: "#800080",
  },
  text: {
    marginLeft: 15,
  },
});
