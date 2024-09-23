const thanksgivingMeal = {
    starter: { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },
    dessert: {
        ice_cream: "pumpkin-vanilla ice cream",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost: 25.0,
    senior_discount: 0.10,
    prettyPrint: function() {
        let menuStr = `Start your meal with some fresh ${this.starter.fruit}, and a tasteful glass of ${this.starter.wine}. 
        Help yourself to some ${this.entree.meat} or ${this.entree.alt}! Choose between your side of ${this.entree.sides.bread}, or ${this.entree.sides.pasta}.
        Vegetables also come with your entree, including ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, and ${this.entree.vegetables.salad}.
        If you've still got room, help yourself to a dessert, either ${this.dessert.ice_cream}, or ${this.dessert.cake}`;
        return menuStr;
    },
    totalPrice: function(isSenior) {
        let total = this.total_cost;
        if (isSenior) {
            total -= total * this.senior_discount;
        }
        return total.toFixed(2);
    },
    totalCalories: function() {
        return this.starter.calories + this.entree.calories + this.dessert.calories;
    },
    caloriesFrom: function(indicator) {
        if (indicator === 1) {
            return this.starter.calories;
        } else if (indicator === 2) {
            return this.entree.calories;
        } else if (indicator === 3) {
            return this.dessert.calories;
        } else {
            return 0;
        }
    }
};


const greeting = document.querySelector(".greeting");
const fullMeal = document.querySelector(".fullMeal");
const priceInfo = document.querySelector(".priceInfo");
const calorieInfo = document.querySelector(".calorieInfo");

const regularPrice = thanksgivingMeal.totalPrice(false);
const seniorPrice = thanksgivingMeal.totalPrice(true);

const starterCalories = thanksgivingMeal.starter.calories;
const entreeCalories = thanksgivingMeal.entree.calories;
const dessertCalories = thanksgivingMeal.dessert.calories;
const totalCalories = thanksgivingMeal.totalCalories();

console.log("Total calories calculated:", "Starter Calories:", starterCalories, "Entree Calories:", entreeCalories, "Dessert Calories:", dessertCalories, "Total Calories:", totalCalories);


greeting.textContent = "Thanksgiving Meal";
fullMeal.textContent = thanksgivingMeal.prettyPrint();
priceInfo.innerHTML = `Seniors get a discount of 10%!<br>
                       The full price is $${regularPrice}<br>
                       And the senior price is $${seniorPrice}`;
calorieInfo.innerHTML = `Total Calories for the whole meal is ${totalCalories}.
                         (Starter Calories: ${starterCalories}, Entree Calories: ${entreeCalories}, Dessert Calories: ${dessertCalories})`;