import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("Componente Card", () => {
    it("se renderiza sin errores", () => {
        render(<Card />);
    });

    it("renderiza el título correctamente", () => {
        const title = "Título de prueba";
        const { getByText } = render(<Card title={title} />);
        const titleElement = getByText(title);

        expect(titleElement).toBeInTheDocument();
    });

    it("renderiza el contenido cuando isOpen es true", () => {
        const children = <div>Contenido de prueba</div>;
        const { getByText } = render(<Card isOpen={true}>{children}</Card>);
        const contentElement = getByText("Contenido de prueba");

        expect(contentElement).toBeInTheDocument();
    });

    it("no renderiza el contenido cuando isOpen es false", () => {
        const children = <div>Contenido de prueba</div>;
        const { queryByText } = render(<Card isOpen={false}>{children}</Card>);
        const contentElement = queryByText("Contenido de prueba");

        expect(contentElement).toBeNull();
    });

    it("cambia el estado de la tarjeta al hacer clic en el botón", () => {
        const { getByRole } = render(<Card />);
        const button = getByRole("button");

        fireEvent.click(button);
        expect(button).toHaveTextContent("");

        fireEvent.click(button);
        expect(button).toHaveTextContent("");
    });
});
