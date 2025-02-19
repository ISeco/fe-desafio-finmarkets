<template>
  <div style="display: flex; width: 100%; justify-content: start;">
    <div style="display: flex; flex-direction: row; align-items: start; align-content: start; gap: 16px;">
      <div>
        <TableIndexs :instruments="instruments.slice(0, 16)" />
      </div>
      <div>
        <TableIndexs :instruments="instruments.slice(16, instruments.length - 1)" />
      </div>
    </div>
  </div>
  <div
    style="display: flex; flex-direction: column; justify-content: start; text-align: start; font-size: 10px; margin-bottom: 20px;">
    <span>* Último precio, Monto Transado y Variación diaria con desfase de 15 minutos. Haz click en cada
      instrumento
      para ver información actualizada en el gráfico.
    </span>
    <span>** Variaciones a 30d, Año Actual y 12 meses calculadas con el precio de cierre al último día hábil.</span>
  </div>
</template>

<script>
import { useInstrumentStore } from '@/store/instrumentStore'
import TableIndexs from './table/TableIndexsComponent.vue'
import { watchEffect } from 'vue';

export default {
  name: 'InstrumentListComponent',
  components: { TableIndexs },
  async mounted() {
    const store = useInstrumentStore()
    watchEffect(async () => {
      await store.loadInstruments()
    })
  },
  computed: {
    instruments() {
      const store = useInstrumentStore()
      return store.getInstruments
    }
  }
}
</script>
