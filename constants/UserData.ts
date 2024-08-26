import assets from "@/assets/assets";

const generateTransactions = (startDate: Date) => {
  const transactions = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() - i);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    for (let j = 0; j < 4; j++) {
      transactions.push({
        id: new Date().getTime() + Math.floor(Math.random() * 1000),
        sent: j % 2 === 0 ? 1 : 0,
        account: `Account ${j + 1}`,
        amount: Math.floor(Math.random() * 500) + 1,
        date: formattedDate,
        time: `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      });
    }
  }
  return transactions;
};

const generateMonthlyTransactions = (currentDate: Date) => {
  const allTransactions = [];
  for (let i = 1; i < 6; i++) {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - i);
    allTransactions.push(...generateTransactions(newDate));
  }
  // console.log(allTransactions);
  return allTransactions;
};
const today = new Date();

const transactionsCard1 = [...generateTransactions(today), ...generateMonthlyTransactions(today)]
const transactionsCard2 = [...generateTransactions(today), ...generateMonthlyTransactions(today)]

// console.log([...transactionsCard1, ...transactionsCard2])

export const userData = {
  name: "Sarah Muller",
  icon: assets.Profile,
  cards: [
    {
      id: '1',
      type: 'VISA',
      expiry: '09/24',
      name: "Sarah Muller",
      number: '1253543235213090',
      accountNumber: '23805849934',
      balance: 40500.80,
      transactions: transactionsCard1
    },
    {
      id: '2',
      type: 'VISA',
      expiry: '09/24',
      name: "Sarah Muller",
      number: '1253543235213090',
      accountNumber: '23875677732',
      balance: 40500.80,
      transactions: transactionsCard2
    }
  ]
}
