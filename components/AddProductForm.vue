<template>
  <form>
    <label>Наименование товара&#42;</label>
    <input type="text" placeholder="Введите наименование товара" required>
    <label>Описание товара</label>
    <textarea id="description" placeholder="Введите описание товара" />
    <label>Ссылка на изображение товара&#42;</label>
    <input type="text" placeholder="Введите ссылку" required>
    <label>Цена товара&#42;</label>
    <input type="number" required placeholder="Введите цену">
    <button>Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: 'AddProductForm'
}
</script>

<style scoped>
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
    color: #B4B4B4;
    height: 36px;
    width: 100%;
    background-color: #FFFEFB;
    font-weight: 400;
}

textarea {
    resize: none;
    font-size: 12px;
    line-height: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
    color: #B4B4B4;
    height: 36px;
    width: 100%;
    background-color: #FFFEFB;
}

form {
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    height: 440px;
}

button {
    background: #EEEEEE;
    border-radius: 10px;
    margin-top: 24px;
    height: 36px;
    width: 100%;
    border: none;
    font-family: Inter;
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
</style>
