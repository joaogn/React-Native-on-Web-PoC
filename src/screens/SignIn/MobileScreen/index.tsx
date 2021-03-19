import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import LoginIcon from '../../../assets/icons/login.svg';
import GithubIcon from '../../../assets/icons/mark-github.svg';
import ErrorIcon from '../../../assets/icons/error_outline.svg';
import LogoImg from '../../../assets/logo.png';
import { useAuthContext } from '../../../contexts/AuthContext';
import Tooltip from '../../../components/Tooltip';
import Image from '../../../components/Image';

import {
  Container,
  Login,
  LogoWrapper,
  TitleText,
  WelcomeText,
  LoginMessageWrapper,
  LoginMessageText,
  LoginInput,
  LoginTextInput,
  LoginButton,
} from './styles';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LoginWrapper = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const { signIn, loading } = useAuthContext();
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={theme.primary} size="large" />
      ) : (
        <Login>
          <LogoWrapper>
            <Image
              style={{ width: 60, height: 60, marginRight: 10 }}
              source={LogoImg}
            />
            <TitleText>{t('app_name')}</TitleText>
          </LogoWrapper>
          <WelcomeText>{t('welcome')}</WelcomeText>
          <LoginMessageWrapper>
            <GithubIcon
              width={24}
              height={24}
              viewBox="0 0 16 16"
              fill={theme.transparentGray}
            />
            <LoginMessageText>{t('welcome_message')}</LoginMessageText>
          </LoginMessageWrapper>
          <Formik
            initialValues={{ userName: '' }}
            validationSchema={SignupSchema}
            onSubmit={({ userName }) => {
              signIn({ userName });
            }}
          >
            {({
              errors,
              touched,
              handleChange,
              submitForm,
              values,
              handleBlur,
            }) => (
              <LoginInput
                hasError={!!(errors.userName && touched.userName)}
                hasFocus={hasFocus}
              >
                <LoginTextInput
                  hasError={!!(errors.userName && touched.userName)}
                  hasFocus={hasFocus}
                  placeholder={t('login_placeholder')}
                  placeholderTextColor={theme.transparentGray}
                  onChangeText={handleChange('userName')}
                  onBlur={() => {
                    handleBlur('userName');
                    setHasFocus(false);
                  }}
                  onFocus={() => setHasFocus(true)}
                  value={values.userName}
                />
                {errors.userName && touched.userName && (
                  <Tooltip title={errors.userName} backgroundColor={theme.red}>
                    <ErrorIcon fill={theme.red} style={{ marginRight: 5 }} />
                  </Tooltip>
                )}
                <LoginButton testID="loginButton" onPress={submitForm}>
                  <LoginIcon fill={theme.white} />
                </LoginButton>
              </LoginInput>
            )}
          </Formik>
        </Login>
      )}
    </Container>
  );
};

export default LoginWrapper;
