<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Pioneer AI networking",
			description: "Shape the future of professional referrals in a $45B market using cutting-edge conversational AI.",
			icon: IconBriefcase
		},
		{
			title: "Accelerated growth",
			description: "Join our mission-critical team where your work directly impacts 100,000+ monthly AI-matched introductions.",
			icon: IconUsers
		},
		{
			title: "Meaningful impact",
			description: "Help professionals build authentic referral networks 10x faster than traditional cold outreach.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "AI Engineer - Conversational AI",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer - Voice Systems",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Full Stack Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager - AI Matching",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "UX Researcher - Voice Interfaces",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Business Development
		{
			title: "Partnership Manager - BNI Relations",
			department: "Business Development",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Customer Success Manager",
			department: "Business Development",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Operations
		{
			title: "Data Analyst - Matching Insights",
			department: "Operations",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Operations Specialist",
			department: "Operations",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Sarah Chen",
			position: "AI Engineer",
			company: "Engineering Team",
			quote:
				"Working on Bruce's natural language understanding systems is incredibly fulfilling. I get to solve complex AI challenges while knowing our matching algorithms help professionals build authentic referral relationships that actually work.",
			image:
				"/generated/image-a-professional-headshot-of-an-asian-amer.webp"
		},
		{
			name: "Marcus Thompson",
			position: "Product Manager",
			company: "Product Team",
			quote:
				"Bruce gave me the opportunity to lead product initiatives that impact thousands of users daily. The rapid growth and technical innovation here has accelerated my career beyond what I imagined possible.",
			image:
				"/generated/image-a-professional-headshot-of-a-black-man-a.webp"
		},
		{
			name: "Maria Rodriguez",
			position: "Business Development Specialist",
			company: "Business Development",
			quote:
				"The culture at Bruce is unlike anywhere I've worked. We genuinely care about helping professionals succeed, and seeing our users eliminate cold outreach while building meaningful partnerships makes every day rewarding.",
			image:
				"/generated/image-a-professional-headshot-of-a-latina-woma.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Submit application",
			description:
				"Apply through our portal with your resume. We review every application personally and respond within 48 hours."
		},
		{
			step: 2,
			title: "Voice discovery call",
			description: "Experience our voice-first approach firsthand in a 30-minute conversation about your background and our mission."
		},
		{
			step: 3,
			title: "Start building connections",
			description: "Join Bruce and help transform how professionals build referral networks through AI-powered introductions."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Quality over quantity",
			description: "We prioritize meaningful referral connections over mass outreach, ensuring every introduction creates mutual value."
		},
		{
			icon: IconUsers,
			title: "Voice-first philosophy",
			description: "We believe in human conversation as the foundation of trust, using AI to enhance rather than replace personal connection."
		},
		{
			icon: IconGlobe,
			title: "Mutual benefit mindset",
			description: "Every feature we build emphasizes win-win outcomes, from our double opt-in system to bi-directional matching."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Where AI meets authentic connections"
	subtitle="Join us in revolutionizing professional networking through voice-first AI technology. Help us eliminate cold outreach and create meaningful business partnerships that transform how professionals build referral networks."
	imageSrc="/generated/image-a-diverse-team-of-professionals-engaged-.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join Bruce?" subtitle="Build the future of AI-powered professional networking" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
