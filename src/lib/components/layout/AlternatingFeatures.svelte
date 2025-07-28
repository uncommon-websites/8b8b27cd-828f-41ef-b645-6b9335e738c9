<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Feature = {
		step: number;
		title: string;
		description: string;
		features: string[];
		imageSrc: string;
	};

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();
</script>

<section class="section-px section-py" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="section-mt-sm space-y-16 md:space-y-20 lg:space-y-24">
			{#each features as feature, index}
				<div class={[
					"grid gap-8 md:gap-12 lg:gap-16 items-center",
					"md:grid-cols-2",
					index % 2 === 1 ? "md:grid-flow-col-dense" : ""
				]}>
					<!-- Content -->
					<div class={[
						"space-y-6",
						index % 2 === 1 ? "md:col-start-2" : ""
					]}>
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-headline font-medium">
								{feature.step}
							</div>
							<h3 class="text-title2 text-foreground">{feature.title}</h3>
						</div>
						
						<p class="text-callout text-muted-foreground">
							{feature.description}
						</p>
						
						<ul class="space-y-3">
							{#each feature.features as featureItem}
								<li class="flex items-start gap-3">
									<div class="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
									<span class="text-body text-foreground">{featureItem}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- Image -->
					<div class={[
						"relative overflow-hidden rounded-lg bg-muted",
						index % 2 === 1 ? "md:col-start-1" : ""
					]}>
						<img
							src={feature.imageSrc}
							alt={feature.title}
							class="w-full h-auto aspect-video object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!--
@component
An alternating features section that displays a step-by-step process with alternating image/content layout.
Each feature alternates between image-left/content-right and content-left/image-right layout.

Usage:
```html
<AlternatingFeatures
  title="How it works"
  subtitle="Our step-by-step process"
  features={[
    {
      step: 1,
      title: "Step title",
      description: "Step description",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      imageSrc: "/path/to/image.jpg"
    }
    // more features...
  ]}
/>
```
-->