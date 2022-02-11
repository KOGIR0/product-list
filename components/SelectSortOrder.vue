<template>
  <select @change="changeValue($event)">
    <option default value="none">
      По умолчанию
    </option>
    <option value="min">
      Цена min
    </option>
    <option value="max">
      Цена max
    </option>
    <option value="name">
      Наименование
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectSortOrder',
  methods: {
    changeValue (e) {
      this.$emit('changed', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
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

    &:hover {
      cursor: pointer;
    }
}

option {
    text-align: center;
    width: fit-content;
}
</style>
