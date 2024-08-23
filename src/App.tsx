import globalStyles from './common/styles/globalStyles';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './common/styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './common/Router';
import { walletConfig } from './wallet/walletConfig';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={walletConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
