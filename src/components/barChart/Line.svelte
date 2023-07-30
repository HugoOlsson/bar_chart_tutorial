<script lang="ts">
  export let percentage: number
</script>

<div class="flex items-center gap-2 h-0">
  <p class="font-bold text-content text-blue">{percentage.toString()}%</p>
  <div class="flex-1 border-t-2 border-dashed border-blue" />
</div>
