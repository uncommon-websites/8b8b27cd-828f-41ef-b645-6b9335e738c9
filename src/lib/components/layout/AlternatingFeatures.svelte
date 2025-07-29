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

	// Visualization components
	function getVisualizationComponent(type: string) {
		switch (type) {
			case 'phone':
				return PhoneVisualization;
			case 'matching':
				return MatchingVisualization;
			case 'review':
				return ReviewVisualization;
			case 'profile':
				return ProfileVisualization;
			default:
				return PhoneVisualization;
		}
	}

	// Phone Call Visualization
	function PhoneVisualization() {
		return `
			<div class="relative w-full h-80 flex items-center justify-center" style="background: linear-gradient(135deg, #E8F5E8 0%, #D4F1D4 100%);">
				<div class="relative">
					<!-- Phone mockup -->
					<div class="w-48 h-80 bg-gray-900 rounded-3xl p-2">
						<div class="w-full h-full bg-black rounded-2xl flex flex-col items-center justify-center text-white">
							<!-- Call interface -->
							<div class="text-center space-y-4">
								<div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
									<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
									</svg>
								</div>
								<div class="text-lg font-medium">Bruce</div>
								<div class="text-sm text-gray-300">03:31</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	// Matching Visualization
	function MatchingVisualization() {
		return `
			<div class="relative w-full h-80 flex items-center justify-center" style="background: linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%);">
				<div class="bg-white rounded-lg p-6 w-80 max-w-full">
					<div class="text-center mb-6">
						<div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
							<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
							</svg>
						</div>
						<h4 class="font-medium text-gray-900">AI Matching</h4>
					</div>
					<div class="space-y-3">
						<div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 bg-green-500 rounded-full"></div>
								<span class="text-sm text-gray-700">Real Estate Agent</span>
							</div>
							<span class="text-sm font-medium text-green-600">98%</span>
						</div>
						<div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
								<span class="text-sm text-gray-700">Financial Advisor</span>
							</div>
							<span class="text-sm font-medium text-blue-600">94%</span>
						</div>
						<div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
								<span class="text-sm text-gray-700">Marketing Agency</span>
							</div>
							<span class="text-sm font-medium text-yellow-600">87%</span>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	// Review Visualization
	function ReviewVisualization() {
		return `
			<div class="relative w-full h-80 flex items-center justify-center" style="background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);">
				<div class="bg-white rounded-lg p-6 w-80 max-w-full">
					<div class="text-center mb-6">
						<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<h4 class="font-medium text-gray-900">Review Matches</h4>
					</div>
					<div class="space-y-4">
						<div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
									<span class="text-xs font-medium text-gray-600">SC</span>
								</div>
								<div>
									<div class="text-sm font-medium text-gray-900">Sarah Chen</div>
									<div class="text-xs text-gray-500">Real Estate Agent</div>
								</div>
							</div>
							<div class="flex gap-2">
								<button class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
									<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
								</button>
								<button class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
									<svg class="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
									</svg>
								</button>
							</div>
						</div>
						<div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
									<span class="text-xs font-medium text-gray-600">MR</span>
								</div>
								<div>
									<div class="text-sm font-medium text-gray-900">Mike Rodriguez</div>
									<div class="text-xs text-gray-500">Financial Advisor</div>
								</div>
							</div>
							<div class="flex gap-2">
								<button class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
									<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
								</button>
								<button class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
									<svg class="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	// Profile Visualization
	function ProfileVisualization() {
		return `
			<div class="relative w-full h-80 flex items-center justify-center" style="background: linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%);">
				<div class="bg-white rounded-lg p-6 w-80 max-w-full">
					<div class="text-center mb-4">
						<div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-lg font-medium text-purple-600">JD</span>
						</div>
						<h4 class="font-medium text-gray-900">John Doe</h4>
						<p class="text-sm text-gray-500">Business Consultant</p>
					</div>
					<div class="text-xs text-gray-600 mb-4 leading-relaxed">
						"Experienced business consultant specializing in growth strategies for small businesses. Passionate about helping entrepreneurs scale their operations..."
					</div>
					<div class="flex flex-wrap gap-2">
						<span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Strategy</span>
						<span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Growth</span>
						<span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">SMB</span>
					</div>
				</div>
			</div>
		`;
	}
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
					
					<!-- Visualization -->
					<div class={[
						"relative overflow-hidden rounded-lg border border-border bg-card",
						index % 2 === 1 ? "md:col-start-1" : ""
					]}>
						{#if feature.visualization === 'phone'}
							<div class="w-full h-80 flex items-center justify-center p-8">
								<div class="w-full max-w-sm">
									<!-- Phone interface mockup -->
									<div class="bg-background rounded-xl border border-border p-6 space-y-6">
										<!-- Header -->
										<div class="text-center">
											<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
												<div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
													<div class="w-2 h-2 bg-primary-foreground rounded-full"></div>
												</div>
											</div>
											<h4 class="text-headline font-medium text-foreground">Discovery Call</h4>
											<p class="text-caption text-muted-foreground">03:31 elapsed</p>
										</div>
										
										<!-- Call status -->
										<div class="space-y-3">
											<div class="flex items-center justify-between p-3 bg-muted rounded-lg">
												<div class="flex items-center gap-3">
													<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
													<span class="text-caption text-foreground">Active conversation</span>
												</div>
											</div>
											
											<!-- Conversation preview -->
											<div class="p-3 bg-card rounded-lg border border-border">
												<div class="text-footnote text-muted-foreground mb-2">Bruce is asking:</div>
												<div class="text-caption text-foreground">"What type of clients do you work with?"</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'matching'}
							<div class="w-full h-80 flex items-center justify-center p-8">
								<div class="w-full max-w-sm">
									<!-- Matching interface mockup -->
									<div class="bg-background rounded-xl border border-border p-6 space-y-6">
										<!-- Header -->
										<div class="text-center">
											<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
												<div class="w-6 h-6 grid grid-cols-2 gap-0.5">
													<div class="w-2.5 h-2.5 bg-primary rounded-sm"></div>
													<div class="w-2.5 h-2.5 bg-primary/60 rounded-sm"></div>
													<div class="w-2.5 h-2.5 bg-primary/60 rounded-sm"></div>
													<div class="w-2.5 h-2.5 bg-primary rounded-sm"></div>
												</div>
											</div>
											<h4 class="text-headline font-medium text-foreground">AI Matching</h4>
										</div>
										
										<!-- Match results -->
										<div class="space-y-3">
											<div class="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
												<div class="flex items-center gap-3">
													<div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
														<div class="w-3 h-3 bg-primary rounded-full"></div>
													</div>
													<span class="text-caption text-foreground">Real Estate Agent</span>
												</div>
												<div class="flex items-center gap-2">
													<div class="w-12 h-2 bg-muted rounded-full overflow-hidden">
														<div class="w-11/12 h-full bg-primary rounded-full"></div>
													</div>
													<span class="text-footnote font-medium text-primary">98%</span>
												</div>
											</div>
											
											<div class="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
												<div class="flex items-center gap-3">
													<div class="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
														<div class="w-3 h-3 bg-secondary rounded-full"></div>
													</div>
													<span class="text-caption text-foreground">Financial Advisor</span>
												</div>
												<div class="flex items-center gap-2">
													<div class="w-12 h-2 bg-muted rounded-full overflow-hidden">
														<div class="w-10/12 h-full bg-secondary rounded-full"></div>
													</div>
													<span class="text-footnote font-medium text-secondary">94%</span>
												</div>
											</div>
											
											<div class="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
												<div class="flex items-center gap-3">
													<div class="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
														<div class="w-3 h-3 bg-muted-foreground rounded-full"></div>
													</div>
													<span class="text-caption text-foreground">Marketing Agency</span>
												</div>
												<div class="flex items-center gap-2">
													<div class="w-12 h-2 bg-muted rounded-full overflow-hidden">
														<div class="w-9/12 h-full bg-muted-foreground rounded-full"></div>
													</div>
													<span class="text-footnote font-medium text-muted-foreground">87%</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'review'}
							<div class="w-full h-80 flex items-center justify-center p-8">
								<div class="w-full max-w-sm">
									<!-- Review interface mockup -->
									<div class="bg-background rounded-xl border border-border p-6 space-y-6">
										<!-- Header -->
										<div class="text-center">
											<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
												<div class="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
													<div class="w-3 h-3 border-2 border-primary-foreground rounded-sm"></div>
												</div>
											</div>
											<h4 class="text-headline font-medium text-foreground">Review Matches</h4>
										</div>
										
										<!-- Match cards -->
										<div class="space-y-3">
											<div class="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
												<div class="flex items-center gap-3">
													<div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
														<span class="text-footnote font-medium text-primary">SC</span>
													</div>
													<div>
														<div class="text-caption font-medium text-foreground">Sarah Chen</div>
														<div class="text-footnote text-muted-foreground">Real Estate Agent</div>
													</div>
												</div>
												<div class="flex gap-2">
													<button class="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
														<div class="w-2 h-2 border border-primary-foreground rounded-sm"></div>
													</button>
													<button class="w-6 h-6 bg-muted rounded-lg flex items-center justify-center">
														<div class="w-2 h-2 bg-muted-foreground rounded-sm"></div>
													</button>
												</div>
											</div>
											
											<div class="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
												<div class="flex items-center gap-3">
													<div class="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
														<span class="text-footnote font-medium text-secondary">MR</span>
													</div>
													<div>
														<div class="text-caption font-medium text-foreground">Mike Rodriguez</div>
														<div class="text-footnote text-muted-foreground">Financial Advisor</div>
													</div>
												</div>
												<div class="flex gap-2">
													<button class="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
														<div class="w-2 h-2 border border-primary-foreground rounded-sm"></div>
													</button>
													<button class="w-6 h-6 bg-muted rounded-lg flex items-center justify-center">
														<div class="w-2 h-2 bg-muted-foreground rounded-sm"></div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if feature.visualization === 'profile'}
							<div class="w-full h-80 flex items-center justify-center p-8">
								<div class="w-full max-w-sm">
									<!-- Profile interface mockup -->
									<div class="bg-background rounded-xl border border-border p-6 space-y-6">
										<!-- Profile header -->
										<div class="text-center">
											<div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
												<span class="text-headline font-medium text-primary">JD</span>
											</div>
											<h4 class="text-headline font-medium text-foreground">John Doe</h4>
											<p class="text-caption text-muted-foreground">Business Consultant</p>
										</div>
										
										<!-- Profile description -->
										<div class="p-3 bg-card rounded-lg border border-border">
											<div class="text-footnote text-muted-foreground leading-relaxed">
												"Experienced business consultant specializing in growth strategies for small businesses..."
											</div>
										</div>
										
										<!-- Tags -->
										<div class="flex flex-wrap gap-2 justify-center">
											<span class="px-3 py-1 bg-primary/10 text-primary text-footnote rounded-full border border-primary/20">Strategy</span>
											<span class="px-3 py-1 bg-secondary/10 text-secondary text-footnote rounded-full border border-secondary/20">Growth</span>
											<span class="px-3 py-1 bg-muted text-muted-foreground text-footnote rounded-full border border-border">SMB</span>
										</div>
									</div>
								</div>
							</div>
						{/if}
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