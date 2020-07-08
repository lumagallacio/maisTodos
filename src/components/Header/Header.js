import React from 'react';
import Icon from 'react-native-vector-icons/Feather'; // biblioteca de icones
import { Container, TextHeader } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <Icon name="align-justify" size={20} color="#FFF" />
      <TextHeader>{title}</TextHeader>
      <Icon name="bell" size={20} color="#FFF" />
    </Container>
  );
}
