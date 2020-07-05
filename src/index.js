import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

export default function App() {
    const [balances, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('balance').then(response => {
            const { balance } = response.data;
            console.log(balance);
            setBalance(balance);
        });
        api.get('transactions').then(response => {
            console.log(response.data);
            setTransactions(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#00a885' />
            <SafeAreaView style ={styles.container}>
            <FlatList 
                data={transactions}
                // keyExtrator={transaction => transaction.id} 
                renderItem={({ item: transaction }) => (
                    <Text style={styles.project} >{transaction.descricao}</Text> 
                )}
            />
            </SafeAreaView>
            {/* <View style={styles.container}>
                {transactions.map(transaction => (
                    <Text style={styles.project} >{transaction.descricao}</Text>
                ))}
            </View> */}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00a885',

    },
    project: {
        color: '#FFF',
        fontSize: 20,
    }

})
