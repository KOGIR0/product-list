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
          @submit="addProduct"
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
export default {
  name: 'IndexPage',
  data () {
    return {
      sortOrder: ''
    }
  },
  computed: {
    sortedProducts () {
      const products = this.$store.state.products.products
      switch (this.sortOrder) {
        case 'min':
          return products.slice().sort((a, b) => {
            return Number(a.price) - Number(b.price)
          })
        case 'max':
          return products.slice().sort((a, b) => {
            return Number(b.price) - Number(a.price)
          })
        case 'name':
          return products.slice().sort((a, b) => {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          })
      }
      return products
    }
  },
  methods: {
    addProduct (product) {
      this.$store.commit('products/add', product)
    },
    deleteProduct (product) {
      this.$store.commit('products/remove', product)
    },
    setSortOrder (value) {
      this.sortOrder = value
    }
  }
}
</script>

<style scoped lang="scss">
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
  font: 600 28px/35px "Source Sans Pro";
  color: $color-text-dark;
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

<style lang="scss">
html {
  background: $html-bg-color;
}
</style>
