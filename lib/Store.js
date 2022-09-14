import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

const Store = React.createContext();

function StoreProvider({ children }) {
  const [state, setState] = useState({
    isLoading: true,
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const value = { state, setState, styles };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

const useStore = () => {
  const context = useContext(Store);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export { StoreProvider, useStore };
