let productos = []

class ProductManager {
    constructor() {
        this.products = productos
    }

    addProduct(newProduct) {
        if (!newProduct.title ||
            !newProduct.description ||
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock) return 'todos los campos son necesarios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if (product) return 'un producto con este cod ya fue ing'

        return [...this.products, { id: this.products.length + 1, ...newProduct }]
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        let product = this.products.find(prod => prod.id === id)
        if (!product) return 'Product not found'
        return product
    }
}

const product = new ProductManager()

product.addProduct({
    title: 'Producto 1',
    description: 'guitarra ltd ec-1000',
    price: '2800',
    thubnail: 'link',
    code: 00001,
    stock: 99
})
console.log(product.addProduct({
    title: 'Producto 2',
    description: 'ibanez 777',
    price: 43334,
    thubnail: 'link',
    code: 00002,
    stock: 100
}))

console.log(product.getProducts());
