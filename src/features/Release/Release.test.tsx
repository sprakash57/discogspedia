import { render, cleanup, fireEvent } from "@testing-library/react";
import Release from "./Release";

describe("Release", () => {
    const props = {
        content: {
            id: 1,
            title: "",
            country: "India",
            year: "2009",
            format: [""],
            label: ["fake"],
            genre: ["pop"],
            resource_url: "",
            thumb: ""
        },
        onSelect: jest.fn()
    }

    afterEach(() => cleanup());

    it("should render content", () => {
        const { getByText } = render(<Release {...props} />);
        const element = getByText(/2009/i);
        expect(element).toBeInTheDocument();
    });

    it("should open modal with selected content", () => {
        const { getByTestId } = render(<Release {...props} />);
        const moreDetailsBtn = getByTestId("more-details");
        fireEvent.click(moreDetailsBtn);
        expect(props.onSelect).toHaveBeenCalledWith(props.content);
    });
})