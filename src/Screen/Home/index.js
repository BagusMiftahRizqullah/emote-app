import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import useMood from '../../ViewModels/moodViewModels';
import ModalEmot from '../../Components/ModalEmot';
import smileAnimated from '../../Assets/smileAnimated.json';
import neutranAnimated from '../../Assets/neutranAnimated.json';
import sadAnimated from '../../Assets/sadAnimation.json';
import stressAnimated from '../../Assets/stressAnimation.json';


const Home = () => {
    const { moodReducer, addMoods } = useMood();
    const [selectedEmote, setEmote] = useState(0);
    const [visible, setVisible] = useState(false);

    console.log('moodHOME',moodReducer);

    const showModalWithTimeout = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 2000); // Adjust time (3000ms = 3 seconds) as needed
      };

    const listEmoticon = [
        {
            id: 1,
            name: 'Happy',
            typeAnimated: smileAnimated,
            image: require('../../Assets/images/happy.png'),
            containerIcon:{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(249, 245, 230, 255)',
                padding: 28,
                borderRadius: 8,
                marginBottom: 18,
                borderWidth: selectedEmote == 1 ? 2 : null,
                borderColor: '#FFCF30',
            },
            textIcon:{
                flex:1,
                fontWeight:'bold',
                fontSize: 22,
                fontFamily:'Poppins-SemiBold',
                color:'#FFCF30',
            },
        },
        {
            id: 2,
            name: 'Neutral',
            typeAnimated: neutranAnimated,
            image: require('../../Assets/images/neutral.png'),
            containerIcon:{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(236, 253, 255, 255)',
                padding: 28,
                borderRadius: 8,
                marginBottom: 18,
                borderWidth: selectedEmote == 2 ? 2 : null,
                borderColor: '#7DE4EA',
            },
            textIcon:{
                flex:1,
                fontWeight:'bold',
                fontSize: 22,
                fontFamily:'Poppins-SemiBold',
                color:'#7DE4EA',
            },
        },
        {
            id: 3,
            name: 'Sad',
            typeAnimated: sadAnimated,
            image: require('../../Assets/images/sad.png'),
            containerIcon:{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(234, 238, 254, 251)',
                padding: 28,
                borderRadius: 8,
                marginBottom: 18,
                borderWidth: selectedEmote == 3 ? 2 : null,
                borderColor: '#4370F2',
            },
            textIcon:{
                flex:1,
                fontWeight:'bold',
                fontSize: 22,
                fontFamily:'Poppins-SemiBold',
                color:'#4370F2',

            },
        },
        {
            id: 4,
            name: 'Stress',
            typeAnimated: stressAnimated,
            image: require('../../Assets/images/stress.png'),
            containerIcon:{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(250, 225, 224, 251)',
                padding: 28,
                borderRadius: 8,
                marginBottom: 18,
                borderWidth: selectedEmote == 4 ? 2 : null,
                borderColor: '#FF2727',
            },
            textIcon:{
                flex:1,
                fontWeight:'bold',
                fontSize: 22,
                fontFamily:'Poppins-SemiBold',
                color:'#FF2727',
            },
        },

    ];


  return (
    <View style={{ flex: 1, padding: 15, backgroundColor:'#FFFFFF' }}>
      <Text style={styles.textHeader}>How are you feeling right now?</Text>
      <View style={{paddingVertical: 15}}>
        {
            listEmoticon.map((item) => {
                return (
                    <TouchableOpacity onPress={() => {showModalWithTimeout(),setEmote(item), addMoods({
                        name: item.name,
                        timestamp: new Date().getTime(),
                        color: item.containerIcon.borderColor,
                    });}}>
                        <View style={item.containerIcon}>
                             <Image style={styles.Icon} source={item.image} />
                            <Text style={item.textIcon}>{item.name}</Text>

                        </View>
                    </TouchableOpacity>
                );
            })
        }
      </View>
      <ModalEmot typeEmot={selectedEmote.typeAnimated} isVisible={visible}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    textHeader: {
        fontWeight:'bold',
        fontSize: 23,
        fontFamily:'Poppins-SemiBold',
    },

    Icon:{
        width: widthPercentageToDP('10%'),
        height: heightPercentageToDP('4.5%'),
        marginRight: 15,
    },

});
