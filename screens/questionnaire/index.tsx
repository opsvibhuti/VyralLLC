import { useState } from "react";
import First from "./steps/first";
import Second from "./steps/second";
import Third from "./steps/third";
import Forth from "./steps/forth";
import { router } from "expo-router";

export default function QuestionnaireSteps() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        if(currentQuestion === questions.length-1){
            router.back()
            return;
        }

        setCurrentQuestion((curr) => curr + 1)
    }


    const questions = [<First key={0} handleNext={handleNext}/>, <Second key={1} handleNext={handleNext}/>, <Third key={2} handleNext={handleNext}/>, <Forth key={3} handleNext={handleNext}/>]


    return {
        question: questions[currentQuestion],
        nextFunction: handleNext,
        currentQuestion: currentQuestion,
      };
 
}
