/* eslint-disable react/require-default-props */
import React, { ComponentType, useState } from 'react';
import { TextInputProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { Container, TextInput } from './styles';
import Tooltip from '../Tooltip';

import ErrorIcon from '../../assets/icons/error_outline.svg';

interface InputFormProps extends TextInputProps {
  icon?: ComponentType<SvgProps>;
  error?: string;
}

const InputForm = ({ icon: Icon, error, ...rest }: InputFormProps) => {
  const theme = useTheme();
  const [hasFocus, setHasFocus] = useState(false);

  function getIconColor() {
    if (error) {
      return theme.red;
    }
    if (hasFocus) {
      return theme.white;
    }
    return theme.transparentGray;
  }

  return (
    <Container
      testID="inputFormContainer"
      hasError={!!error}
      hasFocus={hasFocus}
    >
      {Icon && (
        <Icon
          testID="inputFormIcon"
          fill={getIconColor()}
          style={{ marginRight: 8 }}
        />
      )}
      <TextInput
        {...rest}
        hasError={!!error}
        hasFocus={hasFocus}
        placeholderTextColor={theme.transparentGray}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {!!error && (
        <Tooltip title={error} backgroundColor={theme.red}>
          <ErrorIcon
            style={{ marginLeft: 8 }}
            testID="inputFormErrorIcon"
            fill={theme.red}
          />
        </Tooltip>
      )}
    </Container>
  );
};

export default InputForm;
