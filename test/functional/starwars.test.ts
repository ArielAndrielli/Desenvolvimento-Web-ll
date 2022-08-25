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
        const result: number = new Operation().soma(10,10)
        expect(new Operation().soma(10,10)).toBe(20)
    });

    it('Subtracao de a - b', ()=>{
        const result: number = new Operation().sub(10,10)
        expect(new Operation().sub(10,10)).toBe(0)
    });

    it('Multiplicacao de 10 por 10', ()=>{
        const result: number = new Operation().mult(10,10)
        expect (new Operation().mult(10,10)).toBe(100)
    });

    it('Divisao de 10 por 10', ()=>{
        const result: number = new Operation().divi(10,10)
        expect(new Operation().divi(10,10)).toBe(1)
    });
});