import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

import TransactionListItem from '../TransactionListItem/TransactionListItem';

export default function TransactionList({ transactions, filter }) {
  if (filter)
    transactions = transactions.filter((item) => {
      return item.tipoLancamento === filter;
    });

  return (
    <Container>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item: transaction }) => (
          <TransactionListItem transaction={transaction} />
        )}
      />
    </Container>
  );
}
