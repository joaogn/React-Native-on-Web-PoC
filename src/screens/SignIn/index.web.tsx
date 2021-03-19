import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import AroundWorldImage from '../../assets/icons/around_the_world.svg';
import { Container } from './styles.web';
import MobileScreen from './MobileScreen';
import { useSizeContext } from '../../contexts/SizeContext';
import { useAuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { isSmallScreen } = useSizeContext();
  const { loading } = useAuthContext();
  const theme = useTheme();

  if (isSmallScreen) {
    return <MobileScreen />;
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={theme.primary} size="large" />
      ) : (
        <>
          <section>
            <AroundWorldImage data-testid="loginImage" />
          </section>

          <section>
            <MobileScreen />
          </section>
        </>
      )}
    </Container>
  );
};

export default Login;
