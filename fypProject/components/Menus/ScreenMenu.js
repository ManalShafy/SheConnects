import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/auth/Home";
import Register from "../../screens/auth/Register";
import Login from "../../screens/auth/Login";
import { AuthContext } from "../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import About from "../../screens/About";
import Post from "../../screens/Post";
import Courses from "../../screens/Courses";
import ProjectBoard from "../../screens/ProjectBoard";
import Account from "../../screens/About";
import RegisterMentor from "../../screens/auth/RegisterMentor";
import Mentor from "../../screens/Mentor";
const ScreenMenu = () => {
  //global state
  const [state] = useContext(AuthContext);
  //auth condition true false
  const authenticatedUser = state?.user && state?.token;

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            // MY NETWORK SCREEN
            name="About"
            component={About}
            options={{
              //comment this out when you use headerbackTitle
              title: "Sheconnects",
              // headerBackTitle: "Back",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Courses"
            component={Courses}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="ProjectBoard"
            component={ProjectBoard}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="RegisterMentor"
            component={RegisterMentor}
            options={{
              title: "Sheconnects",
              header: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            // MY NETWORK SCREEN
            name="Mentor"
            component={Mentor}
            options={{
              //comment this out when you use headerbackTitle
              title: "Sheconnects",
              // headerBackTitle: "Back",
              header: () => <HeaderMenu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;

const styles = StyleSheet.create({});
