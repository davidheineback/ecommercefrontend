import fetch from 'node-fetch'

export async function getCategories(setCategories, setIsLoading) {
  try {
    const categories = await fetch(`${process.env.REACT_APP_URL}/category/`)
    const response = await categories.json()
    setCategories(response)
    setIsLoading(false) 
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllProducts(setProducts, setIsLoading) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/products/`)
    const response = await products.json()
    setProducts(response)
    setIsLoading(false) 
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductsByCategory(category, setProducts, setIsLoading) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/category/${category}`)
    const response = await products.json()
    setProducts(response)
    setIsLoading(false) 
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductsBySubCategory(subcategory, setProducts, setIsLoading) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/subcategory/${subcategory}`)
    const response = await products.json()
    setProducts(response)
    setIsLoading(false) 
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductById(productId, setProduct, setIsLoading) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/product/${productId}`)
    const response = await products.json()
    setProduct(response)
    setIsLoading(false) 
  } catch (error) {
    throw new Error(error)
  }
}
