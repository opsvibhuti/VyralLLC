import { View, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import SecondaryButton from "@/components/buttons/seconday";
import PrimaryButton from "@/components/buttons/primary";
import { useRecoilState } from "recoil";
import { questionnaireState } from "@/components/recoil/atoms/questionState";
const { height, width } = Dimensions.get("window");

type FunctionProps = {
  handleNext: () => void;
};

export default function Forth({ handleNext }: FunctionProps) {

    const [questionnaire, setQuestionnaire] = useRecoilState(questionnaireState);
    const [checkBoxValues, setCheckBoxValues] = useState([])

    const handlePress = () => {

        if(checkBoxValues.length === 0){
            return;
        }

        setQuestionnaire((prev) => ({
            ...prev,
            event_hearing: checkBoxValues,
          }));

          handleNext();

    }
    
    const isButtonDisabled = checkBoxValues.length === 0;

    return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ gap: height * 0.05 }}>
        <View style={{ gap: height * 0.015 }}>
          <ThemedText type="questionarieHead">QUESTION 4 OF 4</ThemedText>
          <ThemedText type="questionarieTitle">
            Where did you hear about this event?:
          </ThemedText>
        </View>
        <View style={{gap:height*0.02}}>
      <SecondaryButton text="LinkedIn" setCheckBoxValues={setCheckBoxValues} isCheckboxEnable={true}/>
      <SecondaryButton text="Instagram" setCheckBoxValues={setCheckBoxValues} isCheckboxEnable={true}/>
      <SecondaryButton text="Twitter" setCheckBoxValues={setCheckBoxValues} isCheckboxEnable={true}/>
      <SecondaryButton text="Facebook" setCheckBoxValues={setCheckBoxValues} isCheckboxEnable={true}/>
        </View>
      </View>
      <PrimaryButton text="Claim Ticket" onPress={handlePress} isdisabled={isButtonDisabled}/>
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
