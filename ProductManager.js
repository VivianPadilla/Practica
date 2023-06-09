const fs = require('fs')
class ProductManager {

    constructor() {
        this.path = "./Productos.json"
        this.products = []
        this.id = 1
    }

    createProduct(product) {
        product.id = this.id++
        this.products.push(product)
    }

    addProduct() {
        fs.promises.writeFile(this.path, JSON.stringify(this.products));
    }

    getProducts = async () => {
        const productos = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(productos)
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (product) {
            return product
        } else {
            console.log("Not found")
        }
    }

    deleteProduct(id) {
        this.products = this.products.filter(product => product.id !== id)
    }
}

const producto1 = {
    title: "title",
    description: "description",
    price: 100,
    thumbnail: "thumbnail",
    code: 01,
    stock: 21
}

const producto2 = {
    title: "title",
    description: "description",
    price: 200,
    thumbnail: "thumbnail",
    code: 02,
    stock: 22
}
const producto3 = {
    title: "title",
    description: "description",
    price: 200,
    thumbnail: "thumbnail",
    code: 02,
    stock: 22
}
const producto4 = {
    title: "title",
    description: "description",
    price: 200,
    thumbnail: "thumbnail",
    code: 02,
    stock: 22
}

const manager = new ProductManager();
manager.createProduct(producto1);
manager.createProduct(producto2);
manager.createProduct(producto3);
manager.createProduct(producto4);
manager.addProduct();
manager.getProducts();
// console.log(manager.products)
// console.log(manager.getProducts())
// console.log(manager.deleteProduct(2))
