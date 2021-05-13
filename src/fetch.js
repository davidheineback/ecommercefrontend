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

export async function userLogout(user) {
  try {
    const logout = await fetch(`${process.env.REACT_APP_URL}/admin/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user})
    }
    )

    if (logout.status === 204) {
      localStorage.removeItem('tokens')
      return (true)} else {
        return (false)
      }
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
    if (login.status === 200) {
      localStorage.setItem('tokens', JSON.stringify(response))
      return (true)
    } else {
        return (false)
      }
  } catch (error) {
    throw new Error(error)
  }
}

// 
// 'http://localhost:8080/api/v1/admin/auth'
// 'Authorization': `Bearer ${user.access_token}`
export async function authUser(user) {
  try {
    const auth = await fetch(`${process.env.REACT_APP_URL}/admin/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    )
    const response = await auth.json()
    user.access_token = response

    if (auth.status === 200) {
      localStorage.setItem('tokens', JSON.stringify(user))
      return (true)
    } else {
      return (false)
    }
  } catch (error) {
    throw new Error(error)
  }
}

// `${process.env.REACT_APP_URL}/admin/patch`
export async function patchNewValue(editObject) {
  try {
    const edit = await fetch('http://localhost:8080/api/v1/admin/patch', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editObject)
    }
    )
    if (edit.status === 200) {
      return true
    } else {
      throw new Error(edit.status)
    }
  } catch (error) {
    throw new Error(error)
  }
}

// `${process.env.REACT_APP_URL}/admin/patch`
export async function deleteProduct(editObject) {
  try {
    const edit = await fetch('http://localhost:8080/api/v1/admin/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editObject)
    }
    )
    if (edit.status === 200) {
      return true
    } else {
      throw new Error(edit.status)
    }
  } catch (error) {
    throw new Error(error)
  }
}

