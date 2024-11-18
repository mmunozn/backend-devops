import { describe, test, expect } from "@jest/globals";
// import { suma, restar, operar } from "../../src/app/calculadora";
import { operar, restar, suma } from '../src/app/calculadora';

describe("Bateria de test de calculadora", () => {

    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    // test("Sumar en la calculadora", () => {

    //     expect(suma(1, 2)).toBe(4);

    //     expect(suma(5, 5)).toBe(10);

    //     expect(suma(15, 15)).toBe(30);

    //     expect(suma(1, 5)).not.toBe(0);

    //     let a: any = 1;
    //     let b: any = "a"
    //     expect(suma(a, b)).toBeNaN();
    //     a = 1;
    //     b = undefined;
    //     expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    // });

    test("Restar en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);

        expect(restar(15, 5)).toBe(10);

        expect(restar(45, 15)).toBe(30);

        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });

    test("Operar en la calculadora", () => {

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("suma", 5, 5)).toBe(10);
        expect(operar("resta", 15, 5)).toBe(10);
        expect(operar("suma", 15, 15)).toBe(30);
        expect(operar("resta", 45, 15)).toBe(30);
        expect(operar("suma", 1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a"
        expect(operar("suma", a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("resta", a, b)).toThrowError("No se puede restar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

        expect(operar("multiplicar", 10, 20)).not.toBeDefined();
    });

});

// import { describe,test } from '@jest/globals';
// import { operar, restar, suma } from '../src/app/calculadora';
// // import e from 'cors';

// // 

// describe("Pruebas unitarias para la función suma", () => {
    
//     test("sumar en la calculadora con números positivos", () => {
//         expect(suma(1, 2)).toBe(3);
//         expect(suma(1, 2)).not.toBe(5);
//         expect(suma(1, 2)).toBeGreaterThan(2);
//         expect(suma(1, 2)).toBeGreaterThanOrEqual(3);
//         expect(suma(1, 2)).toBeLessThan(5);
//         expect(suma(1, 2)).toBeLessThanOrEqual(3);
//         expect(suma(1, 2)).toBeLessThanOrEqual(5);
//         expect(suma(1, 2)).not.toBeLessThan(3);
//         expect(suma(1, 2)).not.toBeGreaterThan(3);
//     });

//     test("sumar en la calculadora con números negativos", () => {
//         expect(suma(-1, -2)).toBe(-3);
//         expect(suma(-1, -2)).not.toBe(-5);
//         expect(suma(-1, -2)).toBeGreaterThan(-4);
//         expect(suma(-1, -2)).toBeGreaterThanOrEqual(-3);
//         expect(suma(-1, -2)).toBeLessThan(-1);
//         expect(suma(-1, -2)).toBeLessThanOrEqual(-3);
//         expect(suma(-1, -2)).toBeLessThanOrEqual(-1);
//         expect(suma(-1, -2)).not.toBeLessThan(-3);
//         expect(suma(-1, -2)).not.toBeGreaterThan(-3);
//     });

//     test("sumar en la calculadora con un número positivo y uno negativo", () => {
//         expect(suma(1, -2)).toBe(-1);
//         expect(suma(1, -2)).not.toBe(1);
//         expect(suma(1, -2)).toBeGreaterThan(-2);
//         expect(suma(1, -2)).toBeGreaterThanOrEqual(-1);
//         expect(suma(1, -2)).toBeLessThan(2);
//         expect(suma(1, -2)).toBeLessThanOrEqual(1);
//         expect(suma(1, -2)).toBeLessThanOrEqual(2);
//         expect(suma(1, -2)).not.toBeLessThan(-1);
//         expect(suma(1, -2)).not.toBeGreaterThan(-1);
//     });

//     test("sumar en la calculadora con ceros", () => {
//         let a: any = 1;
//         let b: any = "a";
    
//         expect(suma(a, b)).toBeNaN();
    
//         a = 1;
//         b = undefined;
    
//         expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");
//     });

//     test("restar en la calculadora con ceros", () => {
//         expect(restar(5, 2)).toBe(3);
//         expect(restar(15, 5)).toBe(10);
//         expect(restar(45, 15)).toBe(30);
//         expect(restar(10, 5)).not.toBe(0);

        
//         let a: any = 1;
//         let b: any = "a";
    
//         expect(restar(a, b)).toBeNaN();
    
//         a = 1;
//         b = undefined;
    
//         expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
//     })

//     test("operar en la calculadora con ceros", () => {  
        
//         expect( operar("suma",5, 2)).toBe(7);
//         expect( operar("resta",5, 2)).toBe(3);
//         expect( operar("suma",5, 3)).toBe(8);
//         expect( operar("resta",5, 2)).toBe(3);
//         expect( operar("suma",5, 5)).toBe(10);
//         expect( operar("resta",5, 2)).toBe(3);
//         expect( operar("suma",5, 2)).not.toBe(0);
       
        
//         let a: any = 1;
//         let b: any = "a";
    
//         expect(operar("suma",a, b)).toThrowError("No se puede sumar indefinidos");
    
//         a = 1;
//         b = undefined;
    
//         expect(() => operar("resta",a, b)).toThrowError("No se puede restar indefinidos");

//     })



   
// });