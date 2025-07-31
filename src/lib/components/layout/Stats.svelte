<script lang="ts">
	// Types
	// Simple SVG icons to replace lucide imports

	type StatItem = {
		value: string;
		description: string;
		icon: string;
	};

	// Props
	const {
		stats = [
			{
				value: "3 mins",
				description: "to set up your network",
				icon: "clock"
			},
			{
				value: "2.5m",
				description: "devices connected",
				icon: "laptop"
			},
			{
				value: "10K+",
				description: "companies running Tailscale",
				icon: "building"
			}
		],
		class: classes = ""
	}: { stats?: StatItem[]; class?: string } = $props();
</script>

<section class="w-full py-16 md:py-24 {classes}">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
			{#each stats as stat}
				<div class="flex flex-col items-center text-center md:items-center">
					{#if stat.icon === "clock"}
						<svg
							class="text-primary-700 mb-4 h-8 w-8 opacity-80"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<circle cx="12" cy="12" r="10" />
							<polyline points="12,6 12,12 16,14" />
						</svg>
					{:else if stat.icon === "laptop"}
						<svg
							class="text-primary-700 mb-4 h-8 w-8 opacity-80"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
							/>
						</svg>
					{:else if stat.icon === "building"}
						<svg
							class="text-primary-700 mb-4 h-8 w-8 opacity-80"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
							<path d="M6 12h4h4" />
							<path d="M6 20h4h4" />
							<path d="M6 16h4h4" />
							<path d="M6 8h4h4" />
						</svg>
					{/if}
					<span class="text-title1 mb-2 text-gray-900 dark:text-gray-50">{stat.value}</span>
					<span class="text-body text-gray-600 dark:text-gray-300">{stat.description}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
