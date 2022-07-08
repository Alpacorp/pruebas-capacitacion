import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe el id", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    // retorna null undefined o false
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar los héroes filtrados de DC", () => {
    const owner = "DC";
    const heroesFunction = getHeroesByOwner(owner);
    console.log("heroes DC", heroes);

    // Primera forma de hacerlo
    const response = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    expect(response).toEqual(heroesFunction);
    expect(heroesFunction.length).toBe(3);

    // Segunda forma de hacerlo**
    expect(heroesFunction).toEqual(
      heroes.filter((hero) => hero.owner === owner)
    );
  });

  test("getHeroesByOwner debe retornar los héroes filtrados de Marvel", () => {
    const owner = "Marvel";
    const heroesFunction = getHeroesByOwner(owner);
    console.log("heroes Marvel", heroes);

    // Primera forma de hacerlo
    const response = [
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ];
    expect(response).toEqual(heroesFunction);
    expect(heroesFunction).toEqual(expect.arrayContaining(response));
    expect(heroesFunction.length).toBe(2);

    // Segunda forma de hacerlo
    expect(heroesFunction).toEqual(
      heroes.filter((hero) => hero.owner === owner)
    );
  });

  test("getHeroesByOwner debe retornar un arreglo vacio en caso de no encontrar el owner", () => {
    const owner = "Sin owner";
    const heroes = getHeroesByOwner(owner);
    console.log("heroes Sin owner", heroes);
    expect(heroes).toEqual([]);
  });
});
