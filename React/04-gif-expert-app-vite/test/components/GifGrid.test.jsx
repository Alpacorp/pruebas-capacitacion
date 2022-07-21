import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Goku";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("Debe de mostrar items", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Goku",
        url: "https://localhost/goku.gif",
      },
      {
        id: "DEF",
        title: "Goku2",
        url: "https://localhost/goku2.gif",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(gifs.length);

    // screen.debug();
  });
});
