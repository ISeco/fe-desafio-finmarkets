<template>
  <div style="position: relative; width: 100%;">
    <div class="search-bar-container">
      <div class="search-icon">
        <SearchIcon />
      </div>
      <input 
        class="search-bar uk-input"
        type="text" 
        v-model="searchTerm" 
        placeholder="Busca un instrumento"
        @input="onSearch"
      />
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/SearchIcon.vue'
export default {
  name: 'SearchBarComponent',
  components: {
    SearchIcon
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    onSearch() {
      this.$emit('searchInstrument', this.searchTerm)
    }
  }
}
import "./search-bar.css"
</script>
