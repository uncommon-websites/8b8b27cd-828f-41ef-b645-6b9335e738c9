import { page } from '$app/stores';
import { get } from 'svelte/store';

/**
 * Creates an onboarding URL that preserves current query parameters
 * @param baseUrl - The base onboarding URL (default: https://bruce.bot/onboarding)
 * @returns URL with preserved query parameters
 */
export function getOnboardingUrlWithParams(baseUrl: string = 'https://bruce.bot/onboarding'): string {
	try {
		// Get current page data
		const currentPage = get(page);
		const currentUrl = currentPage.url;
		
		// If no query parameters, return base URL
		if (!currentUrl.search) {
			return baseUrl;
		}
		
		// Create URL object and append current query parameters
		const onboardingUrl = new URL(baseUrl);
		const currentParams = new URLSearchParams(currentUrl.search);
		
		// Append all current query parameters to the onboarding URL
		currentParams.forEach((value, key) => {
			onboardingUrl.searchParams.set(key, value);
		});
		
		return onboardingUrl.toString();
	} catch (error) {
		// Fallback to base URL if anything goes wrong
		console.warn('Failed to preserve query parameters:', error);
		return baseUrl;
	}
}