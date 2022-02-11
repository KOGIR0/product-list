<template>
  <div id="product">
    <div id="delete-btn" @click="(e) => deleteProduct(product)">
      <img src="/delete.svg">
    </div>
    <img :src="product.imgSrc">
    <div id="product-info">
      <div id="name">
        {{ product.name }}
      </div>
      <div id="description">
        {{ product.description }}
      </div>
      <div id="price">
        {{ Number(product.price).toLocaleString() + " руб" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTile',
  props: {
    product: {
      required: true,
      type: Object
    },
    deleteProduct: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
* {
  color: $color-text-dark;
  font-family: "Source Sans Pro";
  font-style: normal;
}

img {
  width: 100%;
  height: 200px;
}

#product-info {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#name {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
}

#description {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 16px;

  flex-grow: 1;
}

#price {
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-top: 32px;
}

#product {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover #delete-btn {
    visibility: visible;
  }
}

#delete-btn {
  width: 32px;
  height: 32px;
  background: #FF8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  top: -8px;
  right: -8px;
  visibility: hidden;

  img {
    width: 16px;
    height: 16px;
    position: relative;
    left: 8px;
    top: 8px;
  }
}
</style>
