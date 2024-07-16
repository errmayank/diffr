<script>
	import { Nav } from "$lib/components/nav";
	import { SplitView } from "$lib/components/view";
	import { Footer } from "$lib/components/footer";

	let docA = "";
	let docB = "";
</script>

<Nav />
<SplitView {docA} {docB} />
<Footer />
