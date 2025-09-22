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
			question: "What is Bruce?",
			answer: "Bruce is an AI-powered matchmaking and engagement tool that helps people connect more effectively. It is not a networking group or organization—it's a technology platform designed to support individuals and communities in building stronger professional relationships."
		},
		{
			question: "How does Bruce work?",
			answer: "You opt in voluntarily and share your own information with Bruce. Bruce runs matching rounds every day to keep the system fresh. Regular users are typically targeted to receive about one match per month, depending on network size, compatibility, and preferences (matches aren't guaranteed). Bruce will only match and introduce people who belong to the same organization or community. Double opt-in: an introduction is created only if both people say \"yes\" during the matching round—making intros highly valuable and actionable."
		},
		{
			question: "Is Bruce a networking group?",
			answer: "No. Bruce is not a networking group. It does not: Hold meetings. Create its own membership structure. Collect or use membership lists from outside organizations. Bruce is a technology layer that enhances existing organizations, chambers, and associations by making member-to-member connections easier and more effective."
		},
		{
			question: "Can Bruce work with existing business groups?",
			answer: "Yes. Bruce is designed to enhance any business networking environment, including: Chambers of commerce, Professional associations, Industry trade groups, Informal business communities."
		},
		{
			question: "Where does Bruce get its information?",
			answer: "From you. Bruce only uses the information that you personally provide when signing up. It does not access or import data from other groups or organizations."
		},
		{
			question: "How does Bruce verify membership in an organization?",
			answer: "When someone says they belong to a group, chamber, or association, Bruce may confirm this by checking publicly available information (such as an organization's public directory or website). Bruce does not collect, scrape, or store membership lists from organizations. Verification is limited to confirming a user's own claim using sources anyone could access."
		},
		{
			question: "What information is shared in an introduction?",
			answer: "When Bruce creates an introduction, it shares the relevant profile details you provided—such as your name, role, organization/community, interests, and connection goals. If you include contact details (email, phone, calendar link), these may appear in introductions. Introductions occur only within your organization/community."
		},
		{
			question: "How does Bruce use AI (LLMs), and what does that mean for my data visibility?",
			answer: "Bruce uses large language models (LLMs) to generate introductions and assist with match conversations. Content you provide to Bruce may be accessible to the AI during matching and chat. During a conversation, your matched counterpart could ask questions that cause the AI to surface information you previously shared with Bruce. Do not add information to Bruce that you would not want a match to potentially see."
		},
		{
			question: "Can I control what the AI can surface to my matches?",
			answer: "Yes. You can edit or remove any information in your profile at any time. Anything you delete will no longer be used in future matches or introductions."
		},
		{
			question: "How often will I get matched?",
			answer: "Bruce runs matching rounds daily, but most users should expect about one match per month. Whether you receive a match in a given cycle depends on: The size and composition of your organization's member pool, Compatibility and preference constraints (e.g., goals, interests, location/proximity), Queue fairness (ensuring matches are spread out over time). Inviting peers grows the pool and increases everyone's match chances. PowerMatches can also accelerate this by giving you extra introductions between the monthly targets."
		},
		{
			question: "What are PowerMatches?",
			answer: "PowerMatches are bonus introductions that go beyond the regular monthly cadence. How they work: Bruce runs daily rounds, but regular users are targeted for ~1 match/month. As a thank you for inviting a fellow member to join Bruce, once that person's membership is verified, you both earn a PowerMatch. A PowerMatch is an extra connection that can be triggered between standard monthly matches. Over time, users who earn more lifetime PowerMatches are recognized as trustworthy contributors (their referrals expand the pool and improve match quality). As a reward, they receive a slight advantage in Bruce's ranking and scoring, improving their odds of higher-quality matches."
		},
		{
			question: "What does \"double opt-in\" mean, exactly?",
			answer: "Both parties must say \"yes\" during a matching round for an introduction to be made. Both must belong to the same networking group/organization. If either party declines or does not respond within the window, no intro is created—ensuring intros are mutual, timely, and actionable."
		},
		{
			question: "How quickly should I respond?",
			answer: "We recommend responding within 24 hours to keep momentum strong. For match decisions (before an intro is created), Bruce currently provides about 36 hours to choose \"yes\" or \"pass.\" This timebox helps us quickly convert good matches into intros—many business opportunities are time-sensitive, and faster intros mean fewer missed collaborations."
		},
		{
			question: "Who can use Bruce?",
			answer: "Anyone who belongs to a participating organization or community, including business professionals, entrepreneurs, association members, and community leaders looking to deepen relationships within their group."
		},
		{
			question: "Does Bruce replace networking events?",
			answer: "No. Bruce complements networking events and communities. Events create opportunities to meet people; Bruce helps you follow up, match with the right people, and stay engaged afterward."
		},
		{
			question: "What makes Bruce different?",
			answer: "AI-driven matching (not random pairings), Daily rounds, monthly targets for matches, Double opt-in to ensure intros are mutual and actionable, PowerMatches to accelerate extra introductions and reward community growth, Focused on connections within your organization/community, Lightweight workflow that saves time and improves networking ROI."
		},
		{
			question: "Is my data safe?",
			answer: "Bruce focuses on practical privacy in an AI environment: Bruce does not import external membership lists. Your details may appear to your matches within your community during introductions and chat. You can update or remove your profile info at any time, and those changes apply to future matches. Bruce does not sell or export your data to outside organizations."
		},
		{
			question: "How does Bruce benefit organizations?",
			answer: "Business groups, chambers, and associations use Bruce to: Improve member engagement and retention, Offer more value by creating better connections, Save leaders time by automating introductions and follow-ups, Strengthen overall community cohesion."
		},
		{
			question: "Why was Bruce created?",
			answer: "To solve a common problem: helping people build stronger, more meaningful connections in less time—with better matches, easier follow-ups, and more natural conversation flow."
		},
		{
			question: "How do I get started?",
			answer: "Sign up and add your profile details. Bruce runs daily matching rounds and targets you for about one match per month. If both sides say \"yes,\" Bruce creates a double opt-in introduction. Earn PowerMatches to accelerate extra introductions."
		},
		{
			question: "What's the main takeaway?",
			answer: "Bruce is an AI engagement platform—not a networking group. It enhances the organizations and communities you already belong to by creating double opt-in introductions, rewarding community growth through PowerMatches, and helping members build stronger professional relationships—quickly and with momentum."
		}
	]}
/>

<CallToAction />
