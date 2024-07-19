<script>
	import { Nav } from "$lib/components/nav";
	import { SplitView } from "$lib/components/view";
	import { Toolbar } from "$lib/components/toolbar";

	let docA = "";
	let docB = "";
	let deletions = 0;
	let additions = 0;
</script>

<Nav />
<SplitView bind:docA bind:docB bind:deletions bind:additions />
<Toolbar bind:docA bind:docB bind:deletions bind:additions />
