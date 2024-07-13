<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";

	import { Nav } from "$lib/components/nav";
</script>

<ModeWatcher defaultMode="dark" />
<Nav />
<slot />
