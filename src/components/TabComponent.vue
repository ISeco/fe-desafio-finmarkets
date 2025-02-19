<template>
  <div style="display: flex; width: 100%; justify-content: start; flex-direction: column; gap: 5px;">
    <div style="display: flex; flex-direction: row; align-content: start; width: 100%;">
      <uk-tab>
        <button class="uk-button uk-button-default uk-button-small"
          style="color: var(--font-color); border: none; padding: 20px; border-bottom: 1px solid #e5e5e5; text-transform: capitalize;"
          v-for="tab in tabs" :key="tab" @click="currentTab = tab"
          :style="{ borderBottom: tab === currentTab ? '2px solid #87BAFF' : '1px solid #e5e5e5' }">{{ tab }}</button>
      </uk-tab>
    </div>
    <InstrumentListComponent />
  </div>
</template>

<script>
import InstrumentListComponent from '@/components/InstrumentListComponent.vue'
export default {
  name: 'TabComponent',
  components: { InstrumentListComponent },
  data() {
    return {
      tabs: ['IPSA', 'IGPA', 'NASDAQ', 'DOW JONES', 'S&P/BVL'],
      currentTab: 'IPSA'
    }
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>
