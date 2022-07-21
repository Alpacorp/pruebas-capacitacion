import { render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("El componente debe hacer match con el snapshot", () => {
    render(<GifExpertApp />);
    expect(screen.getByTestId("gif-expert-app")).toMatchSnapshot();
    screen.debug();
  });

  test("Debe contener los elementos H1 (GifExpertApp), H3 (God Of War) y <p>Loading...</p>", () => {
    render(<GifExpertApp />);

    const h1 = screen.getByRole("heading", { level: 1 }).innerHTML;
    const h3 = screen.getByRole("heading", { level: 3 }).innerHTML;
    const p = screen.getByText("Loading...");

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(h1);
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toBe(h3);
    expect(screen.getByText("Loading...")).toBe(p);
  });

  test("Debe de ejecutar la función onAddCategory", () => {
    const onAddCategory = jest.fn();

    render(<GifExpertApp />);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
