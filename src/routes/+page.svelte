<script lang="ts">
  import type { BarData } from "$lib/protocols"
  import BarChart from "../components/barChart/BarChart.svelte"

  const generateBarsData = (): BarData[] => {
    const names = ["Carl", "Anna", "Eric", "Hugo", "John", "Sara"]
    return names.map((name) => {
      return {
        name,
        value: Math.round(Math.random() * 1000),
      }
    })
  }

  let barsData = generateBarsData()

  setInterval(() => {
    barsData = generateBarsData()
  }, 500)
</script>

<h1 class="font-bold text-[2.5rem] italic">ANIMATED BARCHART</h1>
<div class="h-[100px]" />
<BarChart {barsData} />
