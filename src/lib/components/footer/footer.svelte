<script lang="ts">
	export let deletions: number;
	export let additions: number;

	function pluralize(word: string, count: number) {
		return count === 1 ? word : word.concat("s");
	}
</script>

<nav class="flex h-7 w-full items-center justify-end border-t px-3">
	{#if additions !== 0 || deletions !== 0}
		<div class="flex gap-1.5 text-[10px] font-semibold">
			<span class="text-destructive">{deletions} {pluralize("deletion", deletions)}</span>
			<span class="text-constructive">{additions} {pluralize("addition", additions)}</span>
		</div>
	{/if}
</nav>
