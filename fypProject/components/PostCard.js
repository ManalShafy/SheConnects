import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const PostCard = ({ posts }) => {
  return (
    <View>
      {/* <Text style={styles.heading}>Total Posts {posts?.length}</Text> */}
      {posts?.map((post, i) => (
        <View style={styles.card} key={i}>
          <View style={styles.footer}>
            <Text style={styles.footTxt}>
              <FontAwesome5
                style={styles.icon}
                name="user-circle"
                color={"rebeccapurple"}
              />{" "}
              {post?.postedBy?.name}
            </Text>
            <Text style={{ marginTop: 10 }}>
              {moment(post?.createdAt).format("DD-MM-YYYY")}
            </Text>
          </View>
          <Text style={styles.title}>{post?.title}</Text>
          <Text>{post?.description}</Text>
          <View style={styles.interactView}>
            <Pressable>
              <AntDesign style={styles.icon2} name="like2" size={24} />
              <Text>Like</Text>
            </Pressable>
            <Pressable>
              <FontAwesome style={styles.icon2} name="comment-o" size={22} />
              <Text>Comment</Text>
            </Pressable>
            <Pressable>
              <FontAwesome style={styles.icon2} name="send-o" size={24} />
              <Text>Share</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "97%",
    backgroundColor: "#ffffff",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    paddingBottom: 10,
    //borderBottomWidth: 0.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignContent: "center",
    gap: 10,
    //textAlignVertical: "top",
  },
  footTxt: {
    fontSize: 18,
  },
  icon: {
    marginHorizontal: 30,
    marginBottom: 3,
    //alignSelf: "center",
    fontSize: 30,
    color: "#800080",
  },
  icon2: {
    textAlign: "center",
    color: "#800080",
  },
  icon2Txt: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 2,
  },
  interactView: {
    borderTopWidth: 0.3,
    borderTopColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
    paddingTop: 10,
  },
});
