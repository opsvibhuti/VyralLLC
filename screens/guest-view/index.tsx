import React from "react";
import {
  View,
  Text,
  StatusBar,
  Platform,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@/components/bottomSheets/sheet";
import { ThemedText } from "@/components/ThemedText";
import Calendar from "@/assets/images/calendar.svg";
import Location from "@/assets/images/location.svg";
import Ticket from "@/assets/images/ticket.svg";
import Price from "@/assets/images/price.svg";
import Map from "@/assets/images/Map.svg";
import PrimaryButton from "@/components/buttons/primary";
import { router } from "expo-router";
import { useRecoilValue } from "recoil";
import { questionnaireLengthSelector } from "@/components/recoil/selectors/totalQuestions";

const { height, width } = Dimensions.get("window");

const iconSizeWidth = width > 1025 ? 420 * 1 : width * 0.06;
const iconSizeHeight = width > 1025 ? 420 * 0.2 : width * 0.1;

export default function Event() {
  const questionnaireLength = useRecoilValue(questionnaireLengthSelector);

  const handleButtonPress = () => {
    router.navigate("questions");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          backgroundColor={Platform.OS === "android" ? "#000000" : undefined}
        />
        <View style={styles.container}>
          <ImageBackground
            source={require("@/assets/images/bg-img.png")}
            resizeMode="stretch"
            style={styles.backgroundImage}
          />
          <BottomSheet>
            <ScrollView>
              <View style={styles.contentContainer}>
                <View style={styles.eventInfo}>
                  <View style={styles.eventTitleContainer}>
                    <ThemedText type="default">Art show</ThemedText>
                    <Image
                      source={require("@/assets/images/art.png")}
                      resizeMode="contain"
                      style={styles.eventImage}
                    />
                  </View>
                  <ThemedText type="defaultSemiBold">
                    by Olivia Adams
                  </ThemedText>
                </View>
                <View style={styles.detailsContainer}>
                  <View style={styles.detailRow}>
                    <Calendar width={iconSizeWidth} height={iconSizeHeight} />
                    <View style={styles.detailText}>
                      <ThemedText type="title">Monday, Nov 13 2023</ThemedText>
                      <ThemedText type="subtitle">
                        6.00 PM - 10.00 PM
                      </ThemedText>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Location width={iconSizeWidth} height={iconSizeHeight} />
                    <View style={styles.detailText}>
                      <ThemedText type="title">Lower Manhattan</ThemedText>
                      <ThemedText type="subtitle" style={styles.subtitlePurple}>
                        Join to see full address
                      </ThemedText>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Ticket width={iconSizeWidth} height={iconSizeHeight} />
                    <View style={styles.detailText}>
                      <ThemedText type="title">78/100 tickets left</ThemedText>
                      <ThemedText type="subtitle">100+ invited</ThemedText>
                    </View>
                  </View>
                  <View style={styles.detailRow}>
                    <Price width={iconSizeWidth} height={iconSizeHeight} />
                    <View style={styles.detailText}>
                      <ThemedText type="title">$10.00 - $50.00</ThemedText>
                    </View>
                  </View>
                </View>
                <View style={styles.aboutEvent}>
                  <ThemedText type="heading">About this event</ThemedText>
                  <ThemedText type="description">
                    Come join me in celebrating my 25th birthday! I can't wait
                    to celebrate with all of you, so let's make it a night to
                    remember. See you at the party!
                  </ThemedText>
                </View>
                <View style={styles.findEvent}>
                  <ThemedText type="heading">Find this event</ThemedText>
                  <Map style={styles.mapImage} />
                </View>
              </View>
            </ScrollView>
          </BottomSheet>
          <View style={styles.buttonContainer}>
            {questionnaireLength?.length > 0 ? (
              <PrimaryButton text="Waiting for approval" bgColor="#F5AC40" />
            ) : (
              <PrimaryButton text="Buy tickets" onPress={handleButtonPress} />
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width > 1025 ? 420 : "auto",
  },
  backgroundImage: {
    flex: 1,
    height: "70%",
    width: "100%",
  },
  contentContainer: {
    paddingVertical: "8%",
    paddingHorizontal: "5%",
    marginBottom: "20%",
    gap: height * 0.04,
  },
  eventInfo: {
    gap: height * 0.015,
  },
  eventTitleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 2,
  },
  eventImage: {
    height: "80%",
  },
  detailsContainer: {
    paddingHorizontal: "1%",
    gap: height * 0.03,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.04,
  },
  detailText: {
    gap: height * 0.01,
  },
  subtitlePurple: {
    color: "purple",
  },
  aboutEvent: {
    gap: height * 0.015,
  },
  findEvent: {
    gap: height * 0.02,
  },
  mapImage: {
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: "white",
    paddingHorizontal: "2%",
    paddingVertical: "8%",
  },
});
