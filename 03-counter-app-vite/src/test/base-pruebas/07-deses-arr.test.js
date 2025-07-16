import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Prueba 07-deses-arr', () => { 
    
    test('Prueba a retornaArreglo', () => { 

        const [ letters, numbers] = retornaArreglo()

        expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        // Espera cualquier tipo de string.
        expect( letters ).toEqual( expect.any(String) )
        

     }) 

})