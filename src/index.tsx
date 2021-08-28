import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './index.scss';
import Home from 'pages/Home';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Home />
    <ReactQueryDevtools initialIsOpen={false} /> {/* Devtools won't be bundled during build */}
  </QueryClientProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
