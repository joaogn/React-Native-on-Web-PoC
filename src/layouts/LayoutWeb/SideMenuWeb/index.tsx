import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { useHover } from 'react-native-web-hooks';
import { Container, Top, Middle, Bottom } from './styles';
import WorldIcon from '../../../assets/icons/world.svg';
import ChartIcon from '../../../assets/icons/leaderboard.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import logoImg from '../../../assets/logo.png';
import MenuButton from './components/MenuButton';
import { useAuthContext } from '../../../contexts/AuthContext';
import Image from '../../../components/Image';

const SideMenu = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const refSignOut = useRef(null);
  const signOutIsHovered = useHover(refSignOut);

  const { signOut } = useAuthContext();

  return (
    <Container>
      <Top>
        <Image
          style={{ height: 48, width: 48, marginRight: 10 }}
          source={logoImg}
        />
      </Top>

      <Middle>
        <MenuButton
          icon={WorldIcon}
          handlePress={() => navigation.navigate('Home')}
          isActive={route.name === 'Home'}
        />
        <MenuButton
          icon={ChartIcon}
          handlePress={() => navigation.navigate('Chart')}
          isActive={route.name === 'Chart'}
        />
      </Middle>
      <Bottom>
        <TouchableOpacity ref={refSignOut} onPress={signOut}>
          <LogoutIcon
            width={36}
            height={36}
            viewBox="0 0 24 24"
            fill={signOutIsHovered ? theme.redHover : theme.red}
          />
        </TouchableOpacity>
      </Bottom>
    </Container>
  );
};

export default SideMenu;
