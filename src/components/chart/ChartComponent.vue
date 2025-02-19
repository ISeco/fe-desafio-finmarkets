<template>
  <div style="width: 100%;">
    <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
    <div style="display: flex; flex-direction: row; width: 100%; gap: 15px;">
      <div class="uk-button-group">
        <button
          v-for="period in periods"
          :key="period"
          :class="'uk-button uk-button-default uk-button-small button-period ' + compareChartPeriod(period)"
          @click="updatePeriod(period)">
          {{ period }}
        </button>
      </div>
      <button class="uk-button uk-button-default uk-button-small button-period radius-4" @click="updatePeriod('5A')">
        <CalendarIcon :widthIcon="16" :heightIcon="16" />
      </button>
    </div>
  </div>
</template>

<script>
import { useInstrumentStore } from '@/store/instrumentStore'
import CalendarIcon from '@/assets/icons/CalendarIcon.vue'
import './chart.css'

export default {
  name: 'ChartComponent',
  components: {
    CalendarIcon
  },
  setup() {
    const instrumentStore = useInstrumentStore()
    instrumentStore.setChartPeriod('1D')
    return { instrumentStore }
  },
  data() {
    return {
      periods: ['1D', '1S', '1M', '3M', '6M', '1A', '5A']
    }
  },
  computed: {
    chartPeriod() {
      return this.instrumentStore.chartPeriod
    },
    selectedInstrument() {
      return this.instrumentStore.selectedInstrument
    },
    chartData() {
      return this.formattedData(this.instrumentStore.getChart)
    },
    series() {
      return [{
        data: this.chartData
      }]
    },
    chartOptions() {
      return {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#FFFFFFB3"],
              fontSize: '10px',
            }
          },
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0.1,
            opacityFrom: 0.7,
            opacityTo: 0.6,
            stops: [0, 100],
          },
        },
      }
    }
  },
  methods: {
    compareChartPeriod(period) {
      return this.chartPeriod === period ? 'button-active ' : ''
    },
    updatePeriod(period) {
      this.instrumentStore.setChartPeriod(period)
    },
    formattedData(data) {
      return data.map((item) => {
        return [item.datetimeLastPriceTs, item.lastPrice]
      })
    },
  }
}
</script>
