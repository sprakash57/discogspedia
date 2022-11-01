import * as utils from "./utils";

describe("ellipsisText", () => {
  let mockEllipsisText = jest.fn();
  beforeEach(() => {
    mockEllipsisText = jest.fn(utils.ellipsisText);
  });

  it("Should concant ellipsis if number of characters are greater than desired number", () => {
    expect(mockEllipsisText("welcome", 3)).toEqual("wel...");
  });

  it("Should not concant ellipsis if number of characters are less or equal to desired number", () => {
    expect(mockEllipsisText("welcome", 25)).toEqual("welcome");
  });

  it("Should return -- if no text provided", () => {
    expect(mockEllipsisText("", 5)).toEqual("--");
  });
});
