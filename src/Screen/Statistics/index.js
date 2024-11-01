import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import useMood from '../../ViewModels/moodViewModels';
import Cart from '../../Components/Cart';
import smileAnimated from '../../Assets/smileAnimated.json';
import neutranAnimated from '../../Assets/neutranAnimated.json';
import sadAnimated from '../../Assets/sadAnimation.json';
import stressAnimated from '../../Assets/stressAnimation.json';


const Statistics = () => {
  const { moodReducer, addMoods } = useMood();
  console.log('mood',moodReducer?.mood);
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


        },
        textIcon:{
            flex:1,
            fontWeight:'bold',
            fontSize: 15,
            fontFamily:'Poppins-SemiBold',
            color:'#FFCF30',
        },
    },
    {
        id: 2,
        name: 'Neutral',
        typeAnimated: neutranAnimated,
        image: require('../../Assets/images/neutral.png'),

        textIcon:{
            flex:1,
            fontWeight:'bold',
            fontSize: 15,
            fontFamily:'Poppins-SemiBold',
            color:'#7DE4EA',
        },
    },
    {
        id: 3,
        name: 'Sad',
        typeAnimated: sadAnimated,
        image: require('../../Assets/images/sad.png'),

        textIcon:{
            flex:1,
            fontWeight:'bold',
            fontSize: 15,
            fontFamily:'Poppins-SemiBold',
            color:'#4370F2',

        },
    },
    {
        id: 4,
        name: 'Stress',
        typeAnimated: stressAnimated,
        image: require('../../Assets/images/stress.png'),

        textIcon:{
            flex:1,
            fontWeight:'bold',
            fontSize: 15,
            fontFamily:'Poppins-SemiBold',
            color:'#FF2727',
        },
    },

];


const getPercentage = (data, emot) => {
  const total = data.length;
  const part = data.filter((item) => item.name === emot.name).length;
  return total === 0 ? 0 : Math.floor((part / total) * 100);
};

  return (
    <View style={{ flex: 1 }}>
      <Cart dataCart={moodReducer.mood ?? []}/>
      <View style={{
        paddingHorizontal: heightPercentageToDP('2%'),
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

      }}>
      {
            listEmoticon.map((item) => {
                return (

                        <View style={styles.containerIcon}>
                          <View style={{
                            flexDirection: 'row',
                            justifyContent:'space-around',
                            alignItems: 'center',
                            width: widthPercentageToDP('30%'),
                          }}>
                            <View style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                             <Image style={styles.Icon} source={item.image} />
                              <Text style={item.textIcon}>{item.name}</Text>
                            </View>
                            <View style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                              <Text style={styles.textIcon}>{`${getPercentage(moodReducer?.mood, item)}%`}</Text>
                            </View>
                          </View>

                        </View>
                );
            })
        }
      </View>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  containerIcon:{
    borderColor: '#D3D3D3',
    paddingVertical: 4,
    paddingHorizontal: 2,
    height: heightPercentageToDP('8%'),
    width: widthPercentageToDP('90%') / 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 18,
},


textIcon:{
  flex:1,
  fontWeight:'bold',
  fontSize: 15,
  fontFamily:'Poppins-SemiBold',

},
Icon:{
  width: widthPercentageToDP('5%'),
  height: heightPercentageToDP('2.5%'),
  marginRight: 15,
},
});
