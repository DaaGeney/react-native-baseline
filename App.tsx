// @packages
import 'intl-pluralrules';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

// @scripts
import './src/lang/index';
import Navigation from './src/navigation';
import theme from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar />
      <Navigation />
    </PaperProvider>
  );
}

