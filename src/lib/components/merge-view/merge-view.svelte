<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import type { Extension } from "@codemirror/state";
	import {
		highlightActiveLine,
		highlightActiveLineGutter,
		highlightSpecialChars,
		keymap,
		lineNumbers,
	} from "@codemirror/view";
	import { search, searchKeymap } from "@codemirror/search";
	import { foldGutter, foldKeymap } from "@codemirror/language";
	import { defaultKeymap, historyKeymap } from "@codemirror/commands";
	import { MergeView } from "@codemirror/merge";

	import { darkTheme } from "./themes/dark";

	export let docA: string = "";
	export let docB: string = "";

	let mergeView: MergeView;
	let parentElement: HTMLDivElement;

	const extensions: Extension[] = [
		highlightActiveLine(),
		search({ top: true }),
		lineNumbers(),
		highlightActiveLineGutter(),
		highlightSpecialChars(),
		foldGutter(),
		keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap]),
		darkTheme,
	];

	const createEditor = () => {
		mergeView = new MergeView({
			a: {
				doc: docA,
				extensions,
			},
			b: {
				doc: docB,
				extensions,
			},
			parent: parentElement,
		});
	};

	onMount(() => {
		createEditor();
	});

	onDestroy(() => {
		if (mergeView) {
			mergeView.destroy();
		}
	});
</script>

<div
	bind:this={parentElement}
	class={`relative size-full h-full max-h-full overflow-scroll border ${$$props["class"]}`}
>
	<div class="absolute left-0 top-0 h-full w-[32.83px] bg-[rgb(30,30,30)]" />
	<div class="absolute left-1/2 top-0 h-full w-[32.83px] bg-[rgb(30,30,30)]" />
</div>
