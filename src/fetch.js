import fetch from 'node-fetch'

export async function getCategories(setCategories) {
  try {
    const categories = await fetch(`${process.env.REACT_APP_URL}/category/`)
    const response = await categories.json()
    setCategories(await response)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllProducts(setProducts) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/products/`)
    const response = await products.json()
    setProducts(await response)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductsByCategory(category, setProducts) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/category/${category}`)
    const response = await products.json()
    setProducts(await response)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductsBySubCategory(subcategory, setProducts) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/subcategory/${subcategory}`)
    const response = await products.json()
    setProducts(await response)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getProductById(productId, setProduct) {
  try {
    const products = await fetch(`${process.env.REACT_APP_URL}/product/${productId}`)
    const response = await products.json()
    setProduct(await response)
  } catch (error) {
    throw new Error(error)
  }
}

// 
export async function userLogin(user) {
  try {
    const login = await fetch(`${process.env.REACT_APP_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    )
    const response = await login.json()
    console.log(response)

    if (login.status === 200) {
      localStorage.setItem('tokens', JSON.stringify(response))
      return (true)} else {
        return (false)
      }
  } catch (error) {
    throw new Error(error)
  }
}

