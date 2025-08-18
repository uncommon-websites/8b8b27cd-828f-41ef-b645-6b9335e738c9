const legal = {
	privacy: {
		meta: {
			title: "Privacy Policy",
			description:
				"Our privacy policy explains how we collect, use, and protect your personal information."
		},
		content: {
			lastUpdated: "2024-08-18T00:00:00.000Z",
			sections: [
				{
					title: "Introduction",
					body: "Tanda Technologies, Inc. (\"Tanda,\" \"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you interact with our services. This policy applies to all interactions with Tanda, including: Our websites and platforms Our mobile and desktop apps Voice or chatbot-based conversations Email and SMS interactions Official social media pages We refer to these collectively as the \"Services.\""
				},
				{
					title: "What We Collect",
					body: "We collect information to provide, improve, and personalize our Services. This may include: Identity and contact info: Name, phone number, email address Interaction data: Chat messages, voice recordings, call transcripts Account details: Login info, preferences, IP address Device data: Type, browser, OS, location (if enabled) Social handles: When connected, we may receive limited profile data We do not collect or process payment or financial account data."
				},
				{
					title: "Voice & Text Consent",
					body: "By using our voice or chat Services, you consent to: Recording and storing your interactions Analyzing transcripts and patterns to improve our AI (e.g., Bruce) Using this data to deliver better matches and recommendations We may use anonymized or aggregated versions of this data to improve service quality and train machine learning systems. You can opt out of non-essential use by contacting us (see below)."
				},
				{
					title: "How We Use Your Information",
					body: "We use your information to: Operate, improve, and maintain our Services Personalize your experience and match suggestions Train and enhance AI-powered features like Bruce Support customer service and troubleshoot issues Communicate with you about matches, reminders, and updates We may retain anonymized interaction data indefinitely to strengthen performance, accuracy, and user experience."
				},
				{
					title: "When We Share Data",
					body: "We may share your information with trusted third-party service providers who support our operations (e.g., hosting, analytics, communication platforms). These providers are required to handle your data securely and only on our behalf. We may also share anonymized, aggregated insights with partners or for research purposes. We will never sell your personal information."
				},
				{
					title: "Security",
					body: "We implement reasonable security measures to protect your data. However, no method of transmission or storage is fully secure. Please contact us immediately at support@bruce.bot if you believe your account has been compromised."
				},
				{
					title: "Location & International Data Transfer",
					body: "We are based in the United States. By using our Services, you agree that your data may be transferred to, processed, and stored in the U.S., which may have different privacy protections than your home country."
				},
				{
					title: "Children",
					body: "Our Services are not intended for individuals under the age of 13. We do not knowingly collect data from children."
				},
				{
					title: "Your Rights",
					body: "As a California resident, you may request: Access to your personal data Correction or deletion To opt out of non-essential use To exercise your rights, email us at support@bruce.bot."
				},
				{
					title: "Changes to This Policy",
					body: "We may update this Privacy Policy periodically. The \"Last Updated\" date reflects the most recent version. Continued use of the Services means you accept any changes."
				},
				{
					title: "Contact Us",
					body: "For questions, feedback, or requests regarding your privacy: support@bruce.bot"
				}
			]
		}
	},
	terms: {
		meta: {
			title: "Terms of Service",
			description: "Our terms of service outline the rules and regulations for using our website."
		},
		content: {
			lastUpdated: "2025-06-13T00:00:00.000Z",
			sections: [
				{
					title: "Terms of Service",
					body: "Effective Date: June 13, 2025. These Terms of Service (\"Terms\") govern your access and use of the Services provided by Tanda Technologies, Inc. (\"Tanda,\" \"we,\" \"us\"). By using our Services, you agree to these Terms. If you do not agree, please do not use the Services."
				},
				{
					title: "Your Responsibilities",
					body: "You agree to: Use our Services only for lawful, professional, and networking purposes. Provide accurate and complete information. Maintain the confidentiality of your login credentials. Not use our systems to spam, harass, or collect unauthorized data. You are responsible for the actions taken under your account."
				},
				{
					title: "AI, Data, and Recordings",
					body: "By using our voice and chatbot features, you agree that: Your voice and text inputs may be recorded, stored, and analyzed. We may use this data to improve our services, matching system, and AI models. Aggregated or anonymized data may be retained indefinitely. If you prefer not to be recorded, do not use the voice features."
				},
				{
					title: "Communications",
					body: "You consent to receiving SMS, email, and phone communications related to your account, matches, and reminders. You can manage preferences through your profile settings."
				},
				{
					title: "Intellectual Property",
					body: "All content, technology, and branding related to Tanda — including Bruce — are our intellectual property. You may not reverse-engineer, copy, or redistribute any portion of the platform."
				},
				{
					title: "Termination",
					body: "We may suspend or terminate your access at any time, particularly for misuse, policy violations, or failure to maintain accurate information."
				},
				{
					title: "Legal",
					body: "These Terms are governed by California law. Any disputes will be handled in the state or federal courts located in San Francisco, CA."
				},
				{
					title: "Contact Us",
					body: "Questions? Email us at support@bruce.bot."
				}
			]
		}
	}
};

// Types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { type } = params as { type: keyof typeof legal };
	const content = legal[type];

	return content;
};
