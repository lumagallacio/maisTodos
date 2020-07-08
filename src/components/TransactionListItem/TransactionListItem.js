import React from 'react';
import Icon from 'react-native-vector-icons/Feather'; // biblioteca de icones
import Moment from 'moment';
import {
  Container,
  Circle,
  TextView,
  ColumnRight,
  Column,
  TextValueTransaction,
  TextRegular,
  SubText,
} from './styles';

function formatReal(n) {
  return (
    // eslint-disable-next-line prefer-template
    'R$ ' +
    n
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
  );
}

export default function TransactionListItem({ transaction }) {
  const date = transaction.dataTransacao;

  return (
    <Container>
      <Circle>
        {transaction.tipoTransacao === 'Recarga Pré-pago ' && (
          <Icon name="phone" size={20} />
        )}
        {transaction.tipoTransacao === 'Pagamento' && (
          <Icon name="dollar-sign" size={20} />
        )}
      </Circle>
      <TextView>
        <Column>
          <TextRegular>{transaction.tipoTransacao}</TextRegular>
          <SubText>{transaction.descricao}</SubText>
        </Column>
      </TextView>
      <ColumnRight>
        <TextValueTransaction>
          {`-${formatReal(transaction.valorTransacao)}`}
        </TextValueTransaction>

        <SubText>{Moment(date).format('DD/MM')}</SubText>
      </ColumnRight>
    </Container>
  );
}
