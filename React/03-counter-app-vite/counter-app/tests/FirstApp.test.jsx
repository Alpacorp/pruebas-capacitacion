/** @jest-environment jsdom */

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirsApp />", () => {
  test("debe hacer match con el snapshot", () => {
    const title = "Hola, soy Alejo";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el título en un h1", () => {
    const title = "Hola, soy Alejo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");

    // Primera forma de validar el título revisando que contenga el texto
    expect(h1.innerHTML).toContain(title);

    // Segunda forma de validar el título revisando que el texto sea exactamente igual
    expect(h1.innerHTML).toBe(title);

    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("Debe de mostrar el subtítulo enviado por props", () => {
    const title = "Hola, soy Alejo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe de mostrar el subtítulo enviado por props", () => {
    const title = "Hola, soy Alejo";
    const subTitle = "Soy un subtítulo";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
