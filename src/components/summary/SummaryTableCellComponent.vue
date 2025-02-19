<template>
  <td
    :style="{ padding: '0px', verticalAlign: 'inherit', textTransform: textTransform, fontSize: '10.5px', color: color, textAlign: textAlignment }">
    {{ title }}
  </td>
</template>

<script>
export default {
  name: 'SummaryTableCellComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    textTransform: {
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
  }
}
</script>
