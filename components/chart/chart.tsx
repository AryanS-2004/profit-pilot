import { ThemeColors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function LineChartExample() {
  // Dummy data for the chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: [20, 37, 45, 26, 43],
        strokeWidth: 2, // optional
      }
    ]
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={200}
        chartConfig={{
          backgroundColor: ThemeColors.sWhite,
          backgroundGradientFrom: ThemeColors.sWhite,
          backgroundGradientTo: ThemeColors.sWhite,
          decimalPlaces: 2,
          color: (opacity = 1) => ThemeColors.pBlue,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            borderTopEndRadius: 0,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: ThemeColors.White,
          },
          formatYLabel: () => ''
        }}
        bezier
        style={styles.chart}
        withHorizontalLines={false}
        withHorizontalLabels={false}
        renderDotContent={({ x, y, index }) => (
          <Text
            key={index}
            style={{
              position: 'absolute',
              top: y - 20,
              left: x - 12,
              color: 'black',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            {data.datasets[0].data[index]}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.sWhite,
    marginTop: 24,
    borderTopEndRadius: 0,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
