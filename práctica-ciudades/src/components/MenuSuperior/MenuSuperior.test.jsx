import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import MenuSuperior from "./MenuSuperior";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("MenuSuperior", () => {
  it("debe navegar a la raíz cuando se hace clic en el botón 'Buscar'", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText } = render(<MenuSuperior />);
    const buscarButton = getByText("Buscar");

    fireEvent.click(buscarButton);

    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("debe navegar a 'historial' cuando se hace clic en el botón 'Historial'", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText } = render(<MenuSuperior />);
    const historialButton = getByText("Historial");

    fireEvent.click(historialButton);

    expect(navigate).toHaveBeenCalledWith("historial");
  });
});
