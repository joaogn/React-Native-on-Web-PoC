import React from 'react';
import { ScrollView } from 'react-native';
import { useDevsContext } from '../../contexts/DevsContext';
import DevCard from '../../components/DevCard';

const CardListScreen = React.memo(() => {
  const { devList } = useDevsContext();
  return (
    <ScrollView
      testID="devListContainerMobile"
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexGrow: 1,
      }}
    >
      {devList.map(({ id, avatar_url, login, name }) => (
        <DevCard key={id} avatar_url={avatar_url} user={login} name={name} />
      ))}
    </ScrollView>
  );
});

export default CardListScreen;
