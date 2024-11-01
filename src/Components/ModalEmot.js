import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ModalEmot = ({isVisible, typeEmot}) => {
  return (
    <View>
      <Modal style={{ flex: 1 }} animationType="slide" isVisible={isVisible}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView
                    source={typeEmot}
                    autoPlay
                    loop
                    speed={1}
                    style={{
                        width: widthPercentageToDP('100%'),
                        height: heightPercentageToDP('60%'),
                    }}
                    />
        </View>
      </Modal>
    </View>
  );
};

export default ModalEmot;

const styles = StyleSheet.create({});
