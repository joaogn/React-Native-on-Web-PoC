// styled.d.ts
import 'styled-components';
import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    background: string;
    white: string;
    primary: string;
    primaryHover: string;
    red: string;
    redHover: string;
    transparentPrimary: string;
    transparentGray: string;
    golden: string;
  }
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;
    background: string;
    white: string;
    primaryHover: string;
    red: string;
    redHover: string;
    transparentPrimary: string;
    transparentGray: string;
    golden: string;
  }
}
