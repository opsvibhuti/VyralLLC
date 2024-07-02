import { selector } from 'recoil';
import {questionnaireState} from '../atoms/questionState'

export const questionnaireLengthSelector = selector({
    key: 'questionnaireLengthSelector',
    get: ({ get }) => {
      const questionnaire = get(questionnaireState);
      return Object.values(questionnaire)[3];
    },
  });