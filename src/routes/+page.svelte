<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import ProcessSteps from "$lib/components/layout/ProcessSteps.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
</script>

<CustomerCardHero
	title="Better referrals. Less chasing."
	subtitle="Bruce uses AI-powered matching to connect you with perfect referral partners through voice-first conversations."
	centered={true}
	customers={[
		{
			name: "Marcus Thompson",
			position: "Insurance Agent",
			imageSrc: "/uploaded/1755544315306-58d3rsq.webp"
		},
		{
			name: "Mei Chen",
			position: "Financial Advisor",
			imageSrc: "/uploaded/1755544033159-wysiiy3.webp"
		},
		{
			name: "Maya Patel",
			position: "Expert Carpenter",
			imageSrc: "/uploaded/image-3.png"
		},
		{
			name: "Victor Ramirez",
			position: "Landscaping Specialist",
			imageSrc: "/uploaded/image-4.png"
		},
		{
			name: "Daniel Kim",
			position: "Construction Foreman",
			imageSrc: "/uploaded/image-5.png"
		}
	]}
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

<Testimonials
	testimonials={[
		{
			name: "Sergio Michel",
			position: "Residential Mortgages",
			company: "PMG Loans",
			quote: "Wow, this is a game changer for networking. I'm so excited about the possibilities!",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=66d73a21e4b09908bf432097"
		},
		{
			name: "Chris Brooke",
			position: "Property & Casualty Insurance",
			company: "Farmer's Insurance",
			quote: "Impressive. It's just like talking to a Human!",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=67059983e4b0a4e5a6006c9b"
		},
		{
			name: "Rajeev Krishnan",
			position: "Digital Marketing",
			company: "TitanX Marketing",
			quote: "Exciting and powerful. This is going to generate so many leads and referrals!",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=67d10aaee4b0340086d44106"
		},
		{
			name: "Ivan Jue",
			position: "Life and Disability Insurance",
			company: "World Financial Group. Inc.",
			quote: "This solves one of the biggest pains in networking.",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=641a2477e4b0c2b55126120f"
		},
		{
			name: "Frank Dias",
			position: "Mobile Notary",
			company: "Silicon Valley Signings",
			quote: "This is so cool! This makes networking effortless!",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=63a6431e4303fe0001e92a2c"
		},
		{
			name: "Shy Sayno",
			position: "Business Consultant",
			company: "NorthStar Strategic Partners, Inc",
			quote: "Wow, I love it!",
			image: "https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=66312f49e4b0d3ca42eb3c3d"
		}
	]}
/>

<CallToAction />
