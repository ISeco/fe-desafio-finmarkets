<template>
  <div class="header-container">
    <div class="header-content">
      <div class="instrument">{{ name }}, {{ countryName }}</div>
      <div class="font-size-12">Índice</div>
      <div class="divider"></div>
      <div class="instrument-value">
        <span class="font-size-12">Valor Actual {{ lastPrice }}</span>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
          <span class="font-size-12">Var.% Actual </span><span class="font-size-12"
            :style="{ color: parseFloat(performanceAbsolute) < 0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important' }">
            {{ performanceAbsolute }}%</span>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
          <span class="font-size-12">Var. Puntos Actual</span>
          <span class="font-size-12"
            :style="{ color: parseFloat(performanceRelative) < 0 || Math.sign(parseFloat(performanceRelative)) === -0 ? 'var(--text-color-red) !important' : 'var(--text-color-green) !important' }">
            {{ performanceRelative }}</span>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <ChartComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { useInstrumentStore } from '@/store/instrumentStore'
import ChartComponent from '@/components/chart/ChartComponent.vue'
import { formatNumber } from '@/utilities/numberMask';
import './header.css'

export default {
  name: 'HeaderComponent',
  components: {
    ChartComponent
  },
  setup() {
    const instrumentStore = useInstrumentStore()
    return { instrumentStore }
  },
  computed: {
    selectedInstrument() {
      return this.instrumentStore.getSelectedInstrument
    },
    lastPrice() {
      return this.onFormatNumber(this.selectedInstrument?.price?.lastPrice || 0)
    },
    name() {
      return this.selectedInstrument?.info?.name
    },
    countryName() {
      return this.selectedInstrument?.info?.countryName
    },
    performanceAbsolute() {
      return this.onFormatNumber(this.selectedInstrument?.price?.performanceAbsolute || 0)
    },
    performanceRelative() {
      return this.onFormatNumber(this.selectedInstrument?.price?.performanceRelative || 0)
    }
  },
  methods: {
    onFormatNumber(value) {
      return formatNumber(value);
    }
  }
}
</script>
