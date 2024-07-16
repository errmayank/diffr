<script>
	import { version } from "$app/environment";
	import { toggleMode } from "mode-watcher";

	import { DiffrVector, SunVector, MoonVector } from "$lib/components/vectors";
	import { Button } from "$lib/components/button";
</script>

<nav class="flex h-9 w-full items-center justify-between border-b-[1px]">
	<a href="/" class="flex h-full items-center justify-center gap-1.5 px-3">
		<DiffrVector size={16} />
		<span class="mt-1.5 font-mono text-[10px]">v{version}</span>
	</a>

	<Button on:click={toggleMode} variant="ghost" size="icon" class="size-[35px]">
		<SunVector size={16} class="block dark:hidden " />
		<MoonVector size={16} class="hidden dark:block" />
		<span class="sr-only">Toggle theme</span>
	</Button>
</nav>
