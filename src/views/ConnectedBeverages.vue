<template>
  <div>
    <span>Seznam pripojených drinků</span>
    <ul>
      <div>
        <button>{{ alcoholic.a1 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a2 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a3 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a4 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a5 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a6 ?? "Select..." }}</button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ConnectedBeverages",
  data: () => ({
    alcoholic: {
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      a5: null,
      a6: null,
    },
    nonAlcoholic: [],
  }),
};
</script>

<style scoped>
</style>