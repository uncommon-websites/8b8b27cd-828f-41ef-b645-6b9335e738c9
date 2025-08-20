/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Get Started",
	href: "https://bruce.bot/onboarding",
	// Function to get href with preserved query parameters
	getHrefWithParams: () => {
		if (typeof window === 'undefined') {
			// Server-side rendering fallback
			return "https://bruce.bot/onboarding";
		}
		
		try {
			const currentUrl = new URL(window.location.href);
			const onboardingUrl = new URL("https://bruce.bot/onboarding");
			
			// Preserve all current query parameters
			currentUrl.searchParams.forEach((value, key) => {
				onboardingUrl.searchParams.set(key, value);
			});
			
			return onboardingUrl.toString();
		} catch (error) {
			console.warn('Failed to preserve query parameters:', error);
			return "https://bruce.bot/onboarding";
		}
	}
};

export const loginButton = {
	label: "Log in",
	href: "https://bruce.bot/users/log_in_otp"
};

export const navigation: NavItem[] = [
	{
		label: "About Us",
		href: "/about",
		showInNav: true,
		showInFooter: false
	},

	{
		label: "Company",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
