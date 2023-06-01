import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "../../context/HistoryContext";
import Buscador from "./Buscador";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Buscador", () => {
  it("should display error message for empty input", () => {
    const addToHistory = jest.fn();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByPlaceholderText, getByText } = render(
      <HistoryContext.Provider value={{ addToHistory }}>
        <Buscador />
      </HistoryContext.Provider>
    );

    const input = getByPlaceholderText("Introduce código postal: 08041");
    const submitButton = getByText("Buscar");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(getByText("Se ha de introducir un código postal")).toBeInTheDocument();
    expect(addToHistory).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it("debe mostrar un mensaje de error para la entrada no numérica", () => {
    const addToHistory = jest.fn();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByPlaceholderText, getByText } = render(
      <HistoryContext.Provider value={{ addToHistory }}>
        <Buscador />
      </HistoryContext.Provider>
    );

    const input = getByPlaceholderText("Introduce código postal: 08041");
    const submitButton = getByText("Buscar");

    fireEvent.change(input, { target: { value: "ABC" } });
    fireEvent.click(submitButton);

    expect(getByText("El código postal ha de ser numérico")).toBeInTheDocument();
    expect(addToHistory).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it("debería mostrar un mensaje de error para la longitud de entrada no válida", () => {
    const addToHistory = jest.fn();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByPlaceholderText, getByText } = render(
      <HistoryContext.Provider value={{ addToHistory }}>
        <Buscador />
      </HistoryContext.Provider>
    );

    const input = getByPlaceholderText("Introduce código postal: 08041");
    const submitButton = getByText("Buscar");

    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(submitButton);

    expect(getByText("El código postal ha de  tener al menos 5 dígitos")).toBeInTheDocument();
    expect(addToHistory).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  it("debe llamar a addToHistory y navegar para obtener una entrada válida", () => {
    const addToHistory = jest.fn();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByPlaceholderText, getByText } = render(
      <HistoryContext.Provider value={{ addToHistory }}>
        <Buscador />
      </HistoryContext.Provider>
    );

    const input = getByPlaceholderText("Introduce código postal: 08041");
    const submitButton = getByText("Buscar");

    fireEvent.change(input, { target: { value: "08041" } });
    fireEvent.click(submitButton);

    expect(addToHistory).toHaveBeenCalledWith("08041");
    expect(navigate).toHaveBeenCalledWith("/buscar/08041");
  });
});
