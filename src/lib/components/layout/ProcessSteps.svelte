<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Feature = {
		step: number;
		title: string;
		description: string;
		features: string[];
		visualization?: 'phone' | 'matching' | 'review' | 'profile';
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

<section class="section-px section-py" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="section-mt-sm">
			<div class="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
				<!-- Steps Column -->
				<div class="space-y-12 md:space-y-16">
					{#each features as feature}
						<div class="space-y-6 h-80 flex flex-col justify-center p-6">
							<div class="flex items-center gap-4">
								<div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-muted-foreground font-medium text-lg bg-transparent">
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
										<div class="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
										<span class="text-body text-foreground">{featureItem}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
				
				<!-- Visualizations Column -->
				<div class="space-y-12 md:space-y-16">
					{#each features as feature}
						<div class="relative overflow-hidden rounded-lg border border-border bg-card h-80 flex items-center justify-center p-6">
						{#if feature.visualization === 'phone'}
							<div class="w-full h-80 flex items-center justify-center">
								<div class="w-full max-w-sm">
									<div class="text-center mb-6">
										<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
												<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
											</svg>
										</div>
										<h4 class="text-headline text-foreground">Discovery call</h4>
									</div>
									<div class="space-y-4">
										<div class="flex items-center justify-between p-4 bg-muted rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
												<span class="text-body text-foreground">Call in progress</span>
											</div>
											<span class="text-body font-medium text-primary">03:31</span>
										</div>
										<div class="p-4 bg-card rounded-lg border border-border">
											<div class="text-caption text-muted-foreground mb-2">Bruce is asking:</div>
											<div class="text-body text-foreground">"What type of clients do you typically work with?"</div>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'matching'}
							<div class="w-full h-80 flex items-center justify-center">
								<div class="w-full max-w-sm">
									<div class="text-center mb-6">
										<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
											</svg>
										</div>
										<h4 class="text-headline text-foreground">AI matching</h4>
									</div>
									<div class="space-y-3">
										<div class="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-3 h-3 bg-primary rounded-full"></div>
												<span class="text-body text-foreground">Real estate agent</span>
											</div>
											<span class="text-body font-medium text-primary">98%</span>
										</div>
										<div class="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-3 h-3 bg-secondary rounded-full"></div>
												<span class="text-body text-foreground">Financial advisor</span>
											</div>
											<span class="text-body font-medium text-muted-foreground">94%</span>
										</div>
										<div class="flex items-center justify-between p-4 bg-muted rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-3 h-3 bg-muted-foreground rounded-full"></div>
												<span class="text-body text-muted-foreground">Marketing agency</span>
											</div>
											<span class="text-body font-medium text-muted-foreground">87%</span>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'review'}
							<div class="w-full h-80 flex items-center justify-center">
								<div class="w-full max-w-sm">
									<div class="text-center mb-6">
										<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
											</svg>
										</div>
										<h4 class="text-headline text-foreground">Review matches</h4>
									</div>
									<div class="space-y-4">
										<div class="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
													<span class="text-caption font-medium text-muted-foreground">SC</span>
												</div>
												<div>
													<div class="text-body font-medium text-foreground">Sarah Chen</div>
													<div class="text-caption text-muted-foreground">Real estate agent</div>
												</div>
											</div>
											<div class="flex gap-2">
												<button class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
													<svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
													</svg>
												</button>
												<button class="w-8 h-8 bg-muted rounded-full flex items-center justify-center border border-border">
													<svg class="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
													</svg>
												</button>
											</div>
										</div>
										<div class="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
											<div class="flex items-center gap-3">
												<div class="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
													<span class="text-caption font-medium text-muted-foreground">MR</span>
												</div>
												<div>
													<div class="text-body font-medium text-foreground">Mike Rodriguez</div>
													<div class="text-caption text-muted-foreground">Financial advisor</div>
												</div>
											</div>
											<div class="flex gap-2">
												<button class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
													<svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
													</svg>
												</button>
												<button class="w-8 h-8 bg-muted rounded-full flex items-center justify-center border border-border">
													<svg class="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'profile'}
							<div class="w-full h-80 flex items-center justify-center">
								<div class="w-full max-w-sm">
									<div class="text-center mb-6">
										<div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
											<span class="text-title3 font-medium text-primary">JD</span>
										</div>
										<h4 class="text-headline text-foreground">John Doe</h4>
										<p class="text-caption text-muted-foreground">Business consultant</p>
									</div>
									<div class="text-caption text-muted-foreground mb-6 leading-relaxed text-center">
										"Experienced business consultant specializing in growth strategies for small businesses. Passionate about helping entrepreneurs scale their operations..."
									</div>
									<div class="flex flex-wrap gap-2 justify-center">
										<span class="px-3 py-1 bg-primary/10 text-primary text-caption rounded-full border border-primary/20">Strategy</span>
										<span class="px-3 py-1 bg-secondary/50 text-secondary-foreground text-caption rounded-full border border-secondary">Growth</span>
										<span class="px-3 py-1 bg-muted text-muted-foreground text-caption rounded-full border border-border">SMB</span>
									</div>
								</div>
							</div>
						{/if}
						</div>
					{/each}
				</div>
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