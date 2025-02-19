import { setActivePinia, createPinia } from 'pinia'
import { useInstrumentStore } from '../../src/store/instrumentStore'
import { getConstituyentes, getHistoryByName, getSummaryByName } from '../../src/service/dataService'
jest.mock('../../src/service/dataService')

describe('Instrument Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('loads instruments', async () => {
    const store = useInstrumentStore()
    const mockInstruments = [{ id: 1, name: 'Instrument 1' }]
    getConstituyentes.mockResolvedValue(mockInstruments)

    await store.loadInstruments()

    expect(store.instruments).toEqual(mockInstruments)
  })

  it('loads summary by name', async () => {
    const store = useInstrumentStore()
    const mockSummary = { data: { id: 1, name: 'Instrument 1' } }
    getSummaryByName.mockResolvedValue(mockSummary)

    await store.loadSummaryByName('Instrument 1')

    expect(store.summary).toEqual(mockSummary.data)
    expect(store.selectedInstrument).toEqual(mockSummary.data)
  })

  it('loads chart by name', async () => {
    const store = useInstrumentStore()
    const mockChart = { data: { chart: [1, 2, 3]}}
    getHistoryByName.mockResolvedValue(mockChart)

    await store.loadChartByName('Instrument 1')

    expect(store.chart).toEqual(mockChart.data.chart)
  })

  it('sets selected instrument', () => {
    const store = useInstrumentStore()
    const instrument = { id: 1, name: 'Instrument 1' }

    store.setSelectedInstrument(instrument)

    expect(store.selectedInstrument).toEqual(instrument)
  })

  it('sets chart period', () => {
    const store = useInstrumentStore()
    const period = '3M'

    store.setChartPeriod(period)

    expect(store.chartPeriod).toBe(period)
  })

  it('gets selected instrument', () => {
    const store = useInstrumentStore()
    const instrument = { id: 1, name: 'Instrument 1' }
    store.selectedInstrument = instrument

    expect(store.getSelectedInstrument).toEqual(instrument)
  })

  it('gets instruments', () => {
    const store = useInstrumentStore()
    const instruments = [{ id: 1, name: 'Instrument 1' }]
    store.instruments = instruments

    expect(store.getInstruments).toEqual(instruments)
  })

  it('gets chart period', () => {
    const store = useInstrumentStore()
    const period = '3M'
    store.chartPeriod = period

    expect(store.getChartPeriod).toBe(period)
  })

  it('gets chart', () => {
    const store = useInstrumentStore()
    const chart = [1, 2, 3]
    store.chart = chart

    expect(store.getChart).toEqual(chart)
  })

  it('gets summary', () => {
    const store = useInstrumentStore()
    const summary = { id: 1, name: 'Instrument 1' }
    store.summary = summary

    expect(store.getSummary).toEqual(summary)
  })
})