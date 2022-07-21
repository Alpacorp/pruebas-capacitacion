const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Pruebas en <GifItem />", () => {
  const title = "The last of us";
  const url = "https://i.gifer.com/1ZQ.gif";

  test("Debe de renderizar correctamente el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
    // screen.debug();
  });

  test("Debe de mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
