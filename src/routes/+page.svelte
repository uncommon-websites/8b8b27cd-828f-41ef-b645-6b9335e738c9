<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import AlternatingFeatures from "$lib/components/layout/AlternatingFeatures.svelte";
</script>

<Hero
	title="Better referrals. Less chasing."
	subtitle="Get introductions that actually turn into business."
	imageSrc="/generated/image-a-diverse-group-of-business-professional.webp"
	centered={false}
/>

<AlternatingFeatures
	title="How it works"
	subtitle="AI-powered referral networking in four simple steps"
	features={[
		{
			step: 1,
			title: "Make a discovery call",
			description: "Quick chat to learn about your business",
			features: [
				"Quick 5-minute conversation",
				"Share your ideal referral partner criteria",
				"No preparation needed"
			],
			visualization: "phone"
		},
		{
			step: 2,
			title: "Smart matching",
			description: "Find your ideal referral partner for your business",
			features: [
				"AI analyzes your business needs and goals",
				"Finds complementary businesses in your network",
				"Prioritizes matches with highest mutual benefit"
			],
			visualization: "matching"
		},
		{
			step: 3,
			title: "Review and confirm connections",
			description:
				"You'll get a list of connections that you'll review and next steps on how to get connected",
			features: [
				"Review profiles of potential referral partners",
				"Choose which connections interest you most",
				"Double opt-in ensures mutual interest"
			],
			visualization: "review"
		},
		{
			step: 4,
			title: "Personalized profile",
			description:
				"Bruce will create a personalized professional profile for you based on the information you provide and we'll use this to introduce you to potential referrals",
			features: [
				"Bruce crafts your bio from your conversation",
				"Use AI to refine your profile",
				"Bruce uses your profile to personalize introductions"
			],
			visualization: "profile"
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
