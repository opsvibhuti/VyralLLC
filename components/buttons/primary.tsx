import React from 'react';
import { View, Pressable, Platform, StyleSheet, TextStyle } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type NextButtonProps = {
  onPress?: () => void;
  text: string;
  bgColor?: string;
  textStyle?: TextStyle;
  isdisabled?: boolean;
};

const PrimaryButton: React.FC<NextButtonProps> = ({
  onPress,
  text,
  bgColor = 'purple',
  textStyle,
  isdisabled = false,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: 'gray', borderless: true }}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: isdisabled ? 'lightgray' : bgColor,
          },
          Platform.select({
            android: {
              borderRadius: 100,
            },
            ios: {
              backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : (isdisabled ? 'lightgray' : bgColor),
              borderRadius: 100,
            },
          }),
        ]}
        onPress={onPress}
        disabled={isdisabled}
      >
        <View style={styles.buttonContent}>
          <ThemedText type='buttonTitle' style={[textStyle, styles.text]}>
            {text}
          </ThemedText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
