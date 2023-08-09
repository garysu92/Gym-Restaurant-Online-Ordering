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
        let newProduct = {
            name: "brownuier",
            description: "",
            price: "",
            category: "dessert",
            imageUrl: "pancake.jpeg",
            calories: "",
            protein: ""
        };
        products.push(newProduct);
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally { 
        await client.close();
    }
}

main();