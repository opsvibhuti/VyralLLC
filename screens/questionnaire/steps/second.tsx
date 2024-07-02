import { View, Dimensions, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import PrimaryButton from "@/components/buttons/primary";
import { questionnaireState } from "@/components/recoil/atoms/questionState";
import { useRecoilState } from "recoil";

const { height, width } = Dimensions.get("window");

type FunctionProps = {
  handleNext: () => void;
};

export default function Second({ handleNext }: FunctionProps) {

  const [questionnaire, setQuestionnaire] = useRecoilState(questionnaireState);

  const handleChangeJobTitle = (text: string) => {
    setQuestionnaire((prev) => ({
        ...prev,
        job_title: text,
      }));
  };

  const isButtonDisabled = questionnaire.job_title === "";
  
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ gap: height * 0.05 }}>
        <View style={{ gap: height * 0.015 }}>
          <ThemedText type="questionarieHead">QUESTION 2 OF 4</ThemedText>
          <ThemedText type="questionarieTitle">
            Job Title
          </ThemedText>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Write your answer here"
            keyboardType="default"
            placeholderTextColor="#b899cd"
            onChangeText={handleChangeJobTitle}
            value={questionnaire.job_title}
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
