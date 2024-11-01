import { StyleSheet, Text, View, StatusBar,Image } from 'react-native';
import React, {useEffect} from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const SplashScreen = (props) => {


  useEffect(() => {
    StatusBar.setHidden(true);
    setTimeout(() => {
      props. navigation.reset({
        index: 0,
        routes: [{ name: 'bottomTabs' }], // Replace 'Home' with the name of your initial screen
      });
  }, 2000);
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
       <LottieView
                    source={require('../Assets/animationsplash.json')}
                    autoPlay
                    loop
                    speed={1}
                    style={{
                        width: widthPercentageToDP('100%'),
                        height: heightPercentageToDP('60%'),
                    }}
                    />
      <Text style={{
         fontWeight:'bold',
         fontSize: 32,
         fontFamily:'Poppins-SemiBold',
      }}>MOOD APPS</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
