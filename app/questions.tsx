import React from "react";
import {
  View,
  StatusBar,
  Platform,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import QuestionnaireSteps from "@/screens/questionnaire";

const { height, width } = Dimensions.get("window");

export default function Questions() {
  const { question } = QuestionnaireSteps();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          backgroundColor={Platform.OS === "android" ? "#000000" : undefined}
        />
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
        >
          <LinearGradient
            colors={["#D4CFFF", "#EFEAFF"]}
            style={styles.backgroundImage}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.contentContainer}>
              {question}
            </View>
          </LinearGradient>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width > 1025 ? 420 : "auto",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: "25%",
  },
});
