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

	let splitView: MergeView;
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
		splitView = new MergeView({
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
		if (splitView) {
			splitView.destroy();
		}
	});
</script>

<div
	bind:this={parentElement}
	class={cn(
		"size-full h-[calc(100dvh-2.25rem-1.75rem)] max-h-full cursor-text overflow-scroll bg-card",
		$$props["class"],
	)}
/>
