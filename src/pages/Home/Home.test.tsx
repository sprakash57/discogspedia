import { render, cleanup, fireEvent } from "@testing-library/react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { act } from "react-dom/test-utils";

const server = setupServer(
  rest.get(`${process.env.REACT_APP_BASE_URL}/database/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [{
          id: 1,
          title: "Album1",
          label: ["album"],
          thumb: "",
          country: "some country",
          year: "2011",
          format: ["cd"],
          genre: ["pop"]
        }]
      })
    )
  })
)

describe("Home", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false }
    }
  });

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => {
    cleanup();
    server.resetHandlers();
  });

  it("should render content on successful search", async () => {
    const { findByText, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const btnQuery = await findByTestId("btn-query");
    const query = await findByTestId("query");
    act(() => {
      fireEvent.change(query, { target: { value: "moderat" } });
    });
    fireEvent.click(btnQuery);
    const element = await findByText(/Album1/i);
    expect(element).toBeInTheDocument();
  });

  it("should render alert if search fails", async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/database/search`, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { findByText, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const btnQuery = await findByTestId("btn-query");
    const query = await findByTestId("query");
    act(() => {
      fireEvent.change(query, { target: { value: "moderat" } });
    });
    fireEvent.click(btnQuery);
    const element = await findByText(/something went wrong/i);
    expect(element).toBeInTheDocument();
  });

  it("should render alert if search is successful but there isn't any result to display", async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_BASE_URL}/database/search`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ results: [] })
        )
      })
    )
    const { findByText, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const btnQuery = await findByTestId("btn-query");
    const query = await findByTestId("query");
    act(() => {
      fireEvent.change(query, { target: { value: "moderat" } });
    });
    fireEvent.click(btnQuery);
    const element = await findByText(/No results found/i);
    expect(element).toBeInTheDocument();
  });

});