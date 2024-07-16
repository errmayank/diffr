<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import type { Extension } from "@codemirror/state";
	import {
		EditorView,
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
	import { cn } from "$lib/utils";

	export let docA: string = "";
	export let docB: string = "";

	let mergeView: MergeView;
	let parentElement: HTMLDivElement;

	const baseExtensions: Extension[] = [
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
				extensions: [
					...baseExtensions,
					EditorView.contentAttributes.of({ "aria-label": "Content Before" }),
				],
			},
			b: {
				doc: docB,
				extensions: [
					...baseExtensions,
					EditorView.contentAttributes.of({ "aria-label": "Content After" }),
				],
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
	class={cn(
		"relative size-full h-full max-h-full cursor-text overflow-scroll bg-card py-2",
		$$props["class"],
	)}
>
	<div class="absolute left-0 top-0 h-full w-[32.83px] cursor-default bg-accent" />
	<div class="absolute left-1/2 top-0 h-full w-[32.83px] cursor-default bg-accent" />
</div>
