import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import { Platform } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import ThemeProvider from '../../styles/ThemeProvider';
import InputForm from '../../components/InputForm';
import { defaultTheme } from '../../styles/theme';
import PersonAddIcon from '../../assets/icons/person_add.svg';

describe('InputForm component', () => {
  it('should able to render an input', () => {
    const { getByPlaceholder } = render(
      <ThemeProvider>
        <InputForm placeholder="placeholder" />
      </ThemeProvider>,
    );

    expect(getByPlaceholder('placeholder')).toBeTruthy();
  });

  it('should able to render an icon on input', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <InputForm icon={PersonAddIcon} />
      </ThemeProvider>,
    );

    expect(getByTestId('inputFormIcon')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholder, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <InputForm icon={PersonAddIcon} placeholder="placeholder" />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholder('placeholder');
    let inputContainer: ReactTestInstance;

    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'inputFormContainer' };
      inputContainer = UNSAFE_getByProps(props);
    } else {
      inputContainer = getByTestId('inputFormContainer');
    }

    fireEvent(inputElement, 'focus');

    await waitFor(() => {
      if (Platform.OS === 'web') {
        expect(inputContainer.props.style).toMatchObject({
          borderBottomColor: 'rgba(255,255,255,1.00)',
        });
      } else {
        expect(inputContainer).toHaveStyle({ borderColor: defaultTheme.white });
      }
    });
  });

  it('should not render highlight on input blur', async () => {
    const { getByPlaceholder, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <InputForm icon={PersonAddIcon} placeholder="placeholder" />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholder('placeholder');
    let inputContainer: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'inputFormContainer' };
      inputContainer = UNSAFE_getByProps(props);
    } else {
      inputContainer = getByTestId('inputFormContainer');
    }

    fireEvent(inputElement, 'blur');

    await waitFor(() => {
      if (Platform.OS === 'web') {
        expect(inputContainer.props.style).not.toMatchObject({
          borderColor: defaultTheme.white,
        });
      } else {
        expect(inputContainer).not.toHaveStyle({
          borderColor: defaultTheme.white,
        });
      }
    });
  });

  it('should render highlight error, tooltip and ErrorIcon on input have an Error', async () => {
    const { getByPlaceholder, getByTestId, UNSAFE_getByProps } = render(
      <ThemeProvider>
        <InputForm placeholder="placeholder" error="error" />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholder('placeholder');

    let inputContainer: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'inputFormContainer' };
      inputContainer = UNSAFE_getByProps(props);
    } else {
      inputContainer = getByTestId('inputFormContainer');
    }

    let tooltipComponent: ReactTestInstance;
    if (Platform.OS === 'web') {
      const props = { 'data-testid': 'tooltipContainerWeb' };
      tooltipComponent = UNSAFE_getByProps(props);
    } else {
      tooltipComponent = getByTestId('tooltipContainerMobile');
    }
    const errorIcon = getByTestId('inputFormErrorIcon');

    await waitFor(() => {
      expect(tooltipComponent).toBeTruthy();
      expect(errorIcon).toBeTruthy();
      if (Platform.OS === 'web') {
        expect(inputContainer.props.style).not.toMatchObject({
          borderColor: defaultTheme.white,
        });
        expect(inputContainer.props.style).toMatchObject({
          color: 'rgba(230,87,87,1.00)',
        });
      } else {
        expect(inputContainer).not.toHaveStyle({
          borderColor: defaultTheme.white,
        });
        expect(inputElement).toHaveStyle({ color: defaultTheme.red });
      }
    });
  });
});
