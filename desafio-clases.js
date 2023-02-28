class ProductManager{
    constructor(products = []){
        this.products = products;
    }

    static id = 0;

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock)  => {
        const checkForDuplicatedCode = this.products.filter((product) => product.code === code);
        if (checkForDuplicatedCode.length !== 0) {
            return `This code (${code}) already exists`;
        }
        else {
            let product = {
                id: ProductManager.id + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            ProductManager.id++;

            this.products.push(product);
            return this.products;
        }
    }

    getProductById = (id) => {
        const productByID = this.products.filter((product) => product.id === id);
        if (productByID) {
            return productByID;
        } else {
            return "ID not found or invalid";
        }
    }
}

const newProd1 = new ProductManager();
newProd1.getProducts();
newProd1.addProduct("The Lord of the Rings", "A fantasy novel by Tolkien", 21.99, "no img", "ab125", 43);
console.log(newProd1.getProducts());

newProd1.addProduct("The Lord of the Rings", "A fantasy novel by Tolkien", 21.99, "no img", "ab125", 43);
newProd1.getProductById(1);