import firestore from '@react-native-firebase/firestore';

const addDataToFirestore = async ({ company, job_title, isStudent, event_hearing, user_name }) => {
  try {
    const usersCollection = firestore().collection('questions');
    await usersCollection.doc(user_name).set({
      user_name: user_name,
      company: company || '',
      job_title: job_title || '', 
      isStudent: isStudent || false, 
      event_hearing: event_hearing || [],
    });
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
    throw error;
  }
};

export default addDataToFirestore;
