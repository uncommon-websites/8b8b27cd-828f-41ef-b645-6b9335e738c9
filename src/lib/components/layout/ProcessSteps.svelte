<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Icons
	import IconPhone from "~icons/lucide/phone";
	import IconBrain from "~icons/lucide/brain";
	import IconCheckCircle from "~icons/lucide/check-circle";
	import IconCheck from "~icons/lucide/check";
	import IconX from "~icons/lucide/x";

	// Types
	type Feature = {
		step: number;
		title: string;
		description: string;
		features: string[];
		visualization?: "phone" | "matching" | "review" | "profile";
	};

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();

	// Clean, modern visualizations using design system
</script>

<section class="section-px section-py mx-auto max-w-6xl" {...rest}>
	<div class="">
		<SectionHeader {title} {subtitle} />

		<div class="section-mt-sm">
			<div class="grid gap-16">
				<!-- Steps Column -->
				{#each features as feature}
					<div class="grid content-center items-center gap-32 md:grid-cols-2">
						<div class="flex flex-col justify-center space-y-6">
							<div class="grid items-center gap-8">
								<div
									class="border-border text-muted-foreground flex h-12 w-12 items-center justify-center rounded-full border-2 bg-transparent text-lg font-medium"
								>
									<span>{feature.step}</span>
								</div>
								<h3 class="text-title2 text-foreground">{feature.title}</h3>
							</div>

							<p class="text-callout text-muted-foreground">
								{feature.description}
							</p>

							<ul class="space-y-3">
								{#each feature.features as featureItem}
									<li class="flex items-start gap-3">
										<div class="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
										<span class="text-body text-foreground">{featureItem}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div
							class="border-border bg-card relative grid h-80 place-items-center overflow-hidden rounded-lg border p-6"
						>
							{#if feature.visualization === "phone"}
								<div class="flex w-full items-center justify-center">
									<div class="w-full max-w-sm">
										<div class="mb-6 text-center">
											<div
												class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
											>
												<IconPhone class="text-primary h-8 w-8" />
											</div>
											<h4 class="text-headline text-foreground">Bruce</h4>
										</div>
										<div class="space-y-4">
											<div
												class="border-border flex items-center justify-between rounded-lg border bg-white p-4"
											>
												<div class="flex items-center gap-3">
													<div class="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
													<span class="text-body text-foreground">Call in progress</span>
												</div>
												<span class="text-body text-primary font-medium">03:31</span>
											</div>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "matching"}
								<div class="w-full max-w-sm">
									<div class="mb-6 text-center">
										<div
											class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
										>
											<IconBrain class="text-primary h-8 w-8" />
										</div>
										<h4 class="text-headline text-foreground">AI matching</h4>
									</div>
									<div class="space-y-3">
										<div
											class="bg-card border-border flex items-center justify-between rounded-lg border p-4"
										>
											<div class="flex items-center gap-3">
												<div class="bg-primary h-3 w-3 rounded-full"></div>
												<span class="text-body text-foreground">Real estate agent</span>
											</div>
											<span class="text-body text-primary font-medium">98%</span>
										</div>
										<div
											class="bg-card border-border flex items-center justify-between rounded-lg border p-4"
										>
											<div class="flex items-center gap-3">
												<div class="bg-secondary h-3 w-3 rounded-full"></div>
												<span class="text-body text-foreground">Financial advisor</span>
											</div>
											<span class="text-body text-muted-foreground font-medium">94%</span>
										</div>
										<div
											class="border-border flex items-center justify-between rounded-lg border bg-white p-4"
										>
											<div class="flex items-center gap-3">
												<div class="bg-primary-foreground h-3 w-3 rounded-full"></div>
												<span class="text-body text-muted-foreground">Marketing agency</span>
											</div>
											<span class="text-body text-muted-foreground font-medium">87%</span>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "review"}
								<div class="w-full max-w-sm">
									<div class="mb-6 text-center">
										<div
											class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
										>
											<IconCheckCircle class="text-primary h-8 w-8" />
										</div>
										<h4 class="text-headline text-foreground">Review matches</h4>
									</div>
									<div class="space-y-4">
										<div
											class="border-border flex items-center justify-between rounded-lg border bg-white p-4"
										>
											<div class="flex items-center gap-3">
												<div
													class="bg-card flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
												>
													<img
														src="/uploaded/1753968011905-kfzp7j1.png"
														alt="Sarah Chen"
														class="bottom-10 h-full w-full object-cover object-top"
													/>
												</div>
												<div>
													<div class="text-body text-foreground font-medium">Sarah Chen</div>
													<div class="text-caption text-muted-foreground">Real estate agent</div>
												</div>
											</div>
											<div class="flex gap-2">
												<button
													class="bg-primary flex h-8 w-8 items-center justify-center rounded-full"
												>
													<IconCheck class="text-primary-foreground h-4 w-4" />
												</button>
												<button
													class="border-border flex h-8 w-8 items-center justify-center rounded-full border bg-white"
												>
													<IconX class="text-muted-foreground h-4 w-4" />
												</button>
											</div>
										</div>
										<div
											class="border-border flex items-center justify-between rounded-lg border bg-white p-4"
										>
											<div class="flex items-center gap-3">
												<div
													class="bg-card flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
												>
													<img
														src="/generated/image-a-professional-business-consultant-heads.webp"
														alt="Mike Rodriguez"
														class="image-top h-full w-full object-cover object-top"
													/>
												</div>
												<div>
													<div class="text-body text-foreground font-medium">Mike Rodriguez</div>
													<div class="text-caption text-muted-foreground">Financial advisor</div>
												</div>
											</div>
											<div class="flex gap-2">
												<button
													class="bg-primary flex h-8 w-8 items-center justify-center rounded-full"
												>
													<IconCheck class="text-primary-foreground h-4 w-4" />
												</button>
												<button
													class="border-border flex h-8 w-8 items-center justify-center rounded-full border bg-white"
												>
													<IconX class="text-muted-foreground h-4 w-4" />
												</button>
											</div>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "profile"}
								<div class="w-full max-w-sm">
									<div class="border-border rounded-lg border bg-white p-6">
										<div class="mb-6 flex items-center gap-4">
											<div
												class="bg-primary/10 flex h-16 w-16 flex-shrink-0 overflow-hidden rounded-full"
											>
												<img
													src="/generated/image-a-professional-business-man-headshot-in-.webp"
													alt="John Doe"
													class="h-full w-full object-cover"
												/>
											</div>
											<div class="flex-1">
												<h4 class="text-headline text-foreground">John Doe</h4>
												<p class="text-caption text-muted-foreground">Business consultant</p>
											</div>
										</div>
										<div class="text-caption text-muted-foreground mb-6 text-left leading-relaxed">
											Experienced business consultant specializing in growth strategies for small
											businesses.
										</div>
										<div class="flex flex-wrap justify-start gap-2">
											<span
												class="text-muted-foreground text-caption border-border rounded-full border bg-white px-3 py-1"
												>Strategy</span
											>
											<span
												class="text-muted-foreground text-caption border-border rounded-full border bg-white px-3 py-1"
												>Growth</span
											>
											<span
												class="text-muted-foreground text-caption border-border rounded-full border bg-white px-3 py-1"
												>SMB</span
											>
										</div>
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!--
@component
A process steps section that displays a step-by-step workflow with visual demonstrations.
Shows numbered steps alongside interactive visualizations for each step.

Usage:
```html
<ProcessSteps
  title="How it works"
  subtitle="Our step-by-step process"
  features={[
    {
      step: 1,
      title: "Step title",
      description: "Step description",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      visualization: "phone" | "matching" | "review" | "profile"
    }
    // more features...
  ]}
/>
```
-->
