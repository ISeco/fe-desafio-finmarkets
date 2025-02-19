<template>
  <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%; margin: 0px 30px; gap: 16px;">
      <SearchBarComponent @searchInstrument="handleSearch" />
      <div
        style="display: grid; grid-template-columns: minmax(500px,1fr) minmax(100px,230px); grid-template-areas: 'main-1 sidebar'; width: 100%; gap: 16px;">
        <div style="grid-area: main-1;">
          <HeaderComponent />
        </div>
        <div style="grid-area: sidebar;">
          <SummaryComponent />
        </div>
      </div>
      <TabComponent />
    </div>
  </div>
</template>

<script>
import SearchBarComponent from '@/components/search-bar/SearchBarComponent.vue'
import TabComponent from '@/components/TabComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import SummaryComponent from '@/components/summary/SummaryComponent.vue'
import { useInstrumentStore } from '@/store/instrumentStore'

export default {
  name: 'HomeView',
  components: {
    SearchBarComponent,
    TabComponent,
    HeaderComponent,
    SummaryComponent,
  },
  beforeMount() {
    const store = useInstrumentStore()
    store.loadSummaryByName("IPSA")
    store.loadChartByName("IPSA")
  },
}
</script>
