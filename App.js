import React from 'react';
import MainStack from './routes/routes';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <MainStack />
    </NativeBaseProvider>
  );
};

export default App;
