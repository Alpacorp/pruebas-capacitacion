/** @jest-environment jsdom */

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirsApp />", () => {
  test("debe hacer match con el snapshot", () => {
    const title = "Hola, soy Alejo";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });
});
