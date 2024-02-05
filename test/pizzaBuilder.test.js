const assert = require('assert');
const { describe, it } = require('mocha');
const { MargheritaPizzaBuilder, PepperoniPizzaBuilder, PizzaDirector } = require('../PizzaBuilder');

describe('PizzaBuilder', () => {
    it('should build Margherita Pizza', () => {
        const director = new PizzaDirector();
        const builder = new MargheritaPizzaBuilder();
        director.setBuilder(builder);
        director.buildMargheritaPizza();
        const pizza = builder.getPizza();
        assert.strictEqual(pizza.components.length, 4); //
    });

    it('should build Pepperoni Pizza', () => {
        const director = new PizzaDirector();
        const builder = new PepperoniPizzaBuilder();
        director.setBuilder(builder);
        director.buildPepperoniPizza();
        const pizza = builder.getPizza();
        assert.strictEqual(pizza.components.length, 5); //
    });
});
