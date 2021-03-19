import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Platform } from 'react-native';
import { defaultTheme } from '../../styles/theme';
import {
  useToastContext,
  ToastContextProvider,
} from '../../contexts/ToastContext';

const mockedShow = jest.fn();

jest.mock('react-native-fast-toast', () => {
  return {
    useToast: () => ({
      show: mockedShow,
    }),
  };
});

let mockedToast: jest.Mock<any, any>;

jest.mock('react-toastify', () => {
  const mockedToastInstace = jest.fn();
  mockedToast = mockedToastInstace;
  return {
    toast: mockedToastInstace,
    ToastContainer: () => {
      return <></>;
    },
  };
});

const mockedTheme = defaultTheme;

jest.mock('styled-components/native', () => {
  return {
    useTheme: () => mockedTheme,
  };
});

describe('Toast context', () => {
  it('should dispatch a error Toast', async () => {
    const { result } = renderHook(() => useToastContext(), {
      wrapper: ToastContextProvider,
    });

    act(() => {
      result.current.dispatchToast({ message: 'error message', type: 'error' });
    });

    if (Platform.OS === 'web') {
      expect(mockedToast).toHaveBeenCalledWith(
        'error message',
        expect.objectContaining({ type: 'error' }),
      );
    } else {
      expect(mockedShow).toHaveBeenCalledWith(
        'error message',
        expect.objectContaining({ type: 'danger' }),
      );
    }
  });
  it('should dispatch a success Toast', async () => {
    const { result } = renderHook(() => useToastContext(), {
      wrapper: ToastContextProvider,
    });

    act(() => {
      result.current.dispatchToast({
        message: 'success message',
        type: 'success',
      });
    });

    if (Platform.OS === 'web') {
      expect(mockedToast).toHaveBeenCalledWith(
        'success message',
        expect.objectContaining({ type: 'success' }),
      );
    } else {
      expect(mockedShow).toHaveBeenCalledWith(
        'success message',
        expect.objectContaining({ type: 'success' }),
      );
    }
  });
  it('should dispatch a info Toast', async () => {
    const { result } = renderHook(() => useToastContext(), {
      wrapper: ToastContextProvider,
    });

    act(() => {
      result.current.dispatchToast({
        message: 'info message',
        type: 'info',
      });
    });

    if (Platform.OS === 'web') {
      expect(mockedToast).toHaveBeenCalledWith(
        'info message',
        expect.objectContaining({ type: 'info' }),
      );
    } else {
      expect(mockedShow).toHaveBeenCalledWith(
        'info message',
        expect.objectContaining({ type: 'normal' }),
      );
    }
  });
  it('should dispatch a warning Toast', async () => {
    const { result } = renderHook(() => useToastContext(), {
      wrapper: ToastContextProvider,
    });

    act(() => {
      result.current.dispatchToast({
        message: 'warning message',
        type: 'warning',
      });
    });

    if (Platform.OS === 'web') {
      expect(mockedToast).toHaveBeenCalledWith(
        'warning message',
        expect.objectContaining({ type: 'warning' }),
      );
    } else {
      expect(mockedShow).toHaveBeenCalledWith(
        'warning message',
        expect.objectContaining({ type: 'warning' }),
      );
    }
  });
});
