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
	import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
	import { MergeView } from "@codemirror/merge";

	import { darkTheme } from "./themes/dark";
	import { cn } from "$lib/utils";

	export let docA: string;
	export let docB: string;
	export let deletions: number;
	export let additions: number;

	let splitView: MergeView;
	let parentElement: HTMLDivElement;

	const baseExtensions: Extension[] = [
		highlightActiveLine(),
		search({ top: true }),
		lineNumbers(),
		highlightActiveLineGutter(),
		highlightSpecialChars(),
		foldGutter(),
		history(),
		keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap, ...foldKeymap]),
		darkTheme,
		EditorView.updateListener.of(viewUpdate => {
			if (viewUpdate.docChanged) {
				const { deltaA, deltaB } = splitView.chunks
					.flatMap(chunk => {
						return chunk.changes.map(change => ({
							deltaA: change.toA - change.fromA,
							deltaB: change.toB - change.fromB,
						}));
					})
					.reduce(
						(acc, cur) => {
							acc.deltaA += cur.deltaA;
							acc.deltaB += cur.deltaB;

							return acc;
						},
						{ deltaA: 0, deltaB: 0 },
					);

				deletions = deltaA;
				additions = deltaB;
			}
		}),
	];

	const createEditor = () => {
		splitView = new MergeView({
			a: {
				doc: docA,
				extensions: [
					...baseExtensions,
					EditorView.contentAttributes.of({ "aria-label": "Content Before" }),
					EditorView.updateListener.of(viewUpdate => {
						if (viewUpdate.docChanged) {
							docA = viewUpdate.state.doc.toString();
						}
					}),
				],
			},
			b: {
				doc: docB,
				extensions: [
					...baseExtensions,
					EditorView.contentAttributes.of({ "aria-label": "Content After" }),
					EditorView.updateListener.of(viewUpdate => {
						if (viewUpdate.docChanged) {
							docB = viewUpdate.state.doc.toString();
						}
					}),
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
