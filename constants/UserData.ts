import assets from "@/assets/assets";

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
      transactions: [
        {
          id: 124124,
          sent: 1,
          account: 'Firmansayah A.',
          amount: 20,
          date: '2024-08-25',
          time: '04:03 PM',
        },
        {
          id: 124125,
          sent: 0,
          account: 'Adan S.',
          amount: 1200,
          date: '2024-08-25',
          time: '02:30 PM',
        },
        {
          id: 124126,
          sent: 1,
          account: 'Alice K.',
          amount: 100,
          date: '2024-08-24',
          time: '08:25 PM',
        },
        {
          id: 124127,
          sent: 1,
          account: 'John D.',
          amount: 100,
          date: '2024-08-24',
          time: '06:08 PM',
        },
        {
          id: 124128,
          sent: 0,
          account: 'Joe D.',
          amount: 60,
          date: '2024-08-23',
          time: '09:05 AM',
        },
      ]
    },
    {
      id: '2',
      type: 'VISA',
      expiry: '09/24',
      name: "Sarah Muller",
      number: '1253543235213090',
      accountNumber: '23875677732',
      balance: 40500.80,
      transactions: [
        {
          id: 139124,
          sent: 0,
          account: 'Firmansayah A.',
          date: '2024-08-25',
          time: '03:26 PM',
          amount: 20,
        },
        {
          id: 139125,
          sent: 1,
          account: 'Adan S.',
          amount: 1200,
          date: '2024-08-25',
          time: '01:53 PM',
        },
        {
          id: 139126,
          sent: 0,
          account: 'Alice K.',
          amount: 100,
          date: '2024-08-24',
          time: '06:47 PM',
        },
        {
          id: 139127,
          sent: 0,
          account: 'John D.',
          amount: 100,
          date: '2024-08-24',
          time: '03:33 PM',
        },
        {
          id: 139128,
          sent: 1,
          account: 'Joe D.',
          amount: 60,
          date: '2024-08-24',
          time: '11:35 AM',
        },
      ]
    }
  ]
}