<script>
	import { Nav } from "$lib/components/nav";
	import { SplitView } from "$lib/components/view";
	import { Footer } from "$lib/components/footer";

	let docA = "";
	let docB = "";
	let deletions = 0;
	let additions = 0;
</script>

<Nav />
<SplitView {docA} {docB} bind:deletions bind:additions />
<Footer bind:deletions bind:additions />
