<script>
	import { Footer } from "$lib/components/footer";
	import { MergeView } from "$lib/components/merge-view";

	let docA = "";
	let docB = "";
</script>

<div class="h-[calc(100dvh-2.25rem-1.75rem)]">
	<MergeView {docA} {docB} />
	<Footer />
</div>
