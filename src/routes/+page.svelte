<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import ProcessSteps from "$lib/components/layout/ProcessSteps.svelte";
</script>

<Hero
	title="Better referrals. Less chasing."
	subtitle="Bruce uses AI-powered matching to connect you with perfect referral partners through voice-first conversations."
	imageSrc="/generated/image-a-diverse-group-of-business-professional.webp"
	centered={true}
/>

<Summary
	title="What we do"
	text="Bruce uses AI-powered matching to connect business professionals with perfect referral partners. We automate warm introductions through voice-first conversations, helping you build high-quality referral networks 10x faster than cold outreach."
/>

<ProcessSteps
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

<CallToAction />
