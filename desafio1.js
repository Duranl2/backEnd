class ProductManager{
    constructor(product = []){
        this.product = product;
    }

    static id = 0;

    addProduct(tittle,description,price,thumbnail,code,stock){
        const codigoDuplicado = this.products.filter((product) => product.code === code);
        if (codigoDuplicado.length !== 0) {
            return `This code (${code}) already exists`;
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

                this.products.push(Product);
                return this.products;   

                
            }
    }

    getProducts(){
       return this.product
    }

    getProductbyId(id){
        const idRepeat = this.products.filter((product) => product.id === id);
        if (idRepeat) {
            return idRepeat;
        } else {
            return "Not found";
        }
    }
}

       


let producto1 = new ProductManager (); 

let producto2 = new ProductManager ();


producto1.addProduct({tittle:"producto prueba3", description:"Este es un producto prueba3", price: 3000 , thumbnail: "sin imagen3", code: "abc1233", stock:253})

console.log(ProductManager.listaNueva)




































