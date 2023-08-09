const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb+srv://garysu92:garysu92@cluster0.vfzjujj.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("test").collection("products");
        const categoriesCollection = client.db("test").collection("categories");

        productsCollection.drop()
        categoriesCollection.drop()

        let categories = ['breakfast', 'lunch', 'dinner', 'drinks', 'snacks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let products = [];
        const brownie = {
            name: "Brownie",
            description: "A delicious 3 piece chocolate chip brownie.",
            price: "3.99",
            category: "dessert",
            imageUrl: "brownie.jpeg",
            calories: "400",
            protein: "10g"
        };
        products.push(brownie);
        const burger = {
            name: "Burger",
            description: "A classic beef burger with lettuce, tomato, and cheese.",
            price: "6.99",
            category: "lunch",
            imageUrl: "burger.webp",
            calories: "1000",
            protein: "50g"
          };
          products.push(burger);
          
          const grilledCheese = {
            name: "Grilled Cheese",
            description: "Melted cheddar cheese between two toasted slices of bread.",
            price: "4.49",
            category: "snacks",
            imageUrl: "grilled_cheese.jpeg",
            calories: "750",
            protein: "35g"
          };
          products.push(grilledCheese);
          
          const iceCream = {
            name: "Ice Cream",
            description: "Creamy vanilla ice cream topped with chocolate syrup.",
            price: "3.99",
            category: "dessert",
            imageUrl: "ice_cream.jpeg",
            calories: "600",
            protein: "15g"
          };
          products.push(iceCream);
          
          const oatmeal = {
            name: "Oatmeal",
            description: "Warm oatmeal topped with fresh berries and honey.",
            price: "4.99",
            category: "breakfast",
            imageUrl: "oatmeal.jpeg",
            calories: "500",
            protein: "25g"
          };
          products.push(oatmeal);
          
          const pancake = {
            name: "Pancake",
            description: "Fluffy pancakes with maple syrup and butter.",
            price: "5.49",
            category: "breakfast",
            imageUrl: "pancake.jpeg",
            calories: "1000",
            protein: "40g"
          };
          products.push(pancake);
          
          const proteinSmoothie = {
            name: "Protein Smoothie",
            description: "Refreshing protein smoothie with mixed berries.",
            price: "7.99",
            category: "drinks",
            imageUrl: "protein_smoothie.jpeg",
            calories: "200",
            protein: "40g"
          };
          products.push(proteinSmoothie);
          
          const chickenBroccoli = {
            name: "Chicken and Broccoli",
            description: "Grilled chicken with steamed broccoli and rice.",
            price: "8.99",
            category: "dinner",
            imageUrl: "ricechickenbroc.jpeg"
            ,
            calories: "1200",
            protein: "60g"
          };
          products.push(chickenBroccoli);
          
          const salmon = {
            name: "Salmon",
            description: "Grilled salmon fillet with lemon and herbs.",
            price: "10.99",
            category: "dinner",
            imageUrl: "salmon.jpeg",
            calories: "1400",
            protein: "50g"
          };
          products.push(salmon);
          
          const steak = {
            name: "Steak",
            description: "Juicy steak cooked to perfection with side dishes.",
            price: "12.99",
            category: "dinner",
            imageUrl: "steak.jpeg",
            calories: "1600",
            protein: "70g"
          };
          products.push(steak);
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally { 
        await client.close();
    }
}

main();