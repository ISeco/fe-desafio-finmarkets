<template>
  <th
    :style="{verticalAlign: 'inherit', textAlign: alignment, textTransform: 'capitalize', fontSize: '10.5px', color: 'var(--font-color)', padding: '5px 0px'}">
    {{ headvalue }}</th>
</template>
<script>
export default {
  name: 'SummaryTableHeadComponent',
  props: {
    title: String,
    textAlignment: {
      type: String,
      default: 'start'
    }
  },
  setup(props) {
    return {
      headvalue: props.title,
      alignment: props.textAlignment
    }
  }
}
</script>