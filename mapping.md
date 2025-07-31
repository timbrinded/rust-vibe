# UI Element to shadcn/ui Component Mapping

This document maps existing UI elements in the project to appropriate shadcn/ui components for potential modernization.

## Current Project Analysis

### Files Analyzed
- `app/root.tsx` - Root layout and error boundary
- `app/welcome/welcome.tsx` - Welcome screen with navigation
- `app/routes/home.tsx` - Home page with link
- `app/routes/rust.tsx` - Rust fan page with interactive elements
- `rust-fan-page.html` - Static HTML showcase page

## UI Element Mappings

### Navigation & Layout

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Sticky navigation bar | `rust.tsx:140-158` | `navigation-menu` | Replace custom nav with Navigation Menu component |
| Tab-like navigation buttons | `rust.tsx:143-156` | `tabs` | Convert section switching to Tabs component |
| Hero section layout | `rust.tsx:108-137` | `card` | Wrap hero content in Card component |
| Grid layout containers | `rust.tsx:170-186`, `welcome.tsx:22-43` | `card` | Convert feature grids to Card components |

### Interactive Elements

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Navigation buttons | `rust.tsx:144-155` | `button` | Replace custom buttons with Button variants |
| Quiz answer buttons | `rust.tsx:314-323` | `button` | Use Button component with hover states |
| "Try Again" button | `rust.tsx:332-340` | `button` | Convert to Button with primary variant |
| Link buttons | `home.tsx:16-22`, `rust-fan-page.html:71-92` | `button` | Use Button with `asChild` prop for Link components |
| Community links | `rust.tsx:367-378` | `button` | Convert external links to Button components |

### Content Display

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Feature cards | `rust.tsx:172-184`, `welcome.tsx:23-42` | `card` | Replace custom cards with Card, CardHeader, CardContent |
| Code examples | `rust.tsx:235-247` | `card` + custom styling | Use Card with dark theme for code blocks |
| Quiz container | `rust.tsx:303-343` | `card` | Wrap quiz in Card component |
| Ferris showcase | `rust.tsx:267-290` | `card` | Convert Ferris info cards to Card components |
| Error boundary | `root.tsx:64-74` | `alert` | Use Alert component for error display |

### Form Elements & Input

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Quiz selection | `rust.tsx:312-324` | `radio-group` | Convert quiz options to RadioGroup |
| Active section state | `rust.tsx:12` | `tabs` controlled | Replace state with Tabs controlled component |

### Feedback & Status

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Quiz score display | `rust.tsx:327-341` | `badge` | Show score using Badge component |
| Loading/progress states | Currently missing | `progress` | Add Progress component for quiz progression |
| Section indicators | `rust.tsx:306-308` | `badge` | Question counter as Badge |

### Utility Components

| Current Element | Location | Suggested shadcn/ui Component | Notes |
|----------------|----------|-------------------------------|-------|
| Hover effects | Multiple locations | `hover-card` | Convert some hover states to HoverCard |
| Tooltips | Currently missing | `tooltip` | Add Tooltips for feature explanations |
| Separators | Currently using borders | `separator` | Use Separator component between sections |
| Scroll areas | Long content areas | `scroll-area` | Improve scrolling for code examples |

## Implementation Priority

### High Priority
1. **Button** - Most frequently used, easy to implement
2. **Card** - Major layout component, significant visual impact
3. **Tabs** - Core navigation functionality
4. **Alert** - Error handling improvement

### Medium Priority
1. **Badge** - Status indicators and counters
2. **Navigation Menu** - Enhanced navigation experience
3. **Radio Group** - Quiz functionality improvement
4. **Separator** - Visual hierarchy improvement

### Low Priority
1. **Hover Card** - Enhanced hover interactions
2. **Tooltip** - Additional user guidance
3. **Progress** - Quiz progression indicator
4. **Scroll Area** - Enhanced scrolling experience

## Migration Strategy

### Phase 1: Core Components
- Replace custom buttons with shadcn/ui Button
- Convert feature grids to Card layout
- Implement basic Alert for error boundary

### Phase 2: Navigation Enhancement
- Convert navigation to Tabs component
- Implement Navigation Menu for main nav
- Add Badge components for status indicators

### Phase 3: Interactive Improvements
- Convert quiz to Radio Group
- Add Progress indicators
- Implement Hover Cards and Tooltips

## Notes

- Current project uses Tailwind CSS classes extensively, which aligns well with shadcn/ui
- Framer Motion animations should be preserved and integrated with shadcn/ui components
- Dark theme support is already implemented and should work with shadcn/ui theming
- Consider implementing a consistent design system using shadcn/ui theme tokens

## Benefits of Migration

1. **Consistency** - Unified design system across components
2. **Accessibility** - Built-in ARIA support and keyboard navigation
3. **Maintainability** - Standardized component API and styling
4. **Developer Experience** - Better TypeScript support and documentation
5. **Performance** - Tree-shakeable components and optimized bundle size