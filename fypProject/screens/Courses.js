import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Courses = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const FetchMentor = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/mentor/get-mentor/");
      await AsyncStorage.setItem("@mentor", JSON.stringify(response));

      if (response.data.success) {
        navigation.navigate("Mentor");
      } else {
        navigation.navigate("");
      }
    } catch (error) {
      console.error("Error fetching mentor data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call FetchMentor when component mounts or when navigation prop changes
    FetchMentor();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-end", marginTop: -30 }}>
        <TouchableOpacity
          style={styles.regBtn}
          onPress={() => navigation.navigate("RegisterMentor")}
          disabled={loading} // Disable button when loading
        >
          <Text style={styles.postBtnText}>
            {loading ? "Loading..." : "Register as Mentor"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <FooterMenu />
      </View>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end",
  },
  regBtn: {
    backgroundColor: "#800080",
    width: 150, // Increased width for better touch area
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
