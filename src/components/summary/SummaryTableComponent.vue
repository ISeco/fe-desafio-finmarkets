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
        <SummaryTableCellComponent :title="selectedInstrument?.info?.marketName" :text-transform="'none'"
          :text-alignment="'end'"  />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'APERTURA'" />
        <SummaryTableCellComponent :title="formattedPrice('openPrice')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'CIERRE ANTERIOR'" />
        <SummaryTableCellComponent :title="formattedPrice('lastPrice')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÁXIMO DÍARIO'" />
        <SummaryTableCellComponent :title="formattedPrice('maxDay')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÍNIMO DÍARIO'" />
        <SummaryTableCellComponent :title="formattedPrice('minDay')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÁXIMO 52 SEMANAS'" />
        <SummaryTableCellComponent :title="formattedPrice('max52W')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
      <tr>
        <SummaryTableCellComponent :title="'MÍNIMO 52 SEMANAS'" />
        <SummaryTableCellComponent :title="formattedPrice('min52W')" :text-transform="'none'" :text-alignment="'end'" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import SummaryTableHeadComponent from './SummaryTableHeadComponent.vue'
import SummaryTableCellComponent from './SummaryTableCellComponent.vue'
import { useInstrumentStore } from '@/store/instrumentStore';
import { formatNumber } from '@/utilities/numberMask';
import { ref, watch } from 'vue';

export default {
  name: 'SummaryTableComponent',
  components: { SummaryTableHeadComponent, SummaryTableCellComponent },
  setup() {
    const instrumentStore = useInstrumentStore()
    const selectedInstrument = ref(null);

    watch(
      instrumentStore.getSelectedInstrument,
      (newVal) => {
        if (newVal) selectedInstrument.value = newVal;
      },
      { immediate: true }
    );

    const formattedPrice = (priceType) => {
      return formatNumber(selectedInstrument.value?.price?.[priceType]);
    };

    return { selectedInstrument, formattedPrice }
  }
}
</script>
