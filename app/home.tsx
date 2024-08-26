import { useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, FlatList, Pressable } from 'react-native';
import { homeStyles } from './styles/home.style';
import ProfileCard from '@/components/profile-card/profile-card';
import Card from '@/components/card-card/card-card';
import assets from '../assets/assets';
import BottomSheet, { BottomSheetFlatList, BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { useEffect, useMemo, useRef, useState } from 'react';
import { ThemeColors } from '@/constants/Colors';
import { checkFirstLaunch, getUserData, updateUserData } from './store-retrieve-data';
import FloatingWindow from '@/components/floating-window/floating-window';

const { height } = Dimensions.get('window');

export default function HomeScreen() {

  const snapPoints = useMemo(() => ['43%', '100%'], [])
  const snapPoints2 = useMemo(() => ['60%', '100%'], [])
  const [initialIndex, setInitialIndex] = useState(-1);

  const bottomSheetRef1 = useRef<BottomSheet>(null)
  const bottomSheetRef2 = useRef<BottomSheet>(null)

  const handleClosePress1 = () => bottomSheetRef1.current?.close();
  const handleOpenPress1 = () => bottomSheetRef1.current?.snapToIndex(0);
  const handleClosePress2 = () => bottomSheetRef2.current?.close();
  const handleOpenPress2 = () => bottomSheetRef2.current?.snapToIndex(0);

  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [userData, setUserData] = useState<UserType>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [destinationName, setDestinationName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');


  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayDate = `${year}-${month}-${day}`

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await getUserData();
      if (data) {
        setUserData(data);
        setCards(data.cards);
      }
    };
    loadData();
  }, []);

  const addTransaction = async () => {
    if (!amount || isNaN(Number(amount)) || destinationName.length === 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const newTransaction: TransactionType = {
      id: new Date().getTime(),
      account: destinationName,
      amount: Number(amount),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sent: 1,
      date: todayDate,
    };

    const updatedCards = [...cards];
    updatedCards[selectedCard].transactions.push(newTransaction);
    updatedCards[selectedCard].balance -= Number(amount);

    const updatedUserData: UserType = {
      ...userData!,
      cards: updatedCards,
    };

    updateUserData(updatedUserData);

    try {
      await setUserData(updatedUserData);
    } catch (err) {
      console.log("Error updating the data: ", err);
    }

    handleClosePress2();
    handleOpenPress1();
    setDestinationName('');
    setAmount('');
  };



  const TransactionItem = ({ transaction }: { transaction: TransactionType }) => {
    const { account, amount, time, sent } = transaction;
    const amountStyle = { color: sent ? 'red' : 'green' };
    return (
      <View style={homeStyles.transactionItem}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: height * 0.01 }}>
          <View style={homeStyles.transactionLogoContainer}>
            <Image source={sent ? assets.Send : assets.Recieve} style={homeStyles.transactionLogo} />
          </View>
          <View style={homeStyles.transactionTitleContainer}>
            <Text style={homeStyles.transactionTitle}>{`${sent ? 'Transfer to' : 'Receive from'} ${account}`}</Text>
            <Text style={homeStyles.transactionTime}>{time}</Text>
          </View>
        </View>
        <Text style={[homeStyles.transactionAmount, amountStyle]}>{sent ? `- $${amount}` : `+ $${amount}`}</Text>
      </View>
    );
  };

  const convertTo24HourFormat = (time: string) => {
    const [timeString, modifier] = time.split(' ');
    let [hours, minutes] = timeString.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = String(parseInt(hours, 10) + 12);
    }
    return `${hours}:${minutes}`;
  };

  const TransactionList = ({ transactions }: { transactions: TransactionType[] }) => {


    // console.log(transactions);
    return (
      <>
        <Text style={homeStyles.todayText}>Today</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <BottomSheetFlatList
            data={transactions.filter((item) => item.date === todayDate).sort((a, b) => {
              const timeA = convertTo24HourFormat(a.time);
              const timeB = convertTo24HourFormat(b.time);
              return timeB.localeCompare(timeA);
            })}
            renderItem={({ item }) => <TransactionItem transaction={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </>
    );
  };

  if (userData && cards) {
    return (
      <>
        <View style={homeStyles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >

            <View>
              <ProfileCard />
            </View>


            <View style={homeStyles.accountContainer}>
              <Text style={homeStyles.accountHeading}>Account</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                  data={userData?.cards}
                  renderItem={({ item }) => <Card item={item} />}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={homeStyles.listContainer}
                />
              </ScrollView>
            </View>


            <View style={homeStyles.reqSendContainer}>
              <View style={homeStyles.requestContainer}>
                <Image source={assets.Recieve} style={homeStyles.requestIcon} />
                <Text style={homeStyles.requestText}>Request</Text>
              </View>
              <Pressable
                style={homeStyles.requestContainer}
                onPress={() => { handleClosePress1(); handleOpenPress2(); }}
              >
                <Image source={assets.Send} style={homeStyles.requestIcon} />
                <Text style={homeStyles.requestText}>Transfer</Text>
              </Pressable>
              <View style={homeStyles.plusContainer}>
                <Image source={assets.Plus} style={homeStyles.plusIcon} />
              </View>
            </View>
          </ScrollView>

          {/* -----------Bottom Sheet Transaction History---------- */}


          <BottomSheet
            snapPoints={snapPoints}
            ref={bottomSheetRef1}
            backgroundStyle={{ backgroundColor: ThemeColors.bgWhite, borderRadius: 16 }}
          >
            <View style={homeStyles.btmSheetHistoryContainer}>
              <View style={homeStyles.btmSheetHistorytitleContainer}>
                <Text style={homeStyles.btmSheetHistoryTitle}>Transaction</Text>
                <Text style={homeStyles.btmSheetHistoryTitle2}>View all</Text>
              </View>
              <TransactionList transactions={userData?.cards.flatMap(card => card.transactions)} />
            </View>
          </BottomSheet>


          {/* -----------Bottom Sheet New Transaction---------- */}

          <BottomSheet
            snapPoints={snapPoints2}
            ref={bottomSheetRef2}
            index={initialIndex}
            backgroundStyle={{ backgroundColor: ThemeColors.bgWhite, borderRadius: 16 }}
          >
            <View style={homeStyles.btmSheetNewTxnContainer}>
              <View style={homeStyles.btmSheetHistorytitleContainer}>
                <Text style={homeStyles.btmSheetNewTxnTitle}>New Transaction</Text>
                <Pressable
                  onPress={() => { handleClosePress2(); handleOpenPress1() }}
                >
                  <Text style={homeStyles.btmSheetNewTxnClose}>Close</Text>
                </Pressable>
              </View>
              <Text style={homeStyles.btmSheetNewTxnInputLabel}>Destination Name</Text>
              <BottomSheetTextInput style={homeStyles.btmSheetNewTxnInputBox} value={destinationName} onChangeText={setDestinationName} />
              <Text style={homeStyles.btmSheetNewTxnInputLabel}>Amount</Text>
              <BottomSheetTextInput style={homeStyles.btmSheetNewTxnInputBox} value={amount} onChangeText={setAmount} keyboardType="numeric" />
              <Text style={homeStyles.btmSheetNewTxnInputLabel}>Select Card</Text>
              <View style={homeStyles.btmSheetNewTxnCardContainer}>
                <FlatList
                  data={cards}
                  renderItem={({ item, index }) => <Pressable
                    key={index}
                    onPress={() => setSelectedCard(index)}
                  >
                    <Text style={[homeStyles.btmSheetNewTxnCardText, {
                      backgroundColor: selectedCard === index ? ThemeColors.pGreen : ThemeColors.sWhite,
                      color: selectedCard === index ? ThemeColors.pBlack : ThemeColors.pGray
                    }]}>
                      **** {item.accountNumber.slice(-4)}
                    </Text>
                  </Pressable>}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={homeStyles.btmSheetNewTxnListContainer}
                />
              </View>
              <TouchableOpacity style={homeStyles.btmSheetNewTxnSendBtnContainer} onPress={addTransaction}>
                <Text style={homeStyles.btmSheetNewTxnSendBtnText}>Send</Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>


        </View>

        <FloatingWindow />
      </>
    );
  }

}
