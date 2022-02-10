<template>
  <div id="app">
    <div class="row" style="justify-content: space-between">
      <div id="add-product-label" class="margin8">
        Добавление товара
      </div>
      <SelectSortOrder class="margin8" @changed="setSortOrder" />
    </div>
    <div class="row">
      <div id="add-product-form" class="margin8">
        <AddProductForm
          :on-submit="addProduct"
        />
      </div>
      <TransitionGroup name="list" class="products-list" tag="div">
        <ProductTile
          v-for="product in sortedProducts"
          :key="product.id"
          :product="product"
          :delete-product="deleteProduct"
          class="product margin8"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'IndexPage',
  data () {
    return {
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
      ],
      sortOrder: ''
    }
  },
  computed: {
    sortedProducts () {
      switch (this.sortOrder) {
        case 'min':
          return this.products.slice().sort((a, b) => {
            return Number(a.price) - Number(b.price)
          })
        case 'max':
          return this.products.slice().sort((a, b) => {
            return Number(b.price) - Number(a.price)
          })
        case 'name':
          return this.products.slice().sort((a, b) => {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          })
      }
      return this.products
    }
  },
  methods: {
    addProduct (product) {
      product.id = uuidv4()
      this.products.push(product)
    },
    deleteProduct (product) {
      this.products = this.products.filter(p => p.id !== product.id)
    },
    setSortOrder (value) {
      this.sortOrder = value
    }
  }
}
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}

#add-product-form {
  width: 30%;
}

.margin8 {
  margin: 8px;
}

#add-product-label {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
}

html {
  background: #E5E5E5;
}

.row {
  display: flex;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 0;
  min-height: 0;
  table-layout: fixed;
  width: 75%;
}

.product:hover {
  cursor: pointer;
}
</style>
