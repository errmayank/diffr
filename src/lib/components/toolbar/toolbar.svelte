<script lang="ts">
	import type { MergeView } from "@codemirror/merge";
	import { goToNextChunk, goToPreviousChunk } from "@codemirror/merge";

	import { ArrowDownVector, ArrowUpVector, ColumnsVector } from "$lib/components/vectors";
	import { Button } from "$lib/components/button";

	export let docA: string;
	export let docB: string;
	export let deletions: number;
	export let additions: number;
	export let view: MergeView | null;

	function pluralize(word: string, count: number) {
		return count === 1 ? word : word.concat("s");
	}

	function goToPreviousChange() {
		if (view) {
			goToPreviousChunk({
				state: view.b.state,
				dispatch(transaction) {
					view.b.dispatch(transaction);
				},
			});
		}
	}

	function goToNextChange() {
		if (view) {
			goToNextChunk({
				state: view.b.state,
				dispatch(transaction) {
					view.b.dispatch(transaction);
				},
			});
		}
	}
</script>

<nav class="flex h-7 w-full items-center justify-end gap-4 border-t px-3 text-[10px] font-semibold">
	{#if docA.length !== 0 || docB.length !== 0}
		{#if additions === 0 && deletions == 0}
			<div class="flex items-center justify-center gap-1 text-[#595bed] dark:text-[#adaeeb]">
				<ColumnsVector size={13} />
				<span>Both sides are identical</span>
			</div>
		{:else}
			<div class="flex items-center gap-1.5">
				<span class="text-destructive">{deletions} {pluralize("deletion", deletions)}</span>
				<span class="text-constructive">{additions} {pluralize("addition", additions)}</span>
				<div>
					<Button
						on:click={goToPreviousChange}
						variant="ghost"
						size="icon"
						class="size-[20px] rounded-sm"
					>
						<ArrowUpVector size={15} />
						<span class="sr-only">Previous Change</span>
					</Button>
					<Button
						on:click={goToNextChange}
						variant="ghost"
						size="icon"
						class="size-[20px] rounded-sm"
					>
						<ArrowDownVector size={15} />
						<span class="sr-only">Next Change</span>
					</Button>
				</div>
			</div>
		{/if}
	{/if}
</nav>
