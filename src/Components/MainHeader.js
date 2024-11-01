import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const MainHeader = ({title}) => {
  return (
    <View>
        {
            title ?
            <Text style={styles.textHeader}>{title}</Text> :
            null
        }
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
    textHeader: {
        zIndex: 1000,
        position: 'relative',
        right: widthPercentageToDP('-37%'),
        fontWeight:'bold',
        fontSize: 23,
        fontFamily:'Poppins-SemiBold',
    },
});
