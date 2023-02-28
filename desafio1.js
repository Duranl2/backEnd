class ProductManager{
    constructor(product = []){
        this.product = product;
    }

    static id = 0;

    getProducts(){
        return this.product
    }

    addProduct(tittle,description,price,thumbnail,code,stock){
        const codigoDuplicado = this.product.filter((product) => product.code === code);
        if (codigoDuplicado.length !== 0) {
            return `Codigo repetido`;
            }else {
                const Product ={
                    id : ProductManager.id + 1,
                    tittle,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                }
                ProductManager.id++;

                this.product.push(Product);
                return this.products;   

                
            }
    }

  

    getProductbyId(id){
        const idRepeat = this.product.filter((product) => product.id === id);
        if (idRepeat) {
            return idRepeat;
        } else {
            return "Not found";
        }
    }
}

       


let producto1 = new ProductManager (); 
let producto2 = new ProductManager ();
producto1.getProducts()
producto1.addProduct("producto prueba", "esto no es un producto prueba", 200, "sin imagen", "adc123", 25)
console.log(producto1.getProducts())
producto2.addProduct("producto prueba2", "esto no es un producto prueba2", 2000, "sin imagen2", "adc1234", 250)
console.log(producto2.getProducts())











































