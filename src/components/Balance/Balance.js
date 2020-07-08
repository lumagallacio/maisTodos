import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather'; // biblioteca de icones
import {
  BalanceContainer,
  TextGreen,
  Row,
  TextBalanceValue,
  BalanceColumn,
  ViewBalanceText,
  BalanceText,
} from './styles';

const Balance = ({ value, text }) => {
  const [isVisiblebalance, setIsVisiblebalance] = useState(false);

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

  return (
    <BalanceContainer>
      {isVisiblebalance ? (
        <BalanceColumn>
          <TextGreen>Saldo Disponivel</TextGreen>
          <Row>
            <TextBalanceValue>{formatReal(value)} </TextBalanceValue>
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
        <ViewBalanceText>
          <BalanceText>{text}</BalanceText>
        </ViewBalanceText>
      </BalanceColumn>
    </BalanceContainer>
  );
};

export default Balance;
