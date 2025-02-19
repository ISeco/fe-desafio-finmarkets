<template>
  <th class="table-head-custom">
    {{ value }}</th>
</template>
<script>
import './table.css'
export default {
  name: 'TableHeadIndex',
  props: {
    headData: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      value: props.headData
    }
  }
}
</script>