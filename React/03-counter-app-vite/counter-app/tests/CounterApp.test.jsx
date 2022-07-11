/** @jest-environment jsdom */

import { fireEvent, logDOM, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const initialValue = 10;
  const finalValue = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    // Inicializar el sujeto de pruebas
    render(<CounterApp value={finalValue} />);

    // Primera forma de hacerlo:
    expect(screen.getByText(finalValue)).toBeTruthy();

    // Segunda forma de hacerlo:
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      finalValue.toString()
    );
  });

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();

    // expect(screen.getByRole("heading", { level: 2 }.innerHTML)).toContain(
    //   initialValue + 1
    // );
  });

  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("Debe de funcionar el botón de Reset", () => {
    // Inicializar el sujeto de pruebas
    render(<CounterApp value={initialValue} />);

    // Simular el click en el botón de +1 en el DOM virtual
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    // Primera forma de hacerlo:
    fireEvent.click(screen.getByText("Reset"));

    // Segunda forma de hacerlo:
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    // Definir lo que esperamos que se muestre en el DOM
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initialValue.toString()
    );

    // Obtenemos una vista previa del DOM
    screen.debug();
  });
});
