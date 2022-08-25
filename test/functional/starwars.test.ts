describe('Valida o comportamento de uma funcao', ()=>{


class Operation{

     soma(a: number,b: number): number {
        return a+b
    }

     sub(a: number,b: number): number {
        return a-b
    }

     mult(a: number,b: number): number {
        return a*b
    }

     divi(a: number,b: number): number {
        return a/b
    }
}

     

    it('Soma de a + b', ()=>{
        const result: number = soma(10,10)
        expect(soma(10,10)).toBe(20)
    });

    it('Subtracao de a - b', ()=>{
        const result: number = sub(10,10)
        expect(sub(10,10)).toBe(0)
    });

    it('Multiplicacao de 10 por 10', ()=>{
        const result: number = mult(10,10)
        expect (mult(10,10)).toBe(100)
    });

    it('Divisao de 10 por 10', ()=>{
        const result: number = divi(10,10)
        expect(divi(10,10)).toBe(1)
    });
});