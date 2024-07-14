<script>
	import { version } from "$app/environment";

	import { DiffrVector, GitHubVector } from "$lib/components/vectors";
</script>

<nav class="flex h-8 w-full items-center justify-between border-b-[1px] border-foreground/20">
	<a
		href="/"
		class="flex h-full items-center justify-center gap-1.5 border-x-[1px] border-foreground/20 px-3"
	>
		<DiffrVector size={16} />
		<span class="mt-1.5 font-mono text-[10px]">v{version}</span>
	</a>
	<a
		href="https://github.com/errmayank/diffr"
		target="_blank"
		class="group flex h-full items-center justify-center border-x-[1px] border-foreground/20 px-3"
	>
		<GitHubVector size={16} class="group-hover:fill-white" />
	</a>
</nav>
