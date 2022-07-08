import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("Debe de retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    // Primera forma de hacerlo
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Segunda forma de hacerlo
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
