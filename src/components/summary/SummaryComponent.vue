<template>
  <div class="summary-container">
    <div class="tab-container">
      <uk-tab>
        <button
          class="uk-button uk-button-default uk-button-small tab-button"
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          :class="{ active: tab === currentTab }"
        >
          {{ tab }}
        </button>
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
            <SummaryTableCellComponent
              :title="pct30D + '%'"
              :text-alignment="'end'"
              :color="'var(--text-color-green)'"
            />
          </tr>
          <tr>
            <SummaryTableCellComponent :title="'1 Año'" />
            <SummaryTableCellComponent
              :title="pctRelW52 + '%'"
              :text-alignment="'end'"
              :color="'var(--text-color-green)'"
            />
          </tr>
          <tr>
            <SummaryTableCellComponent :title="'Año a la fecha'" />
            <SummaryTableCellComponent
              :title="pctRelCY + '%'"
              :text-alignment="'end'"
              :color="'var(--text-color-green)'"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useInstrumentStore } from '@/store/instrumentStore';
import SummaryTableComponent from './SummaryTableComponent.vue';
import SummaryTableHeadComponent from './SummaryTableHeadComponent.vue';
import SummaryTableCellComponent from './SummaryTableCellComponent.vue';
import { formatNumber } from '@/utilities/numberMask';

const tabs = ["Resumen", "Detalles"];
const currentTab = ref('Detalles');

const instrumentStore = useInstrumentStore();
const selectedInstrument = ref(null);

watch(
  () => instrumentStore.getSelectedInstrument,
  (newVal) => {
    if (newVal) selectedInstrument.value = newVal;
  },
  { immediate: true }
);

const pct30D = computed(() => formatNumber(selectedInstrument.value?.price?.pct30D ?? 0));
const pctRelW52 = computed(() => formatNumber(selectedInstrument.value?.price?.pctRelW52 ?? 0));
const pctRelCY = computed(() => formatNumber(selectedInstrument.value?.price?.pctRelCY ?? 0));
</script>

<style scoped>
.summary-container {
  display: flex;
  flex-direction: column;
}

.tab-container {
  margin-bottom: 8px;
}

.tab-button {
  color: var(--font-color);
  border: none;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  text-transform: capitalize;
}

.tab-button.active {
  border-bottom: 2px solid #87BAFF;
}
</style>
