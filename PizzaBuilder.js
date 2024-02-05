class PizzaBuilder {
    addDough() {}
    addSauce() {}
    addCheese() {}
    addToppings() {}
}

class MargheritaPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.pizza = new MargheritaPizza();
    }

    addDough() {
        this.pizza.components.push("Thin Crust Dough");
    }

    addSauce() {
        this.pizza.components.push("Tomato Sauce");
    }

    addCheese() {
        this.pizza.components.push("Mozzarella Cheese");
    }

    addToppings() {
        this.pizza.components.push("Fresh Basil");
    }

    getPizza() {
        const result = this.pizza;
        this.reset();
        return result;
    }
}

class PepperoniPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.pizza = new PepperoniPizza();
    }

    addDough() {
        this.pizza.components.push("Thick Crust Dough");
    }

    addSauce() {
        this.pizza.components.push("Spicy Tomato Sauce");
    }

    addCheese() {
        this.pizza.components.push("Mozzarella Cheese");
    }

    addToppings() {
        this.pizza.components.push("Pepperoni");
        this.pizza.components.push("Olives");
    }

    getPizza() {
        const result = this.pizza;
        this.reset();
        return result;
    }
}

class Pizza {
    constructor() {
        this.components = [];
    }

    listComponents() {
        console.log("Pizza components: " + this.components.join(', ') + "\n\n");
    }
}

class MargheritaPizza extends Pizza {
    addSpecialIngredient() {
        this.components.push("Special Margherita Ingredient");
    }

    bakeInWoodFiredOven() {
        console.log("Baking in a traditional wood-fired oven.\n");
    }
}

class PepperoniPizza extends Pizza {
    addPepperoni() {
        this.components.push("Pepperoni Slices");
    }

    cookInConveyorOven() {
        console.log("Cooking in a high-speed conveyor oven.\n");
    }
}

class PizzaDirector {
    setBuilder(builder) {
        this.builder = builder;
    }

    buildMargheritaPizza() {
        this.builder.addDough();
        this.builder.addSauce();
        this.builder.addCheese();
        this.builder.addToppings();
    }

    buildPepperoniPizza() {
        this.builder.addDough();
        this.builder.addSauce();
        this.builder.addCheese();
        this.builder.addToppings();
    }
}

function client(director) {
    const margheritaBuilder = new MargheritaPizzaBuilder();
    director.setBuilder(margheritaBuilder);

    console.log("Margherita Pizza:\n");
    director.buildMargheritaPizza();
    margheritaBuilder.getPizza().listComponents();

    const pepperoniBuilder = new PepperoniPizzaBuilder();
    director.setBuilder(pepperoniBuilder);

    console.log("Pepperoni Pizza:\n");
    director.buildPepperoniPizza();
    pepperoniBuilder.getPizza().listComponents();
}

const pizzaDirector = new PizzaDirector();
client(pizzaDirector);

module.exports = { PizzaBuilder, MargheritaPizzaBuilder, PepperoniPizzaBuilder, PizzaDirector };