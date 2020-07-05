import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  background-color: #fff;

  /* background-color: #00a885; */
`;

export const Header = styled.View`
  background-color: #00a885;
  padding: 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderBalance = styled.View`
  background-color: #fff;
  padding: 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const BalanceContainer = styled.View`
  /* background-color: red; */
  flex-direction: column;
  height: 20%;

  justify-content: center;
  align-items: center;
  justify-content: center;

  margin-bottom: 5%;
`;

export const BalanceColumn = styled.View`
  background-color: #fff;
  /* background-color: pink; */
  flex-direction: column;

  max-width: 70%;

  justify-content: flex-start;
`;

export const TextBalanceValue = styled.Text`
  font-size: 45px;
  font-weight: bold;
  /* font-family: 'Roboto-Medium'; */
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextGreen = styled.Text`
  color: #00a885;
  font-weight: bold;
`;
export const BalanceText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
`;

export const HeaderLight = styled.Text`
  font-size: 16px;
  /* font-family: 'Roboto-Regular'; */
  color: #ffff;
`;
export const OptionsTransactions = styled.View`
  background-color: #00a885;
  flex-direction: row;
  justify-content: space-between;
  padding: 4% 5%;
`;
