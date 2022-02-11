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
  props: {
    onSubmit: {
      type: Function,
      default: () => {}
    }
  },
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

      this.onSubmit(product)
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
  font-size: 10px;
  font-weight: 400;
  margin-top: 16px;
}

input {
  font-size: 12px;
  line-height: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: $color-text-dark;
  height: 36px;
  width: 100%;
  background-color: #FFFEFB;
  font-weight: 400;
}

input[type="submit"] {
  margin-top: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

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
  font-size: 12px;
  line-height: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: black;
  height: 36px;
  width: 100%;
  background: #FFFEFB;
}

form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
}

button {
  background: #EEEEEE;
  border-radius: 10px;
  margin-top: 24px;
  height: 36px;
  width: 100%;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  box-sizing: border-box;
  font-weight: 600;
}

#description {
  height: 108px;
}

.required {
  color: red;
}
</style>
