import { render, cleanup, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ReleaseDetail from "../ReleaseDetail";
import { QueryClient, QueryClientProvider } from "react-query";

const server = setupServer(
  rest.get(`${process.env.REACT_APP_BASE_URL}/releases/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        released: "some date",
        community: { have: "34", rating: { count: 45, average: 23 } },
        tracklist: [{ pos: "a" }],
      })
    );
  })
);

describe("ReleaseDetail", () => {
  const props = {
    content: {
      id: 1,
      title: "",
      country: "India",
      year: "",
      format: [""],
      label: ["fkae"],
      genre: ["pop"],
      resource_url: "",
      thumb: "",
    },
    onClose: jest.fn(),
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => {
    cleanup();
    server.resetHandlers();
  });

  it("should render release of desired ID", async () => {
    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <ReleaseDetail {...props} />
      </QueryClientProvider>
    );
    const element = await findByText(/India/i);
    expect(element).toBeInTheDocument();
  });

  it("should display alert message in case of API failure", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/releases/1`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <ReleaseDetail {...props} />
      </QueryClientProvider>
    );
    const element = await findByText(/something went wrong/i);
    expect(element).toBeInTheDocument();
  });

  it("should close modal if close button is clicked", async () => {
    const { findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ReleaseDetail {...props} />
      </QueryClientProvider>
    );
    const closeBtn = await findByTestId("close");
    fireEvent.click(closeBtn);
    expect(props.onClose).toHaveBeenCalled();
  });
});
