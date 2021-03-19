/* eslint-disable camelcase */
import React from 'react';
import { Container, Avatar, Info, Name, User } from './styles';

interface Props {
  avatar_url: string;
  name: string;
  user: string;
}

const DevCard = ({ avatar_url, name, user }: Props) => (
  <Container>
    <Avatar
      testID="devCardAvatar"
      source={{
        uri: avatar_url,
      }}
    />
    <Info>
      <Name>{name}</Name>
      <User>{user}</User>
    </Info>
  </Container>
);
export default DevCard;
