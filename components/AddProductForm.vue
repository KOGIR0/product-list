<template>
  <form @submit="submit">
    <div>
      <label>Наименование товара<span class="required" /></label>
      <input
        v-model="name"
        :class="!name ? 'required-border' : none"
        type="text"
        placeholder="Введите наименование товара"
        required
      >
      <div v-show="!name" class="required-message">
        Поле является обязательным
      </div>
    </div>
    <div>
      <label>Описание товара</label>
      <textarea id="description" v-model="description" placeholder="Введите описание товара" />
    </div>
    <div>
      <label>Ссылка на изображение товара<span class="required" /></label>
      <input
        v-model="imgSrc"
        type="text"
        :class="!imgSrc ? 'required-border' : none"
        placeholder="Введите ссылку"
        required
      >
      <div v-show="!imgSrc" class="required-message">
        Поле является обязательным
      </div>
    </div>
    <div>
      <div>
        <label>Цена товара<span class="required" /></label>
        <input
          :value="formatedPrice"
          required
          :class="!formatedPrice ? 'required-border' : none"
          placeholder="Введите цену"
          @input="handleInputPrice($event)"
        >
        <div v-show="!price" class="required-message">
          Поле является обязательным
        </div>
      </div>
      <input type="submit" value="Добавить товар" :disabled="submitIsDisabled">
    </div>
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
$required-color: #FF8484;

* {
  font-family: 'Source Sans Pro';
}

label {
  display: block;
  font: 10px/16px 'Source Sans Pro';
  margin-top: 10px;
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

.required-message {
  font-family: Source Sans Pro;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;

  color: $required-color;
  margin-top: 4px;
}

.required {
  background-color: $required-color;
  width: 4px;
  height: 4px;
  display: inline-block;
  border-radius: 50%;
  vertical-align: top;
}

.required-border {
  border: 1px solid #FF8484;
}
</style>
