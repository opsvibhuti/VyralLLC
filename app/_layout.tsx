import 'react-native-gesture-handler';
import { Stack } from "expo-router";
import {  RecoilRoot } from "recoil";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <RecoilRoot>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="questions" options={{headerShown:false}}/>
    </Stack>
    </RecoilRoot>
    </GestureHandlerRootView>
  );
}
