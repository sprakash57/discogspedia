import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.scss";
import Home from "pages/Home";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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
  </QueryClientProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
