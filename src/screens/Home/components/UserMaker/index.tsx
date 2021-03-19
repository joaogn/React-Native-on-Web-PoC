import React from 'react';
import { Container, Image } from './styles';

interface Props {
  link: string;
}

const UserMaker = ({ link }: Props) => (
  <Container testID="userMakerContainer">
    <Image
      source={{
        uri: link,
      }}
    />
  </Container>
);
export default UserMaker;
