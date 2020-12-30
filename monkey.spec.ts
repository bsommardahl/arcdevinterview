import { Monkey } from './monkey';

describe("The Monkey", () => {
    const m = new Monkey();

    it("should not be a dog", () => {
        expect(m.isDog()).toBe(false);
    });
});