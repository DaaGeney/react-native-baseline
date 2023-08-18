import React from 'react';
import {render} from "@testing-library/react-native";
import App from '../App';

let component;

describe("<App />", () => {
    beforeEach(() => {
        component = render(<App />);
    });

    it("renderiza correctamente", () => {
        console.log(component);
    })
});

// test('Esta prueba no debe fallar', () =>{

// })