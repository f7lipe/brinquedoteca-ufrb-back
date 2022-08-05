import * as childrenService from './services/childrenServices.js';

describe("Children Tests Suit", () => {
    it("should create a children given valid credentials", async()=>{
        const children = {
            cpf: "22345678909",
            name: "John Doe",
            birthDate: "august-01-2000",
            address: "Rua dois, nº 0"
    }
        const response = await childrenService.createChildren(children)
        expect(response).toBeDefined();
    })
})