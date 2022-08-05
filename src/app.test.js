import * as childrenService from './services/childrenServices.js';
import * as childrenRepository from './repositories/childrenRepository.js';

const children = {
    cpf: "867577",
    name: "John",
    birthDate: "august-01-2000",
    address: "Rua dois, nº 0"
}

describe("Children Tests Suit", () => {
    it("should create a children given valid credentials", async () => {       
        const response = await childrenService.createChildren(children);
        console.log(response);
        expect(response.id).toBeDefined();
    })
})

describe("Children test unit", () => {
    beforeEach(async () => {
        const {id} = await childrenRepository.findChildren(children.cpf);
        console.log(id);
        if (id){
            await childrenRepository.deleteChildren(id);
        }
    });
    it("Test unit", async () => {
        //const children = recommendationFactory.createRecommendationData();
        const spy = jest
            .spyOn(childrenRepository, "createChildren")
            .mockImplementationOnce(() => { })
        await childrenService.createChildren(children);
        expect(spy).toBeCalledWith(children)
    })
})/*
*/