<template>
  <table class="uk-table uk-table-small">
    <thead>
      <tr>
        <SummaryTableHeadComponent :title="'Cotización'" />
        <SummaryTableHeadComponent :title="selectedInstrument?.price?.datetimeLastPrice" :text-alignment="'end'" />
      </tr>
    </thead>
    <tbody>
      <tr>
        <SummaryTableCellComponent :title="'Mercado'" />
        <SummaryTableCellComponent :title="selectedInstrument?.info?.marketName" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'APERTURA'" />
        <SummaryTableCellComponent :title="openPrice" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'CIERRE ANTERIOR'" />
        <SummaryTableCellComponent :title="lastPrice" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÁXIMO DÍARIO'" />
        <SummaryTableCellComponent :title="maxDay" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÍNIMO DÍARIO'" />
        <SummaryTableCellComponent :title="minDay" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÁXIMO 52 SEMANAS'" />
        <SummaryTableCellComponent :title="max52Weeks" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÍNIMO 52 SEMANAS'" />
        <SummaryTableCellComponent :title="min52Weeks" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import SummaryTableHeadComponent from './SummaryTableHeadComponent.vue'
import SummaryTableCellComponent from './SummaryTableCellComponent.vue'
import { useInstrumentStore } from '@/store/instrumentStore';
import { formatNumber } from '@/utilities/numberMask';

export default {
  name: 'SummaryTableComponent',
  components: { SummaryTableHeadComponent, SummaryTableCellComponent },
  computed: {
    selectedInstrument() {
      return useInstrumentStore().getSummary
    },
    openPrice() {
      return this.onFormatNumber(this.selectedInstrument?.price?.openPrice);
    },
    lastPrice() {
      return this.onFormatNumber(this.selectedInstrument?.price?.lastPrice);
    },
    maxDay() {
      return this.onFormatNumber(this.selectedInstrument?.price?.maxDay);
    },
    minDay() {
      return this.onFormatNumber(this.selectedInstrument?.price?.minDay);
    },
    max52Weeks() {
      return this.onFormatNumber(this.selectedInstrument?.price?.max52W);
    },
    min52Weeks() {
      return this.onFormatNumber(this.selectedInstrument?.price?.min52W);
    },
    pct30D() {
      return this.selectedInstrument?.price?.pct30D;
    },
    pctRelW52() {
      return this.selectedInstrument?.price?.pctRelW52;
    },
    pctRelCY() {
      return this.selectedInstrument?.price?.pctRelCY;
    }
  },
  methods: {
    onFormatNumber(value) {
      return formatNumber(value);
    }
  }
}
</script>