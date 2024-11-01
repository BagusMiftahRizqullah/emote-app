import { StyleSheet, Text, View } from 'react-native';
import React,{useRef} from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import useMood from '../../ViewModels/moodViewModels';

const Settings = () => {
  const { moodReducer,setupCart } = useMood();
  const switchRef = useRef(null);
  const dataOptions = [
    {label: 'PIE CART', value: 1},
    {label: 'BAR CART', value: 2},
  ];

  return (
    <View style={{ flex: 1, paddingHorizontal: heightPercentageToDP('2%'), paddingTop: heightPercentageToDP('2%')  }}>
       <LottieView
          source={require('../../Assets/settings.json')}
          autoPlay
          loop
          speed={1}
          style={{
              width: widthPercentageToDP('100%'),
              height: heightPercentageToDP('30%'),
          }}
          />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Poppins-SemiBold'}}> default Cart</Text>
      <SwitchSelector
          ref={switchRef}
          style={{ width: widthPercentageToDP('50%')}}
          initial={dataOptions.findIndex(option => option.value === moodReducer?.type_cart)}
          onPress={value => setupCart(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#FFCF30'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={dataOptions}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
