import React from 'react';
/** Importamos a 'View' de dentro do 'react-native' */
/** Importamos o 'ActivityIndicator' de dentro do 'react-native', que é a animaçãozinha de loading */
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  /** Pegamos de dentro de 'useAuth' nossa propriedade 'loading' */
  const { user, loading } = useAuth();

  /** Enquanto a minha aplicação estiver em 'loading', então exibimos a animaçãozinha de loading */
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
