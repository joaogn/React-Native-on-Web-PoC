import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Maps from '../components/Maps';
import { Container } from './styles';
import { useDevsContext } from '../../../contexts/DevsContext';
import AddPersonIcon from '../../../assets/icons/person_add.svg';
import ShowListIcon from '../../../assets/icons/view_list.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import { useAuthContext } from '../../../contexts/AuthContext';
import FloatingButton from '../../../components/FloatingButton';

const Main = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuthContext();
  const { devList } = useDevsContext();
  const theme = useTheme();
  return (
    <Container testID="homeContainerMobile">
      <Maps devList={devList} user={user} />

      <FloatingButton
        top={20}
        right={10}
        handlePress={() => navigation.navigate('AddNewUser')}
      >
        <AddPersonIcon fill={theme.white} testID="openAddNewUserMobile" />
      </FloatingButton>

      <FloatingButton
        top={80}
        right={10}
        handlePress={() => navigation.navigate('DevList')}
      >
        <ShowListIcon fill={theme.white} testID="openDevListMobile" />
      </FloatingButton>

      <FloatingButton bottom={40} right={10} handlePress={() => signOut()}>
        <LogoutIcon fill={theme.red} testID="signOutButton" />
      </FloatingButton>
    </Container>
  );
};

export default Main;
