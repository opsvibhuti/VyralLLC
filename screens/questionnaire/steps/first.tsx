import { View, Dimensions, TextInput, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import PrimaryButton from "@/components/buttons/primary";
import { useRecoilState } from "recoil";
import { questionnaireState } from "@/components/recoil/atoms/questionState";

const { height, width } = Dimensions.get("window");

type FunctionProps = {
  handleNext: () => void;
};

export default function First({ handleNext }: FunctionProps) {
  const [company, setCompany] = useRecoilState(questionnaireState);

  const handleChangeCompany = (text: string) => {
    setCompany((prev) => ({
      ...prev,
      company: text,
    }));
  };

  const isButtonDisabled = company.company === "";

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ gap: height * 0.05 }}>
        <View style={{ gap: height * 0.015 }}>
          <ThemedText type="questionarieHead">QUESTION 1 OF 4</ThemedText>
          <ThemedText type="questionarieTitle">
            Company/Organization:
          </ThemedText>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Write your answer here"
            keyboardType="default"
            placeholderTextColor="#b899cd"
            onChangeText={handleChangeCompany}
            value={company.company}
          />
        </View>
      </View>
      <PrimaryButton text="Next Question" onPress={handleNext} isdisabled={isButtonDisabled}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    fontSize: 24,
  },
});
