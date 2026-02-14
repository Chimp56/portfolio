import { render, screen } from "./test/utils";

import App from "./App";

describe("App", () => {
  it("renders skip to main content link", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /skip to main content/i })
    ).toBeInTheDocument();
  });

  it("renders main content with id main", () => {
    render(<App />);
    expect(document.getElementById("main")).toBeInTheDocument();
  });

  it("renders footer with copyright", () => {
    render(<App />);
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear())))
    ).toBeInTheDocument();
  });
});
