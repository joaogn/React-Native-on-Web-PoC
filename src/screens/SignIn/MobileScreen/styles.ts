import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.View`
  width: 80%;
  max-width: 360px;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.View`
  flex: 1;
  width: 80%;
`;

export const LogoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 40px;
  color: ${props => props.theme.white};
  font-weight: 900;
`;

export const WelcomeText = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.white};
  font-weight: 700;
  margin-top: 100px;
  align-self: flex-start;
`;

export const LoginMessageWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const LoginMessageText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.transparentGray};
  margin-left: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  justify-content: center;
  align-items: center;
  border-left-width: 1px;
  border-color: ${props => props.theme.transparentGray};
`;

interface LoginInputProps {
  hasError: boolean;
  hasFocus: boolean;
}
export const LoginInput = styled.View<LoginInputProps>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  ${props =>
    props.hasFocus &&
    css`
      border-width: 1px;
      border-color: ${props.theme.white};
    `}
  ${props =>
    props.hasError &&
    css`
      border-width: 1px;
      border-color: ${props.theme.red};
    `}
`;

export const LoginTextInput = styled.TextInput<LoginInputProps>`
  font-size: 16px;
  color: ${props => props.theme.white};
  font-weight: 600;
  height: 50px;
  width: 75%;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  padding: 16px;
  ${props =>
    props.hasFocus &&
    css`
      color: ${props.theme.white};
    `}
  ${props =>
    props.hasError &&
    css`
      padding: 16px;
      color: ${props.theme.red};
    `}
`;
