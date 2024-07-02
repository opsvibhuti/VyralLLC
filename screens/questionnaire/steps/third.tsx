import { View, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import SecondaryButton from "@/components/buttons/seconday";
import { useRecoilState } from "recoil";
import { questionnaireState } from "@/components/recoil/atoms/questionState";
const { height, width } = Dimensions.get("window");

type FunctionProps = {
  handleNext: () => void;
};

export default function Third({ handleNext }: FunctionProps) {

    const [questionnaire, setQuestionnaire] = useRecoilState(questionnaireState);

    const handleSelectStudent = (isStudent: boolean) => {
      setQuestionnaire((prev) => ({
        ...prev,
        isStudent: isStudent,
      }));
       handleNext();
    };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ gap: height * 0.05 }}>
        <View style={{ gap: height * 0.015 }}>
          <ThemedText type="questionarieHead">QUESTION 3 OF 4</ThemedText>
          <ThemedText type="questionarieTitle">
            Are you a student?
          </ThemedText>
        </View>
        <View style={{gap:height*0.02}}>
      <SecondaryButton text="Yes"  onPress={() => handleSelectStudent(true)}/>
      <SecondaryButton text="No" onPress={() => handleSelectStudent(false)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    fontSize: 24,
  },
  checkbox: {
    alignSelf: 'center',
  },
});
