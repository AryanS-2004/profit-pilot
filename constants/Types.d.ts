type UserType = {
  name: string,
  icon: any,
  cards: CardType[]
}


type CardType = {
  id: string,
  type: string,
  expiry: string,
  name: string,
  number: string,
  accountNumber: string,
  balance: number,
  transactions: TransactionType[]
}

type TransactionType = {
  id: number,
  sent: number,
  account: string,
  amount: number,
  date: string,
  time: string,
}
