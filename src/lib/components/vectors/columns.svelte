<script lang="ts">
	export let size: number;
	export let fill = "currentColor";
</script>

<svg
	width={`${size}px`}
	height={`${size}px`}
	class={$$props["class"]}
	viewBox="0 0 24 24"
	fill="none"
	stroke={fill}
	stroke-width="2.4"
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect width="18" height="18" x="3" y="3" rx="2" />
	<path d="M12 3v18" />
</svg>
