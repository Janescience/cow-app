<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { Chart, registerables} from 'chart.js';


const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart
Chart.register(...registerables);

// Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'line',
    data: props.data,
    options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        
        suggestedMin: 0,
        suggestedMax: 200
      }
    }
  },
  })
})

const chartData = computed(() => props.data)

watch(chartData, data => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" />
</template>
