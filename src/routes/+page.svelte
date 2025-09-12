<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import ProcessSteps from "$lib/components/layout/ProcessSteps.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import FAQ from "$lib/components/layout/FAQ.svelte";
</script>

<CustomerCardHero
	title="Better referrals. Less chasing."
	subtitle="Bruce uses AI-powered matching to connect you with perfect referral partners through voice-first conversations."
	centered={true}
	customers={[
		{
			name: "Ethan Brooks",
			position: "Real Estate Agent",
			imageSrc: "/uploaded/1755543865892-mfb960d.webp"
		},
		{
			name: "Mei Chen",
			position: "Financial Advisor",
			imageSrc: "/uploaded/1755544033159-wysiiy3.webp"
		},
		{
			name: "Marcus Thompson",
			position: "Insurance Agent",
			imageSrc: "/uploaded/1755544315306-58d3rsq.webp"
		},
		{
			name: "Sofia Martinez",
			position: "Home Services Pro (Contractor)",
			imageSrc: "/uploaded/1755544659422-dvivmwx.webp"
		},
		{
			name: "Robert Harrison",
			position: "Attorney (Estate Planning)",
			imageSrc: "/uploaded/1755545042984-oceywn4.webp"
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
			image:
				"https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=66d73a21e4b09908bf432097",
			link: "https://www.sergiomortgage.com/"
		},
		{
			name: "Chris Brooke",
			position: "Property & Casualty Insurance",
			company: "Farmer's Insurance",
			quote: "Impressive. It's just like talking to a Human!",
			image:
				"https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=67059983e4b0a4e5a6006c9b",
			link: "https://agents.farmers.com/ca/morgan-hill/christopher-brooke/"
		},
		{
			name: "Rajeev Krishnan",
			position: "Digital Marketing",
			company: "TitanX Marketing",
			quote: "Exciting and powerful. This is going to generate so many leads and referrals!",
			image:
				"https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=67d10aaee4b0340086d44106",
			link: "https://titanxmarketing.us/"
		},
		{
			name: "Ivan Jue",
			position: "Life and Disability Insurance",
			company: "World Financial Group. Inc.",
			quote: "This solves one of the biggest pains in networking.",
			image: "/uploaded/1755722360857-yx61iya.png",
			link: "https://worldsystembuilder.com/mypage/ivanjue/"
		},
		{
			name: "Frank Dias",
			position: "Mobile Notary",
			company: "Silicon Valley Signings",
			quote: "This is so cool! This makes networking effortless!",
			image:
				"https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=63a6431e4303fe0001e92a2c",
			link: "https://siliconvalleysignings.com/"
		},
		{
			name: "Shy Sayno",
			position: "Business Consultant",
			company: "NorthStar Strategic Partners, Inc",
			quote: "Wow, I love it!",
			image:
				"https://bnisfbay.com/web/open/appsCmsImageDownload?imageObjectId=66312f49e4b0d3ca42eb3c3d",
			link: "https://northstar-sp.com/"
		}
	]}
/>

<FAQ
	faqs={[
		{
			question: "How does Bruce work?",
			answer: "Bruce uses AI-powered matching to connect you with perfect referral partners through voice-first conversations. You start with a quick 5-minute discovery call where Bruce learns about your business needs and goals. Our AI then analyzes your requirements and finds complementary businesses in your network, prioritizing matches with the highest mutual benefit. You review potential partners and choose which connections interest you most through our double opt-in system."
		},
		{
			question: "What makes Bruce different from traditional networking?",
			answer: "Unlike cold outreach that wastes 15+ hours weekly, Bruce automates warm introductions through conversational AI technology. We focus on quality over quantity, ensuring every connection has mutual benefit. Our voice-first approach creates more personal, human connections compared to typical networking platforms, and our AI matching system finds opportunities you might miss in traditional networking."
		},
		{
			question: "How accurate is the AI matching?",
			answer: "Bruce's proprietary AI matching algorithm analyzes business compatibility by understanding your needs, goals, and ideal referral partner criteria. Our system provides percentage compatibility scores and focuses on complementary businesses rather than direct competitors. The AI continuously learns from feedback and match history to refine future recommendations, ensuring increasingly accurate matches over time."
		},
		{
			question: "Is my data secure with Bruce?",
			answer: "Yes, we're committed to secure and transparent data handling. All conversations are logged with your consent, and we use automated profile summarization for efficient matching while maintaining privacy. You have full control over your communication preferences with opt-in/opt-out options, and we follow industry-standard security practices to protect your business information."
		},
		{
			question: "How long does it take to see results?",
			answer: "Many users start seeing potential matches within days of their initial discovery call. Bruce crafts your professional profile from your conversation and immediately begins searching for compatible partners. The timeline for actual referrals depends on your industry and local network, but our AI-powered approach is designed to build referral networks 10x faster than traditional cold outreach methods."
		},
		{
			question: "What types of businesses work best with Bruce?",
			answer: "Bruce is ideal for service-based companies and business development professionals who rely on referrals. We work particularly well with professionals in real estate, financial services, insurance, legal services, home services, and consulting. Our system is designed for businesses that complement each other rather than compete directly, making it perfect for building diverse referral networks."
		},
		{
			question: "Do I need to prepare anything for the discovery call?",
			answer: "No preparation is needed! That's the beauty of Bruce's voice-first approach. Our conversational AI guides you through relevant questions during the 5-minute call, naturally learning about your business, ideal referral partners, and networking goals. The AI crafts your professional profile from this conversation, making the entire process effortless."
		},
		{
			question: "How does the double opt-in system work?",
			answer: "Our double opt-in system ensures mutual interest and consent before any introductions are made. When Bruce identifies a potential match, both parties review each other's profiles and choose whether they're interested in connecting. Only when both parties express interest does Bruce facilitate the introduction, ensuring every connection is wanted by both sides."
		}
	]}
/>

<CallToAction />
