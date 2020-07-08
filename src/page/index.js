import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper'; // biblioteca pro swiper do saldo
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; // biblioteca pro swiper entre as tabs das transacoes
import { NavigationContainer } from '@react-navigation/native';

import api from '../services/api'; // api pras requisicoes

// Componentes
import Header from '../components/Header/Header';
import Balance from '../components/Balance/Balance';
import TransactionList from '../components/TransactionList/TransactionList';

// Componentes
import { Container, WrapperBalance, WrapperSwiper } from './styles';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    async function getBalance() {
      try {
        await api.get('balance').then((response) => {
          const { balance } = response.data;
          setBalance(balance);
        });
      } catch (error) {
        console.error(error);
      }
    }
    async function getTransactions() {
      try {
        await api.get('transactions').then((response) => {
          setTransactions(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    }
    getBalance();
    getTransactions();
  }, []);

  return (
    <NavigationContainer>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <Header title="Carteira Digital" />
        <WrapperSwiper>
          <Swiper
            showsButtons={false}
            showsPagination
            loop={false}
            height={200}
          >
            <WrapperBalance>
              <Balance
                value={balance}
                text="Esse é o valor total de cashback, depósitos, pagamentos e
            transferências recebidas."
              />
            </WrapperBalance>
            <WrapperBalance>
              <Balance
                value={balance}
                text="Esse é o valor que você ganhou comprando em parceiros de Cartão de TODOS e comprando no Ganha TODOS."
              />
            </WrapperBalance>
          </Swiper>
        </WrapperSwiper>

        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12, color: '#FFF' },
            indicatorStyle: {
              backgroundColor: '#FFF',
            },
            style: {
              backgroundColor: '#00a885',
            },
          }}
        >
          <Tab.Screen
            name="Tudo"
            children={() => <TransactionList transactions={transactions} />}
          />
          <Tab.Screen
            name="Entrada"
            children={() => (
              <TransactionList transactions={transactions} filter="C" />
            )}
          />
          <Tab.Screen
            name="Saída"
            children={() => (
              <TransactionList transactions={transactions} filter="D" />
            )}
          />
          <Tab.Screen name="Futuro" component={Container} />
        </Tab.Navigator>
      </Container>
    </NavigationContainer>
  );
}
