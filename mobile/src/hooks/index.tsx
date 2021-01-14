import React from 'react';

import { AuthProvider } from './auth';

/** Só não teremos a parte do 'Toast' aqui dentro */

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
