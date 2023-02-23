class ProductManager{
    static valorIncrementable = 0;
    constructor(tittle,description,price,thumbnail,stock,id){
        this.product = [];
        this.tittle = tittle;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = id;
        this.stock = stock;
        
    }

    


    addProduct(product){
        let listaNueva = this.product;
        for(const productos of this.product){
            if(productos.tittle === ""|| productos.description === ""||productos.price < 0|| productos.stock < 0){
                console.log("todos los espacios deben estar completos")
            }else if(productos.code === product.code){
                console.log("Campo repetido")
            }else{
                listaNueva.push()
            }
        }
}

    getProducts(){
       return this.addProduct.listaNueva
    }

    getProductbyId(){

    }
}

let producto1 = new ProductManager (); 

let producto2 = new ProductManager ();


producto1.addProduct({tittle:"producto prueba3", description:"Este es un producto prueba3", price: 3000 , thumbnail: "sin imagen3", id: "abc1233", stock:253})

console.log(ProductManager.Products)



























