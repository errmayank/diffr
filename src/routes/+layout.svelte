<script lang="ts">
	import "$lib/styles/app.css";
	import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher defaultMode="dark" />
<slot />
