import {
  View,
  Pressable,
  Platform,
  StyleSheet,
  TextStyle,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import Checked from "@/assets/images/Round.svg";

type NextButtonProps = {
  onPress?: () => void;
  text: string;
  textStyle?: TextStyle;
  isCheckboxEnable?: boolean;
  setCheckBoxValues?: (value: (prev: any) => any) => void;
};

const { height, width } = Dimensions.get("window");

const iconSizeWidth = width > 1025 ? 420 * 1 : width * 0.06;
const iconSizeHeight = width > 1025 ? 420 * 0.2 : width * 0.1;

const SecondaryButton: React.FC<NextButtonProps> = ({
  onPress,
  text,
  textStyle,
  setCheckBoxValues,
  isCheckboxEnable = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    if (isCheckboxEnable) {
      setIsChecked((prev) => !prev);
      setCheckBoxValues((prev) => {
        if (prev.includes(text)) {
          return prev.filter((item: any) => item !== text);
        } else {
          return [...prev, text];
        }
      });
      return;
    }
    onPress();
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "gray", borderless: true }}
        style={({ pressed }) => [
          Platform.select({
            android: {
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
            ios: {
              backgroundColor: pressed
                ? "rgba(0,0,0,0.1)"
                : "rgba(255, 255, 255, 0.4)",
              borderRadius: 10,
            },
          }),
          { width: "100%" },
        ]}
        onPress={handlePress}
      >
        <View style={{ position: "relative", justifyContent: "center" }}>
          <View
            style={[
              {
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: "4%",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: 10,
              },
              textStyle,
            ]}
          >
            <ThemedText type="checkbox">{text}</ThemedText>
          </View>
          {isChecked && (
            <Checked
              width={iconSizeWidth}
              height={iconSizeHeight}
              style={{ position: "absolute", right: 20 }}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default SecondaryButton;
