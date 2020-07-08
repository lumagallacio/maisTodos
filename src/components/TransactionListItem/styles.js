import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  border-bottom-color: #ced8d6;
  border-bottom-width: 1px;

  padding: 10px 0;
  margin: 0 15px;
`;
export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-color: #ced8d6;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;
export const TextView = styled.View`
  flex: 1;
  margin: 0 10px;
`;
export const ColumnRight = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;
export const Column = styled.View`
  flex-direction: column;
`;
export const TextRegular = styled.Text`
  font-size: 18px;
`;
export const SubText = styled.Text`
  font-size: 12px;
  color: grey;
`;
export const TextValueTransaction = styled.Text`
  font-size: 20px;
  color: #fb3825;
`;
