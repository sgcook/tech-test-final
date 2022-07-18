import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  }

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with text of Go!", () => {
    render(<Search setSearchResults={validProps.setSearchResults} /> );

    expect(screen.getByRole("button")).toHaveTextContent("Go!");
  })
});