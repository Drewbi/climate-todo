<template>
  <div id="header">
    <h1 id="title">{{ title }}</h1>
    <h3 id="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  #header {
    background-color: #e2fff5;
    width: 100%;
    padding: 20px 0;
  }

  #title {
    margin: 0;
  }

  #subtitle {
    font-weight: 400;
    margin: 0;
  }
</style>