<template>
  <select>
    <option default>
      По умолчанию
    </option>
    <option>Цена min</option>
    <option>Цена max</option>
    <option>Наименование</option>
  </select>
</template>

<script>
export default {
  name: 'SelectSortOrder'
}
</script>

<style scoped>
select {
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;

    font: normal normal 12px 15px "Source Sans Pro";
    appearance: none;
    height: 36px;
    width: fit-content;
    text-align: center;

    padding: 0 16px;
    color: #B4B4B4;
}

option {
    text-align: center;
    width: fit-content;
}
</style>
