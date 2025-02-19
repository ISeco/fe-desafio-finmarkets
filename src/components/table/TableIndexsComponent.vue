<template>
  <table class="uk-table uk-table-small" style="margin-bottom: 6px;">
    <thead>
      <tr>
        <TableHeadIndex :head-data="'Nombre'" />
        <TableHeadIndex :head-data="'Último'" />
        <TableHeadIndex :head-data="'Monto (MM)'" />
        <TableHeadIndex :head-data="'Var día'" />
        <TableHeadIndex :head-data="'Var 30d**'" />
        <TableHeadIndex :head-data="'Año Actual'" />
        <TableHeadIndex :head-data="'12 Meses'" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="instrument in instruments" :key="instrument.id">
        <TableCellIndex :cell-data="instrument.shortName" />
        <TableCellIndex :cell-data="instrument.lastPrice" />
        <TableCellIndex :cell-data="instrument.volumeMoney" />
        <TableCellIndex :cell-data="instrument.pctDay"
          :font-color="parseFloat(instrument.pctDay) < 0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important'" />
        <TableCellIndex :cell-data="instrument.pct30D"
          :font-color="parseFloat(instrument.pct30D) < 0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important'" />
        <TableCellIndex :cell-data="instrument.pctCY"
          :font-color="parseFloat(instrument.pctCY) < 0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important'" />
        <TableCellIndex :cell-data="instrument.pct1Y"
          :font-color="parseFloat(instrument.pct1Y) < 0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important'" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableCellIndex from './TableCellIndexComponent.vue'
import TableHeadIndex from './TableHeadIndexComponent.vue'

export default {
  name: 'TableIndexs',
  components: { TableCellIndex, TableHeadIndex },
  props: {
    instruments: {
      type: Array,
      required: true
    }
  },
}
</script>