<template>
  <div id="app">
    <div id="add-product-label">
      Добавление товара
    </div>
    <div class="row">
      <div id="add-product-form">
        <AddProductForm />
      </div>
      <div class="row products-list">
        <ProductTile
          v-for="(product,index) in products"
          :key="index"
          :name="product.name"
          :price="product.price"
          class="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      products: [
        {
          name: 'Product',
          price: '10000',
          imgSrc: ''
        },
        {
          name: 'Product',
          price: '10000',
          imgSrc: ''
        },
        {
          name: 'Product',
          price: '10000',
          imgSrc: ''
        },
        {
          name: 'Product',
          price: '10000',
          imgSrc: ''
        },
        {
          name: 'Product',
          price: '10000',
          imgSrc: ''
        }
      ]
    }
  },
  methods: {
    addProduct (product) {
      this.products.push(product)
    }
  }
}
</script>

<style>
#add-product-form {
  width: 30%;
  margin: 8px;
}

#add-product-label {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
  margin: 8px;
}

html {
  background: #E5E5E5;
}

.row {
  display: flex;
}

.products-list {
  display: grid;
  grid-template-columns: auto auto auto;
  width: 75%;
}

.product {
  margin: 8px;
}

.product:hover {
  cursor: pointer;
}
</style>
