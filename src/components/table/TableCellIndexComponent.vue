<template>
  <td class="table-cell-custom" :style="{ color: fontColor, cursor: cursorPointer ? 'pointer' : 'default' }">
    {{ formattedCellData }}{{ percentageSign }}
  </td>
</template>

<script>
import { formatNumber } from '@/utilities/numberMask';
import './table.css';

export default {
  name: 'TableCellIndexComponent',
  props: {
    cellData: {
      type: [String, Number],
      required: true
    },
    fontColor: {
      type: String,
      default: 'var(--font-color)'
    },
    cursorPointer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedCellData() {
      return isNaN(this.cellData) ? this.cellData : this.onFormatNumber(this.cellData);
    },
    percentageSign() {
      return this.fontColor !== 'var(--font-color)' ? '%' : '';
    }
  },
  methods: {
    onFormatNumber(value) {
      return formatNumber(value);
    }
  }
};
</script>