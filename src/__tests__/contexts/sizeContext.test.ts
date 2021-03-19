import { renderHook } from '@testing-library/react-hooks';
import {
  useSizeContext,
  SizeContextProvider,
} from '../../contexts/SizeContext';

jest.mock('react-native', () => ({
  useWindowDimensions: jest
    .fn()
    .mockReturnValueOnce({ width: 720 })
    .mockReturnValueOnce({ width: 1920 }),
}));

describe('Devs context', () => {
  it('should return isSmallScreen true, when width is less 1024', async () => {
    const { result } = renderHook(() => useSizeContext(), {
      wrapper: SizeContextProvider,
    });
    expect(result.current.isSmallScreen).toBeTruthy();
  });

  it('should return isSmallScreen false, when width is high 1024', async () => {
    const { result } = renderHook(() => useSizeContext(), {
      wrapper: SizeContextProvider,
    });
    expect(result.current.isSmallScreen).toBeFalsy();
  });
});
