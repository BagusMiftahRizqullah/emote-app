import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';
  import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
  import happy from '../Assets/images/happy.png';
  import useMood from '../ViewModels/moodViewModels';

const Cart = ({dataCart}) => {
  const { moodReducer } = useMood();
  function CustomLabelComponent(props) {
    const { x, y } = props;
    const imgHeight = 20;
    const imgWidth = 40;
    const padding = 0;
    return (
      <Image
        href={happy}
        x={x - imgWidth / 2}
        y={y - imgHeight - padding}
        height={imgHeight}
        width={imgWidth}
      />
    );
  }

  const dataLabel = [
    {
        name: 'Happy',
        timestamp: 1,
        color: '#FFCF30',
    },

    {
        name: 'Neutral',
        timestamp: 1,
        color: '#7DE4EA',
    },
    {
        name: 'Sad',
        timestamp: 1,
        color: '#4370F2',
    },
    {
        name: 'Stress',
        timestamp: 1,
        color: '#FF2727',
    },
];

const data = {
  labels: dataLabel.map(item => item.name),
  datasets: [
      {
          data: dataLabel.map(value => dataCart.filter((item) => item.name === value.name).length),
          // barColors: dataLabel.map(item => item.color),
          colors: [
            (opacity = 1) => '#FFCF30',
            (opacity = 1) => '#7DE4EA',
            (opacity = 1) => '#4370F2',
            (opacity = 1) => '#FF2727',

        ],
      },
  ],
};
  return (
    <View>
      {
        moodReducer.type_cart === 2 ?
        <BarChart
        style={{
          shadowOffset: {
              width: 12,
              height: 12,
          },
          borderColor: '#D3D3D3',
          borderWidth: 4,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          margin: widthPercentageToDP('5%'),


      }}
        data={data}
        width={widthPercentageToDP('90%')}
        height={heightPercentageToDP('30%')}

        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientTo: 'white',
          backgroundGradientFromOpacity: 0,
          backgroundGradientFrom: 'white',
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => '#FFFFFF',
          barPercentage: 1,
          barRadius : 5,
          labelColor: (opacity = 1) => '#000000',
         }}
         withVerticalLabels={true}
         withHorizontalLabels={false}
         fromZero={true}
         withCustomBarColorFromData={true}
         flatColor={true}
         withInnerLines={false}
         showValuesOnTopOfBars={true}
         showBarTops={true}
         withOuterLines={false}
         withShadow={false}
         withCustomLabelComponent={CustomLabelComponent}
      /> :

          <PieChart
          style={{
              shadowOffset: {
                  width: 12,
                  height: 12,
              },
              borderColor: '#D3D3D3',
              borderWidth: 4,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              margin: widthPercentageToDP('5%'),

          }}
              paddingLeft={widthPercentageToDP('23%')}
              hasLegend={false}
              data={dataCart}
              width={widthPercentageToDP('90%')}
              height={heightPercentageToDP('30%')}
              accessor={'timestamp'}
              backgroundColor={'transparent'}
              chartConfig={{
                  color: (opacity = 1) => 'white',
                  labelColor: (opacity = 1) => 'white',
                  style: {

                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 16,

                  },
              }}
        />

      }
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
