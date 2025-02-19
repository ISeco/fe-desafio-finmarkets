import { getConstituyentes, getHistoryByName, getSummaryByName } from '@/service/dataService'
import { defineStore } from 'pinia'

export const useInstrumentStore = defineStore('instrumentStore', {
  state: () => ({
    selectedInstrument: null,
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
        this.setSelectedInstrument(response.data)
        return response.data
      })
    },
    async loadChartByName(name) {
      this.chart = await getHistoryByName(name).then((response) => response.data.chart)
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