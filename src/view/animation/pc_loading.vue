<template>
  <div id="pc_loading">
    <div class="loading"></div>
  </div>
</template>

<script>
  export default {
    name: "pc_loading",
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .loading {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em crimson;
    animation: spin 2s linear infinite;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      box-shadow: inherit;
    }

    &::before {
      filter: blur(5px);
    }

    &::after {
      filter: blur(10px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

</style>
