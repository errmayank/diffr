<script lang="ts">
	import { ColumnsVector } from "$lib/components/vectors";

	export let docA: string;
	export let docB: string;
	export let deletions: number;
	export let additions: number;

	function pluralize(word: string, count: number) {
		return count === 1 ? word : word.concat("s");
	}
</script>

<nav class="flex h-7 w-full items-center justify-end border-t px-3 text-[10px] font-semibold">
	{#if docA.length !== 0 || docB.length !== 0}
		{#if additions === 0 && deletions == 0}
			<div class="flex items-center justify-center gap-1 text-[#595bed] dark:text-[#adaeeb]">
				<ColumnsVector size={12} />
				<span>Both sides are identical</span>
			</div>
		{:else}
			<div class="flex gap-1.5">
				<span class="text-destructive">{deletions} {pluralize("deletion", deletions)}</span>
				<span class="text-constructive">{additions} {pluralize("addition", additions)}</span>
			</div>
		{/if}
	{/if}
</nav>
