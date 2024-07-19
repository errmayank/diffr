<script>
	import { version } from "$app/environment";
	import { toggleMode } from "mode-watcher";

	import { DiffrVector, SunVector, MoonVector, GitHubVector } from "$lib/components/vectors";
	import { Button } from "$lib/components/button";
</script>

<nav class="flex h-9 w-full items-center justify-between border-b px-3">
	<a
		href="/"
		class="flex h-[28px] items-center justify-center gap-1.5 rounded-md px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
	>
		<DiffrVector size={16} />
		<span class="mt-1.5 font-mono text-[10px]">v{version}</span>
	</a>

	<div class="flex items-center justify-center gap-1">
		<a
			href="https://github.com/errmayank/diffr"
			target="_blank"
			class="flex size-[28px] items-center justify-center rounded-md ring-offset-background transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
		>
			<GitHubVector size={16} />
		</a>
		<Button on:click={toggleMode} variant="ghost" size="icon" class="size-[28px]">
			<SunVector size={16} class="block dark:hidden " />
			<MoonVector size={16} class="hidden dark:block" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</nav>
