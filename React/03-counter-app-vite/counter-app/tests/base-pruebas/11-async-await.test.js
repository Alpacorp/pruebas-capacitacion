import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un url del gif", async () => {
    const response = await getImagen();
    expect(typeof response).toBe("string");
  });

  test("getImagen debe de retornar un texto de aviso en caso de no arrojar ninguna url", async () => {
    const response = await getImagen();
    console.log(response);
    expect(response).toBe("No se econtró la imagen");
  });
});
