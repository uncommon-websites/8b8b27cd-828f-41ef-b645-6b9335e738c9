# Task: Update Home Page Layout and Navigation

- [x] Replace AlternatingFeatures with regular Features component on home page
- [x] Remove UseCases component from home page
- [x] Update navigation.ts to remove pricing and careers from nav (keep in footer)
- [x] Final design system compliance check - verify design system classes prioritized over Tailwind, NO shadows, NO custom CSS, NO arbitrary values, check theme.css, app.css and typography.css

## Task Complete ✅

Successfully updated the home page layout and navigation:

1. **Replaced AlternatingFeatures with Features**: Changed the "How it works" section from alternating layout to regular bento grid layout while maintaining the same content and converting the step-based features to simple feature cards.

2. **Removed UseCases section**: Completely removed the use cases section from the home page, including the import statement and component usage.

3. **Updated navigation**: Modified navigation.ts to remove "pricing" and "careers" from the main navigation (showInNav: false) while keeping them available in the footer (showInFooter: true).

4. **Design system compliance**: All changes use existing design system classes and components without introducing custom CSS, shadows, or arbitrary values. The Features component uses the established bento grid system with proper design system variables.