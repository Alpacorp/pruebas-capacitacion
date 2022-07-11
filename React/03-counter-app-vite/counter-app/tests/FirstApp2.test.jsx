/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirsApp />", () => {
  const title = "Hola, soy Alejo";
  const subtitle = "Soy desarrollador web";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Alejo', () => {
    // expect(screen)
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test("Debe de mostrar el título en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });

  test("Debe de mostrar el subtítulo enviado por props", () => {
    render(<FirstApp title={title} subtitle="Soy desarrollador web" />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
