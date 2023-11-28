import { render, cleanup, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Release", () => {
    const props = {
        onPaginate: jest.fn(),
        page: 2,
        pagination: {
            page: 2,
            pages: 20,
            per_page: 5,
            items: 100,
            urls: {
                next: "next",
                prev: "prev",
                first: "first",
                last: "last"
            }
        },
        isPreviousData: false
    }

    afterEach(() => cleanup());

    it("should render page 3 if next button is clicked from page 2", () => {
        const { getByTestId } = render(<Pagination {...props} />);
        const next = getByTestId("next");
        fireEvent.click(next);
        expect(props.onPaginate).toHaveBeenCalledWith(3);
    });

    it("should not able to click on next if user is on the last page", () => {
        const newProps = {
            ...props,
            pagination: {
                ...props.pagination,
                urls: {
                    ...props.pagination.urls,
                    next: ""
                }
            }
        }
        const { getByTestId } = render(<Pagination {...newProps} />);
        const next = getByTestId("next");
        expect(next).toBeDisabled();
    });

    it("should render page 1 if prev button is clicked from page 2", () => {
        const { getByTestId } = render(<Pagination {...props} />);
        const prev = getByTestId("prev");
        fireEvent.click(prev);
        expect(props.onPaginate).toHaveBeenCalledWith(1);
    });

    it("should not able to click on prev if user is on the first page", () => {
        const newProps = {
            ...props,
            pagination: {
                ...props.pagination,
                urls: {
                    ...props.pagination.urls,
                    prev: ""
                }
            }
        }
        const { getByTestId } = render(<Pagination {...newProps} />);
        const prev = getByTestId("prev");
        expect(prev).toBeDisabled();
    });

    it("should go to the last page if Last button is clicked", () => {
        const { getByTestId } = render(<Pagination {...props} />);
        const last = getByTestId("last");
        fireEvent.click(last);
        expect(props.onPaginate).toHaveBeenCalledWith(20);
    });

    it("should go to the first page if First button is clicked", () => {
        const { getByTestId } = render(<Pagination {...props} />);
        const first = getByTestId("first");
        fireEvent.click(first);
        expect(props.onPaginate).toHaveBeenCalledWith(1);
    });

    it("should disable Last button if already on the last page", () => {
        const newProps = {
            ...props,
            pagination: {
                ...props.pagination,
                urls: {
                    ...props.pagination.urls,
                    next: ""
                }
            }
        }
        const { getByTestId } = render(<Pagination {...newProps} />);
        const last = getByTestId("last");
        expect(last).toBeDisabled();
    });

    it("should disable First button if already on the first page", () => {
        const newProps = {
            ...props,
            pagination: {
                ...props.pagination,
                urls: {
                    ...props.pagination.urls,
                    first: ""
                }
            }
        }
        const { getByTestId } = render(<Pagination {...newProps} />);
        const first = getByTestId("first");
        expect(first).toBeDisabled();
    });
});