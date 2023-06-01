import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Boton from './Boton';

test('renderiza el boton con el texto', () => {
    const onClick = jest.fn();
    const width = '100px';
    const height = '50px';
    const texto = 'Clica';
    const type = 'button';

    render(
        <Boton
            onClick={onClick}
            width={width}
            height={height}
            texto={texto}
            type={type}
        />
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(texto);
});

test('LLama onClick funcion cuando el  boton es clicado', () => {
    const onClick = jest.fn();
    const width = '100px';
    const height = '50px';
    const texto = 'Clica';
    const type = 'button';

    render(
        <Boton
            onClick={onClick}
            width={width}
            height={height}
            texto={texto}
            type={type}
        />
    );

    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClick).toHaveBeenCalledTimes(1);
});
