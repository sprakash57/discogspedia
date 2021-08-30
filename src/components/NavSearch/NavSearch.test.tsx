import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import NavSearch from "./NavSearch";

describe("NavSearch", () => {
    const props = {
        onPaginate: jest.fn(),
        onSearch: jest.fn(),
        page: 0,
        pagination: undefined,
        isPreviousData: false
    }

    afterEach(() => cleanup());

    it("should render initially", () => {
        render(<NavSearch {...props} />);
        expect(screen.getByText("Search")).toBeInTheDocument();
    });

    it("should search for typed query", () => {
        render(<NavSearch {...props} />);
        const btnQuery = screen.getByTestId("btn-query");
        const query = screen.getByTestId("query");
        act(() => {
            fireEvent.change(query, { target: { value: "moderat" } });
        });
        fireEvent.click(btnQuery);
        expect(props.onSearch).toHaveBeenCalledWith("moderat");
    });

    it("should render pagination controls on successfull search", () => {
        const newProps = {
            ...props,
            pagination: {
                page: 1,
                pages: 20,
                per_page: 5,
                items: 100,
                urls: {
                    next: "next"
                }
            }
        }
        render(<NavSearch {...newProps} />);
        expect(screen.getByText(/20/g)).toBeInTheDocument();
    });

    it("should not render pagination controls if search is unsuccessfull", () => {
        render(<NavSearch {...props} />);
        expect(screen.queryByText("Last")).not.toBeInTheDocument();
    });
})