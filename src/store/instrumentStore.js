import { getConstituyentes, getHistoryByName, getSummaryByName } from '@/service/dataService'
import { defineStore } from 'pinia'

export const useInstrumentStore = defineStore('instrumentStore', {
  state: () => ({
    selectedInstrument: {},
    instruments: [],
    summary: {},
    chart: [],
    chartPeriod: '1M',
  }),
  actions: {
    async loadInstruments() {
      this.instruments = await getConstituyentes()
    },
    async loadSummaryByName(name) {
      this.summary = await getSummaryByName(name).then((response) => {
        if (!response) return
        this.setSelectedInstrument(response.data)
        return response.data
      })
    },
    async loadChartByName(name) {
      this.chart = await getHistoryByName(name).then((response) => {
        if (!response) return this.chart;
        return response.data.chart
      })
    },
    setSelectedInstrument(instrument) {
      this.selectedInstrument = instrument
    },
    setChartPeriod(period) {
      this.chartPeriod = period
    }
  },

  getters: {
    getSelectedInstrument: (state) => state.selectedInstrument,
    getInstruments: (state) => state.instruments,
    getChartPeriod: (state) => state.chartPeriod,
    getChart: (state) => state.chart,
    getSummary: (state) => state.summary
  }
})