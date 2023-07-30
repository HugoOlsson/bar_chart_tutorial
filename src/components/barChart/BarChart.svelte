<script lang="ts">
  import type { BarData } from "$lib/protocols"
  import Bar from "./Bar.svelte"
  import Circle from "./Circle.svelte"
  import Line from "./Line.svelte"

  export let barsData: BarData[]

  const percentages = [100, 75, 50, 25, 0]

  const firstFlex = 1
  const secondFlex = 8

  $: maxValue = Math.max(...barsData.map((data) => data.value))
</script>

<div class="flex flex-col w-[500px]">
  <div class="relative flex h-[400px]">
    <div class="absolute w-full h-full flex flex-col justify-between">
      {#each percentages as percentage}
        <Line {percentage} />
      {/each}
    </div>
    <div class="flex-[{firstFlex}]" />
    <div class="flex flex-[{secondFlex}] gap-3">
      {#each barsData as barData}
        <Bar --height={barData.value / maxValue} />
      {/each}
    </div>
  </div>
  <div class="h-[10px]" />
  <div class="flex">
    <div class="flex-[{firstFlex}]" />
    <div class="flex flex-[{secondFlex}] gap-3">
      {#each barsData as _, index}
        <Circle index={index + 1} />
      {/each}
    </div>
  </div>
  <div class="h-[50px]" />
  <div class="flex">
    <div class="flex-[{firstFlex}]" />
    <div class="flex flex-[{secondFlex}] flex-wrap gap-5">
      {#each barsData as barData, index}
        <p class="text-content font-light"><span class="font-bold">{index + 1}. </span>{barData.name}</p>
      {/each}
    </div>
  </div>
</div>
