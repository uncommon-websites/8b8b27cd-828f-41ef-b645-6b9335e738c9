<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

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
												<svg class="text-primary h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
													<path
														d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
													/>
												</svg>
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
											<svg
												class="text-primary h-8 w-8"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
												/>
											</svg>
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
											<svg
												class="text-primary h-8 w-8"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
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
													<svg
														class="text-primary-foreground h-4 w-4"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fill-rule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clip-rule="evenodd"
														/>
													</svg>
												</button>
												<button
													class="border-border flex h-8 w-8 items-center justify-center rounded-full border bg-white"
												>
													<svg
														class="text-muted-foreground h-4 w-4"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fill-rule="evenodd"
															d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
															clip-rule="evenodd"
														/>
													</svg>
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
													<svg
														class="text-primary-foreground h-4 w-4"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fill-rule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clip-rule="evenodd"
														/>
													</svg>
												</button>
												<button
													class="border-border flex h-8 w-8 items-center justify-center rounded-full border bg-white"
												>
													<svg
														class="text-muted-foreground h-4 w-4"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fill-rule="evenodd"
															d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
															clip-rule="evenodd"
														/>
													</svg>
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
										<div
											class="text-caption text-muted-foreground mb-6 text-center leading-relaxed"
										>
											"Experienced business consultant specializing in growth strategies for small
											businesses."
										</div>
										<div class="flex flex-wrap justify-center gap-2">
											<span
												class="bg-primary/10 text-primary text-caption border-primary/20 rounded-full border px-3 py-1"
												>Strategy</span
											>
											<span
												class="bg-secondary/50 text-secondary-foreground text-caption border-secondary rounded-full border px-3 py-1"
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

				<!-- Visualizations Column -->
				<!-- <div class="space-y-12 md:space-y-16">
					{#each features as feature}
						<div
							class="border-border bg-card relative aspect-square items-center justify-center overflow-hidden rounded-lg border p-6"
						>
							{#if feature.visualization === "phone"}
								<div class="flex h-80 w-full items-center justify-center">
									<div class="w-full max-w-sm">
										<div class="mb-6 text-center">
											<div
												class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
											>
												<svg class="text-primary h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
													<path
														d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
													/>
												</svg>
											</div>
											<h4 class="text-headline text-foreground">Discovery call</h4>
										</div>
										<div class="space-y-4">
											<div
												class="bg-white border-border flex items-center justify-between rounded-lg border p-4"
											>
												<div class="flex items-center gap-3">
													<div class="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
													<span class="text-body text-foreground">Call in progress</span>
												</div>
												<span class="text-body text-primary font-medium">03:31</span>
											</div>
											<div class="bg-card border-border rounded-lg border p-4">
												<div class="text-caption text-muted-foreground mb-2">Bruce is asking:</div>
												<div class="text-body text-foreground">
													"What type of clients do you typically work with?"
												</div>
											</div>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "matching"}
								<div class="flex h-80 w-full items-center justify-center">
									<div class="w-full max-w-sm">
										<div class="mb-6 text-center">
											<div
												class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
											>
												<svg
													class="text-primary h-8 w-8"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
													/>
												</svg>
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
												class="bg-white border-border flex items-center justify-between rounded-lg border p-4"
											>
												<div class="flex items-center gap-3">
													<div class="bg-white-foreground h-3 w-3 rounded-full"></div>
													<span class="text-body text-muted-foreground">Marketing agency</span>
												</div>
												<span class="text-body text-muted-foreground font-medium">87%</span>
											</div>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "review"}
								<div class="flex h-80 w-full items-center justify-center">
									<div class="w-full max-w-sm">
										<div class="mb-6 text-center">
											<div
												class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
											>
												<svg
													class="text-primary h-8 w-8"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</div>
											<h4 class="text-headline text-foreground">Review matches</h4>
										</div>
										<div class="space-y-4">
											<div
												class="bg-card border-border flex items-center justify-between rounded-lg border p-4"
											>
												<div class="flex items-center gap-3">
													<div
														class="bg-white flex h-10 w-10 items-center justify-center rounded-full"
													>
														<span class="text-caption text-muted-foreground font-medium">SC</span>
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
														<svg
															class="text-primary-foreground h-4 w-4"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fill-rule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clip-rule="evenodd"
															/>
														</svg>
													</button>
													<button
														class="bg-white border-border flex h-8 w-8 items-center justify-center rounded-full border"
													>
														<svg
															class="text-muted-foreground h-4 w-4"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fill-rule="evenodd"
																d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
																clip-rule="evenodd"
															/>
														</svg>
													</button>
												</div>
											</div>
											<div
												class="bg-card border-border flex items-center justify-between rounded-lg border p-4"
											>
												<div class="flex items-center gap-3">
													<div
														class="bg-white flex h-10 w-10 items-center justify-center rounded-full"
													>
														<span class="text-caption text-muted-foreground font-medium">MR</span>
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
														<svg
															class="text-primary-foreground h-4 w-4"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fill-rule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clip-rule="evenodd"
															/>
														</svg>
													</button>
													<button
														class="bg-white border-border flex h-8 w-8 items-center justify-center rounded-full border"
													>
														<svg
															class="text-muted-foreground h-4 w-4"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fill-rule="evenodd"
																d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
																clip-rule="evenodd"
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							{:else if feature.visualization === "profile"}
								<div class="flex h-80 w-full items-center justify-center">
									<div class="w-full max-w-sm">
										<div class="mb-6 text-center">
											<div
												class="bg-primary/10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full"
											>
												<span class="text-title3 text-primary font-medium">JD</span>
											</div>
											<h4 class="text-headline text-foreground">John Doe</h4>
											<p class="text-caption text-muted-foreground">Business consultant</p>
										</div>
										<div
											class="text-caption text-muted-foreground mb-6 text-center leading-relaxed"
										>
											"Experienced business consultant specializing in growth strategies for small
											businesses. Passionate about helping entrepreneurs scale their operations..."
										</div>
										<div class="flex flex-wrap justify-center gap-2">
											<span
												class="bg-primary/10 text-primary text-caption border-primary/20 rounded-full border px-3 py-1"
												>Strategy</span
											>
											<span
												class="bg-secondary/50 text-secondary-foreground text-caption border-secondary rounded-full border px-3 py-1"
												>Growth</span
											>
											<span
												class="bg-white text-muted-foreground text-caption border-border rounded-full border px-3 py-1"
												>SMB</span
											>
										</div>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div> -->
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
