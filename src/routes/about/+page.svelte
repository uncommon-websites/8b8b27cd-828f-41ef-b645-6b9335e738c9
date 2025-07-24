<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Quality over quantity",
			description: "Every referral connection is carefully matched and verified to ensure mutual benefit and lasting professional relationships."
		},
		{
			title: "Voice-first connections",
			description: "Personal, human conversations drive meaningful partnerships. Our 5-minute discovery calls create authentic connections without the cold outreach."
		},
		{
			title: "Smarter referrals",
			description: "AI-powered matching eliminates guesswork by analyzing business compatibility and referral potential before introductions are made."
		}
	];
</script>

<SecondaryHero
	title="Building meaningful business relationships"
	subtitle="through AI-powered referral matching"
	imageSrc="/mockups/dark-screen-1753323009154.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Business professionals in service industries spend over 15 hours a week on cold outreach. The hit rate is low, the conversations feel transactional, and meaningful referral partnerships are tough to find in the noise. It's frustrating, inefficient, and often unsustainable.",
		"Bruce replaces guesswork with smart connection. Our AI scans for business compatibility, industry alignment, and referral likelihood—then delivers warm introductions between you and trusted professionals who actually want to talk. It's all facilitated through quick, voice-led discovery calls, so you can get matched without preparing a pitch or sending another follow-up email.",
		"You build a referral pipeline 10x faster than with traditional methods. Instead of reaching out cold and hoping something sticks, you connect with people who are a natural fit—because Bruce did the matching for you. No chasing. No awkward small talk. Just quality connections designed to grow your business."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and investors sections removed as no actual team members or investors provided in company context -->

<!-- CTA Section -->
<CallToAction
	title="Ready to build your referral network?"
	subtitle="Stop cold outreach. Start warm connections."
	description="Join professionals who've replaced 15+ hours of weekly cold outreach with Bruce's AI-powered referral matching. Get quality introductions that actually convert."
/>
