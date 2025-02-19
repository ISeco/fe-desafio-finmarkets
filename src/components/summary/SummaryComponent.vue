<template>
  <div style="display: flex; flex-direction: column;">
    <div style="margin-bottom: 8px;">
      <uk-tab>
        <button class="uk-button uk-button-default uk-button-small"
          style="color: var(--font-color); border: none; padding: 20px; border-bottom: 1px solid #e5e5e5; text-transform: capitalize;"
          v-for="tab in tabs" :key="tab" @click="currentTab = tab"
          :style="{ borderBottom: tab === currentTab ? '2px solid #87BAFF' : '1px solid #e5e5e5' }">{{ tab }}</button>
      </uk-tab>
    </div>
    <div>
      <SummaryTableComponent />
    </div>
    <div>
      <table class="uk-table uk-table-small">
        <thead>
          <tr>
            <SummaryTableHeadComponent :title="'Variación'" />
            <SummaryTableHeadComponent :title="'%'" :text-alignment="'end'" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <SummaryTableCellComponent :title="'1 Mes'" />
            <SummaryTableCellComponent :title="pct30D + '%'" :text-alignment="'end'" :color="'var(--text-color-green)'" />
          </tr>
          <tr>
            <SummaryTableCellComponent :title="'1 Año'" />
            <SummaryTableCellComponent :title="pctRelW52 + '%'" :text-alignment="'end'" :color="'var(--text-color-green)'" />
          </tr>
          <tr>
            <SummaryTableCellComponent :title="'Año a la fecha'" />
            <SummaryTableCellComponent :title="pctRelCY + '%'" :text-alignment="'end'" :color="'var(--text-color-green)'" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useInstrumentStore } from '@/store/instrumentStore';
import SummaryTableComponent from './SummaryTableComponent.vue'
import SummaryTableHeadComponent from './SummaryTableHeadComponent.vue'
import SummaryTableCellComponent from './SummaryTableCellComponent.vue'
import { formatNumber } from '@/utilities/numberMask';

export default {
  name: 'SummaryComponent',
  components: { SummaryTableComponent, SummaryTableHeadComponent, SummaryTableCellComponent },
  data() {
    return {
      tabs: ["Resumen", "Detalles"],
      currentTab: 'Detalles'
    }
  },
  computed: {
    instrument() {
      const store = useInstrumentStore()
      return store.getSelectedInstrument
    },
    pct30D() {
      return this.onFormatNumber(this.instrument?.price?.pct30D || 0);
    },
    pctRelW52() {
      return this.onFormatNumber(this.instrument?.price?.pctRelW52 || 0);
    },
    pctRelCY() {
      return this.onFormatNumber(this.instrument?.price?.pctRelCY || 0);
    }
  },
  methods: {
    onFormatNumber(value) {
      return formatNumber(value);
    }
  },
}
</script>
