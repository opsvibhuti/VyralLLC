import { atom } from "recoil";

export const questionnaireState = atom({
    key: 'questionnaireState',
    default: {
      "company" : "",
      "job_title" : "",
      "isStudent" : false,
      "event_hearing" : []
    }, 
  });