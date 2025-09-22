<!--
@component
A FAQ section component with smooth accordion interactions and accessibility features.

Usage:
```html
<FAQ
  title="Frequently asked questions"
  subtitle="Everything you need to know about Bruce"
  faqs={[
    {
      question: "How does Bruce work?",
      answer: "Bruce uses AI-powered matching to connect you with perfect referral partners through voice-first conversations."
    }
  ]}
/>
```

Props:
- `title`: The main heading text (string)
- `subtitle`: Secondary heading text (string)
- `faqs`: Array of FAQ objects with question and answer properties
-->

<script lang="ts">
	// Simple chevron SVG component
	const ChevronDownIcon = () => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type FAQ = {
		question: string;
		answer: string;
	};

	// Props
	const {
		title = "Frequently asked questions",
		subtitle = "Everything you need to know about Bruce",
		faqs = [],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		faqs?: FAQ[];
	} = $props();

	// State
	let openItems = $state<Set<number>>(new Set());

	// Functions
	function toggleItem(index: number) {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(index)) {
			newOpenItems.delete(index);
		} else {
			newOpenItems.add(index);
		}
		openItems = newOpenItems;
	}

	function handleKeydown(event: KeyboardEvent, index: number) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggleItem(index);
		}
	}
</script>

<section class="section-px section-py" {...rest}>
	<div class="container mx-auto">
		<div class="text-center">
			<SectionHeader {title} {subtitle} />
		</div>
		
		<div class="max-w-3xl mx-auto">
			{#each faqs as faq, index}
				{@const isOpen = openItems.has(index)}
				<div class="border-border border-b last:border-b-0">
					<button
						class={[
							"flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200",
							"hover:text-emphasis focus:outline-none"
						]}
						onclick={() => toggleItem(index)}
						onkeydown={(e) => handleKeydown(e, index)}
						aria-expanded={isOpen}
						aria-controls="faq-answer-{index}"
					>
						<h3 class="text-headline font-medium">{faq.question}</h3>
						<div
							class={[
								"text-emphasis-dim size-5 flex-shrink-0 transition-transform duration-200",
								isOpen ? "rotate-180" : ""
							]}
						>
							{@html ChevronDownIcon()}
						</div>
					</button>
					
					<div
						id="faq-answer-{index}"
						class={[
							"overflow-hidden transition-all duration-300 ease-in-out",
							isOpen ? "max-h-screen pb-6" : "max-h-0"
						]}
						aria-hidden={!isOpen}
					>
						<div class="text-emphasis-low text-body pr-9">
							{faq.answer}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>