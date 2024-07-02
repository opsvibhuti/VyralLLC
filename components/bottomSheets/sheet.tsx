import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
    children: React.ReactNode;
  }


const {height,width} = Dimensions.get('window')

const BottomSheet : React.FC<BottomSheetProps> = ({children}) => {

    // ref
  const bottomSheetModalRef = useRef(null);


   // callbacks
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);



  return (
    <BottomSheetModalProvider> 
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={['60%' ,'80%']}
        enablePanDownToClose={false}
        enableHandlePanningGesture={true}
        backgroundStyle={{borderTopRightRadius:50, borderTopLeftRadius:50}}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  </BottomSheetModalProvider>
  )
}



const styles = StyleSheet.create({
    container: {
    position:'absolute',
    bottom: "0%",
    width: width > 1025 ? 420 : 'auto',
    },
    contentContainer: {
      backgroundColor: 'white',
      marginBottom:"10%",
      borderTopRightRadius:50,
      borderTopLeftRadius:50
    },
  });


export default BottomSheet;