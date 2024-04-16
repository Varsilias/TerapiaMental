/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigation/Stack';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {storeData, getItemFor} from './src/General/utils/storage';
import {QueryClient, QueryClientProvider} from 'react-query';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/General/Toast/toast-config';

const HAS_LAUCHED = 'HAS_LAUCHED';

function App(): React.JSX.Element {
  const [hasLaunched, setHasLaunched] = useState(false);
  console.log(Platform.Version);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const hasLaunchedExists = await getItemFor(HAS_LAUCHED);
      if (hasLaunchedExists) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUCHED, 'true');
      }
    };
    getData().catch(error => console.log(error));
  }, []);

  const queryClient = new QueryClient();

  return (
    <PaperProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <StackNavigator hasLaunched={hasLaunched} />
        </QueryClientProvider>
      </NavigationContainer>
      <Toast
        position="top"
        autoHide={true}
        visibilityTime={5000}
        config={toastConfig}
      />
    </PaperProvider>
  );
}

export default App;
