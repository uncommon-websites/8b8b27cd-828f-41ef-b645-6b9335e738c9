<script lang="ts">
	// Types
	import type { PageData } from "./$types";

	// Components
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import IconUsers from "~icons/lucide/users";
	import IconClipboard from "~icons/lucide/clipboard";
	import IconBarChart from "~icons/lucide/bar-chart";
	import IconShield from "~icons/lucide/shield";
	import IconTrendingUp from "~icons/lucide/trending-up";
	import IconShieldAlert from "~icons/lucide/shield-alert";
	import IconPresentation from "~icons/lucide/presentation";
	import IconFileText from "~icons/lucide/file-text";
	import IconCode from "~icons/lucide/code";
	import IconCpu from "~icons/lucide/cpu";
	import IconUserGroup from "~icons/lucide/user-group";
	import IconBarChart3 from "~icons/lucide/bar-chart-3";
	import IconGraduationCap from "~icons/lucide/graduation-cap";
	import IconClipboardCheck from "~icons/lucide/clipboard-check";
	import IconPieChart from "~icons/lucide/pie-chart";
	import IconSettings from "~icons/lucide/settings";

	// Props
	const { data }: { data: PageData } = $props();

	// Icon mapping
	const iconMap: Record<string, any> = {
		"users": IconUsers,
		"clipboard-list": IconClipboardList,
		"chart-bar": IconBarChart,
		"shield-check": IconShieldCheck,
		"chart-line": IconTrendingUp,
		"shield-alert": IconShieldAlert,
		"presentation-chart": IconPresentation,
		"document-check": IconFileCheck,
		"code-bracket": IconCode,
		"cpu-chip": IconCpu,
		"user-group": IconUserGroup,
		"chart-bar-square": IconBarChart3,
		"academic-cap": IconGraduationCap,
		"clipboard-document-check": IconClipboardCheck,
		"chart-pie": IconPieChart,
		"cog": IconSettings
	};

	// Transform features to include proper icon components
	let transformedFeatures = $derived(
		data?.features?.items?.map(feature => ({
			...feature,
			icon: iconMap[feature.icon] || IconUsers
		})) || []
	);

	// Transform testimonials to match expected format
	let transformedTestimonials = $derived(
		data?.testimonials?.map(testimonial => ({
			name: testimonial.author,
			position: testimonial.role,
			company: "", // Split role if needed
			quote: testimonial.quote,
			image: testimonial.imageSrc
		})) || []
	);
</script>

{#if data?.hero}
	<Hero
		title={data.hero.title}
		subtitle={data.hero.subtitle}
		imageSrc={data.hero.imageSrc}
		callsToAction={data.hero.callsToAction}
	/>
{/if}

{#if data?.summary}
	<Summary title={data.summary.title} text={data.summary.text} />
{/if}

{#if transformedTestimonials.length > 0}
	<Testimonials testimonials={transformedTestimonials} />
{/if}

{#if data?.features && transformedFeatures.length > 0}
	<Features
		title={data.features.title}
		subtitle={data.features.subtitle}
		features={transformedFeatures}
	/>
{/if}

{#if data?.cta}
	<CallToAction
		title={data.cta.title}
		subtitle={data.cta.subtitle}
		description={data.cta.description}
		callsToAction={data.cta.callsToAction}
	/>
{/if}