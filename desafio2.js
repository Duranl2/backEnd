const fs = require('fs')

class ProductManager {
  static globalId = 0 

  constructor(filename) {
    this.products = [] 
    this.path = './files'
    this.filename = this.path + filename
  }


  addProduct = async (title, desc, price, thumbnail, code, stock) => {
    await fs.promises.mkdir(this.path, { recursive: true })

    if (!(title, desc, price, thumbnail, code, stock)) {
      console.log('Missing parameter')
    } else if (this.products.find((prod) => prod.code == code)) {
      console.log('Product with that ID already exists')
    } else {
      const prodId = ProductManager.globalId++ 
      this.products.push({
        title,
        desc,
        price,
        thumbnail,
        code,
        stock,
        prodId,
      })
      await fs.promises.writeFile(this.filename, JSON.stringify(this.products))
      console.log('Product added succesfully')
    }
  }

  getProducts = async () => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)
    console.log('Reading file')
    return parsedRes
  }

  getProductById = async (id) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    const filteredArr = parsedRes.find(
      (product) => product.prodId == id
    )
    return filteredArr ? filteredArr : ''
  }

  updateProductById = async (id, updatedData) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    if (await this.getProductById(id)) {
      const newArr = parsedRes.map((item) => {
        return id == item.prodId ? { ...item, ...updatedData } : item
        console.log('Product updated succesfully')
      })
      await fs.promises.writeFile(this.filename, JSON.stringify(newArr))
    } else {
      console.log(`Product ID ${id} does not exist`)
    }
  }

  deleteProductById = async (id) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    if (await this.getProductById(id)) {
      const newArr = parsedRes.filter((item) => item.prodId !== id)
      await fs.promises.writeFile(this.filename, JSON.stringify(newArr))
      console.log('Product deleted succesfully')
    } else {
      console.log(`Product ID ${id} does not exist`)
    }
  }
}

// pm1 = new ProductManager('/products.json')

// pm1.addProduct(
//   'Guitarra',
//   'Es una guitarra',
//   10,
//   'www.guitarra.com',
//   'ABC123',
//   100
// )
// pm1.addProduct(
//   'Guitarra',
//   'Es una guitarra',
//   10,
//   'www.guitarra.com',
//   'ABC1234',
//   100
// )

// // pm1.deleteProductById(1)