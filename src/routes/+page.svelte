<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
	title="Better referrals. Less chasing."
	subtitle="Get introductions that actually turn into business."
	imageSrc="/generated/image-a-diverse-group-of-business-professional.webp"
	centered={false}
/>

<Features
	title="How it works"
	subtitle="AI-powered referral networking in four simple steps"
	features={[
		{
			title: "Make a discovery call",
			description: "Quick 5-minute conversation to share your ideal referral partner criteria with no preparation needed."
		},
		{
			title: "Smart matching",
			description: "AI analyzes your business needs and goals to find complementary businesses with highest mutual benefit."
		},
		{
			title: "Review and confirm connections",
			description: "Review profiles of potential referral partners and choose your connections with double opt-in system."
		},
		{
			title: "Personalized profile",
			description: "Bruce crafts your professional bio from conversation and uses it to personalize warm introductions."
		}
	]}
/>

<Summary
	title="What we do"
	text="Bruce uses AI-powered matching to connect business professionals with perfect referral partners. We automate warm introductions through voice-first conversations, helping you build high-quality referral networks 10x faster than cold outreach."
/>

<Features
	title="How Bruce works"
	subtitle="AI-powered features that transform your referral networking"
	features={[
		{
			title: "AI-powered compatibility matching",
			description:
				"Our proprietary AI analyzes business needs and goals to identify perfect referral partners with percentage compatibility scores."
		},
		{
			title: "Voice-first discovery calls",
			description:
				"Complete 5-minute discovery calls with zero preparation while our AI crafts your professional profile from natural conversation."
		},
		{
			title: "Double opt-in referral system",
			description:
				"Ensure mutual interest and consent with our secure double opt-in system that protects both parties in every introduction."
		},
		{
			title: "Automated warm introductions",
			description:
				"Skip cold outreach entirely with AI-generated personalized introductions that create meaningful professional connections."
		},
		{
			title: "Business compatibility analysis",
			description:
				"Advanced algorithms assess complementary business relationships and identify mutual referral opportunities within your network."
		},
		{
			title: "10x faster networking results",
			description:
				"Build high-quality referral networks in minutes instead of months through intelligent matching and automated relationship building."
		}
	]}
/>

<CallToAction />
