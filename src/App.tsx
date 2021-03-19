import React from 'react';
import {
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import GlobalStyle from './styles/Global';
import ThemeProvider from './styles/ThemeProvider';
import { defaultTheme } from './styles/theme';
import AppContextsProvider from './contexts';
import Routes from './routes';
import './languages';

const App = () => {
  return (
    <ThemeProvider>
      {Platform.OS === 'web' && <GlobalStyle />}
      <StatusBar
        barStyle="light-content"
        backgroundColor={defaultTheme.background}
      />
      <AppContextsProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <SafeAreaView
            style={{ backgroundColor: defaultTheme.background, flex: 1 }}
          >
            <Routes />
          </SafeAreaView>
        </KeyboardAvoidingView>
      </AppContextsProvider>
    </ThemeProvider>
  );
};

export default App;
/*



& */
