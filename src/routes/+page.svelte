<script lang="ts">
	import { Nav } from "$lib/components/nav";
	import { SplitView } from "$lib/components/view";
	import { Toolbar } from "$lib/components/toolbar";
	import type { MergeView } from "@codemirror/merge";

	let docA = "";
	let docB = "";
	let deletions = 0;
	let additions = 0;
	let view: MergeView | null = null;
</script>

<Nav />
<SplitView bind:view bind:docA bind:docB bind:deletions bind:additions />
<Toolbar bind:view bind:docA bind:docB bind:deletions bind:additions />
