<template>
  <div id="product">
    <img :src="imageSrc">
    <div id="product-info">
      <div id="name">
        {{ name }}
      </div>
      <div id="description">
        {{ description }}
      </div>
      <div id="price">
        {{ price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTile',
  props: {
    imageSrc: {
      default: '/product.png',
      type: String
    },
    name: {
      default: 'Product',
      type: String
    },
    description: {
      default: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      type: String
    },
    price: {
      default: '100 руб',
      type: String
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}

#product-info {
  padding: 16px;
}

#name {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
}

#description {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 16px;

  color: #3F3F3F;
}

#product {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

#price {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-top: 32px;

  color: #3F3F3F;
}
</style>
