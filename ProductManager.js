class ProductManager {
    static product = []
    static id = 1

    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (title, description, price, thumbnail, code, stock) {
            const addProduct = new ProductManager(ProductManager.id, title, description, price, thumbnail, code, stock)
            ProductManager.product.push(addProduct)
            ProductManager.id++
        } else {
            console.log("todos los campos son obligatorios")
        }
    }

    getProducts() {
        return ProductManager.product
    }

    getProductById(id) {
        const product = ProductManager.product.find(product => product.id === id)
        if (product) {
            return product
        } else {
            console.log("Not found")
        }
    }
}

// const m = new ProductManager();

// m.addProduct("title", "description", 100, "img", 01, 20);
// m.addProduct("title", "description", 100, "img", 02, 20);
// m.addProduct("title", "description", 100, "img", 03, 20);
// m.addProduct("title", "description", 100, "img", 04, 20);

// console.log(m.getProducts());

// console.log(m.getProductById(2));