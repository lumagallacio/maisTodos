import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, View } from 'react-native';
import api from '../services/api';
import {
  Container,
  HeaderLight,
  Header,
  HeaderBalance,
  BalanceColumn,
  BalanceContainer,
  TextBalanceValue,
  Row,
  TextGreen,
  BalanceText,
  OptionsTransactions,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isVisiblebalance, setIsVisiblebalance] = useState(false);

  useEffect(() => {
    api.get('balance').then((response) => {
      const { balance } = response.data;
      //   console.log(balance);
      setBalance(balance);
    });
    api.get('transactions').then((response) => {
      //   console.log(response.data);
      setTransactions(response.data);
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#00a885" />
      <Header>
        <Icon name="align-justify" size={20} color="#FFF" />
        <HeaderLight>Carteira Digital</HeaderLight>
        <Icon name="bell" size={20} color="#FFF" />
      </Header>
      <HeaderBalance>
        <Icon name="user" size={22} color="#00a885" />
        <Icon name="map-pin" size={22} color="#00a885" />
      </HeaderBalance>
      <BalanceContainer>
        {isVisiblebalance ? (
          <BalanceColumn>
            <TextGreen>Saldo Disponivel</TextGreen>
            <Row>
              <TextBalanceValue>R$ {balance} </TextBalanceValue>
              <Icon
                name="eye"
                size={25}
                color="#00a885"
                onPress={() => setIsVisiblebalance(false)}
              />
            </Row>
          </BalanceColumn>
        ) : (
          <Icon
            name="eye-off"
            size={80}
            color="#00a885"
            onPress={() => setIsVisiblebalance(true)}
          />
        )}
        <BalanceColumn>
          <BalanceText>
            Esse é o valor total de cashback, depósitos, pagamentos e
            transferências recebidas.
          </BalanceText>
        </BalanceColumn>
      </BalanceContainer>
      <OptionsTransactions>
        <HeaderLight>Tudo</HeaderLight>
        <HeaderLight>Entrada</HeaderLight>
        <HeaderLight>Saída</HeaderLight>
        <HeaderLight>Futuro</HeaderLight>
      </OptionsTransactions>
      {/* <SafeAreaView>
        <FlatList
          data={transactions}
          // keyExtrator={transaction => transaction.id}
          renderItem={({ item: transaction }) => (
            <Text>{transaction.descricao}</Text>
          )}
        />
      </SafeAreaView> */}
    </Container>
  );
}
