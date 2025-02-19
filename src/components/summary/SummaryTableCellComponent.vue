<template>
  <td
    :style="{ padding: '0px', verticalAlign: 'inherit', textTransform: transform, fontSize: '10.5px', color: fontColor, textAlign: alignment }">
    {{ cellvalue }}</td>
</template>
<script>
export default {
  name: 'SummaryTableCellComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    textTrandform: {
      type: String,
      default: 'uppercase',
    },
    textAlignment: {
      type: String,
      default: 'start'
    },
    color: {
      type: String,
      default: 'var(--font-color)'
    }
  },
  setup(props) {
    return {
      cellvalue: props.title,
      transform: props.textTrandform,
      alignment: props.textAlignment,
      fontColor: props.color
    }
  }
}
</script>