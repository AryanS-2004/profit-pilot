import { ThemeColors } from '@/constants/Colors';
import React, { useMemo } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function LineChartExample({ month, earning, card }: { month: number, earning: number, card: CardType }) {
  const data = useMemo(() => {
    // console.log(card)
    const filteredTransactions = card.transactions.filter(transaction => {
      const transactionMonth = new Date(transaction.date).getMonth() + 1;
      return transactionMonth === month && transaction.sent === (earning === 1 ? 0 : 1);
    }
    );

    // console.log(filteredTransactions);

    const uniqueDates = [...new Set(filteredTransactions.map(transaction => transaction.date))].sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).slice(0, 5);

    // console.log(uniqueDates);
    const totals = uniqueDates.map(date => {
      return filteredTransactions
        .filter(transaction => transaction.date === date)
        .reduce((sum, transaction) => sum + transaction.amount, 0);
    });

    const dayLabels = uniqueDates.map(date => (new Date(date).getDate()).toString());

    // console.log(dayLabels);

    return {
      labels: dayLabels.reverse(),
      datasets: [{ data: totals.reverse(), strokeWidth: 2 }],
    };
  }, [month, earning]);

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
          formatYLabel: () => '',
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
