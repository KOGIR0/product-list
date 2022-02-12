<template>
  <form @submit="submit">
    <label>Наименование товара<span class="required">&#42;</span></label>
    <input v-model="name" type="text" placeholder="Введите наименование товара" required>
    <label>Описание товара</label>
    <textarea id="description" v-model="description" placeholder="Введите описание товара" />
    <label>Ссылка на изображение товара<span class="required">&#42;</span></label>
    <input v-model="imgSrc" type="text" placeholder="Введите ссылку" required>
    <label>Цена товара<span class="required">&#42;</span></label>
    <input :value="formatedPrice" required placeholder="Введите цену" @input="handleInputPrice($event)">
    <input type="submit" value="Добавить товар" :disabled="submitIsDisabled">
  </form>
</template>

<script>
export default {
  name: 'AddProductForm',
  data () {
    return {
      name: '',
      description: '',
      imgSrc: '',
      price: 0,
      formatedPrice: ''
    }
  },
  computed: {
    submitIsDisabled () {
      if (!this.name || !this.price || !this.imgSrc) {
        return true
      }
      return false
    },
    submitColor () {
      if (!this.submitIsDisabled) {
        return 'green'
      }
      return ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()

      const product = {
        name: this.name,
        description: this.description,
        imgSrc: this.imgSrc,
        price: this.price
      }

      this.name = ''
      this.description = ''
      this.imgSrc = ''
      this.price = ''
      this.formatedPrice = ''

      this.$emit('submit', product)
    },
    handleInputPrice (e) {
      this.price = Number(String(e.target.value).replace(/\s+/g, ''))

      if (Number.isNaN(this.price)) {
        this.formatedPrice = e.target.value
      } else {
        this.formatedPrice = Number(this.price).toLocaleString()
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: 'Source Sans Pro';
}

label {
  display: block;
  font: 10px/16px 'Source Sans Pro';
}

input {
  font: 12px/15px 'Source Sans Pro';
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: $color-text-dark;
  height: 36px;
  width: 100%;
  background-color: #FFFEFB;
  margin-bottom: 16px;
}

input[type="submit"] {
  margin-top: 8px;
  font: 600 12px/15px "Inter";

  text-align: center;
  letter-spacing: -0.02em;

  &:enabled {
    background: green;
    color: white;
  }

  &:disabled {
    color: #B4B4B4;
  }

  &:hover:enabled {
    cursor: pointer;
  }
}

textarea {
  resize: none;
  font: 12px/15px 'Source Sans Pro';
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: black;
  height: 36px;
  width: 100%;
  background: #FFFEFB;
  margin-bottom: 16px;
}

form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
}

#description {
  height: 108px;
}

.required {
  color: red;
}
</style>
