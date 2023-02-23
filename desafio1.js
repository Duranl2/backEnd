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

    
    addProduct(tittle, description,price,thumbnail,code,stock){
        let listaNueva = {};
        listaNueva.id = ProductManager.id;
        listaNueva.product = [];
        listaNueva.tittle = tittle;
        listaNueva.description = description;
        listaNueva.price = price;
        listaNueva.thumbnail = thumbnail;
        listaNueva.code = code;
        listaNueva.stock = stock;
        ProductManager.id++;

        for(const productos of this.product){
            if(productos.tittle === ""|| productos.description === ""||productos.price < 0|| productos.stock < 0){
                console.log("todos los espacios deben estar completos")
            }else if(productos.code === this.code){
                console.log("Campo repetido")
            }else{
                this.product.push(listaNueva)
            }
        }

        console.log(listaNueva)
}

    getProducts(){
       return this.product
    }

    getProductbyId(){
        for(const element of this.product)
        if(element.id === this.code){
            console.log(`Id relacionado al producto ${this.tittle}`) 
        } else {
            return console.log("Articulo no encontrado.")
        }
    }
}

let producto1 = new ProductManager (); 

let producto2 = new ProductManager ();


producto1.addProduct({tittle:"producto prueba3", description:"Este es un producto prueba3", price: 3000 , thumbnail: "sin imagen3", code: "abc1233", stock:253})

producto2.addProduct({tittle:"producto prueba3", description:"Este es un producto prueba3", price: 3000 , thumbnail: "sin imagen3", code: "abc1233", stock:253})


































