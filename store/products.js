import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  products: [
    {
      name: 'b',
      price: '10000',
      imgSrc: '/product.png',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      id: uuidv4()
    },
    {
      name: 'c',
      price: '15000',
      imgSrc: '/product.png',
      description: 'Довольно-таки интересное описание товара в несколько строк',
      id: uuidv4()
    },
    {
      name: 'a',
      price: '9000',
      imgSrc: 'product.png',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      id: uuidv4()
    },
    {
      name: 'l',
      price: '145000',
      imgSrc: 'product.png',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      id: uuidv4()
    },
    {
      name: 'p',
      price: '10000',
      imgSrc: 'product.png',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      id: uuidv4()
    }
  ]
})

export const mutations = {
  add (state, product) {
    product.id = uuidv4()
    state.products.push(product)
  },
  remove (state, product) {
    state.products.splice(state.products.indexOf(product), 1)
  }
}
