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
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="m5 12 7-7 7 7" />
	<path d="M12 19V5" />
</svg>
