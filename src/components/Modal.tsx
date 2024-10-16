import React, {useRef, useEffect} from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

type BottomSheetProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Modal: React.FC<BottomSheetProps> = ({isVisible, onClose}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isVisible]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={['25%', '50%']}>
        <BottomSheetView style={styles.modalContent}>
          <Text>Delivery details or any other content you want!</Text>
          <Button
            title="Close"
            onPress={() => {
              onClose();
            }}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Modal;
