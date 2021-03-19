import React from 'react';
import { Container, Image } from './styles';

interface Props {
  link: string;
}

const DevMaker = ({ link }: Props) => (
  <Container testID="devMakerContainer">
    <Image
      source={{
        uri: link,
      }}
    />
  </Container>
);
export default DevMaker;
