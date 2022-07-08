import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const persona = {
      edad: 45,
      clave: "Ironman",
    };
    const context = usContext(persona);
    const data = {
      nombreClave: "Ironman",
      anios: 45,
      latlng: { lat: 14.1232, lng: -12.3232 },
    };
    expect(data).toEqual(context);
  });
});
