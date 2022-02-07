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
        <div
          v-for="index in 10"
          :key="index"
          class="product"
        >
          <ProductTile
            name="Product"
            price="35"
            style="{width: 30%}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
</style>
