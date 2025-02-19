<template>
  <th
    :style="thStyle">
    {{ title }}
  </th>
</template>

<script>
export default {
  name: 'SummaryTableHeadComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    textAlignment: {
      type: String,
      default: 'start'
    }
  },
  computed: {
    thStyle() {
      return {
        verticalAlign: 'inherit',
        textAlign: this.textAlignment,
        textTransform: 'capitalize',
        fontSize: '10.5px',
        color: 'var(--font-color)',
        padding: '5px 0px'
      };
    }
  }
}
</script>