# Drew Blackwell Personal Website

A clean, Apple-style personal website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

### Replacing the Hero Image

1. Place your hero portrait image in the `/public` directory
2. Name it `hero-portrait.jpeg` (or update the path in `app/components/Hero.tsx`)
3. Supported formats: JPEG, PNG, WebP

The image should be at least 800x800 pixels for best quality. The component will automatically resize it.

### Updating the Resume

1. Place your resume PDF file in the `/public` directory
2. Name it `resume.pdf`
3. The resume viewer will automatically detect and display it
4. The download button will be enabled once the PDF is present

### Editing the Hero Quote

Edit the quote in `app/components/Hero.tsx`:

```tsx
<blockquote className="...">
  &ldquo;Your new quote here&rdquo;
</blockquote>
```

### Changing the LinkedIn URL

Update the LinkedIn URL in `app/links/page.tsx`:

```tsx
<LinkCard
  href="https://www.linkedin.com/in/your-profile/"
  label="LinkedIn"
  ...
/>
```

You can also add additional links by uncommenting the email placeholder or adding new `LinkCard` components.

### Updating Personal Information

- **About page content**: Edit `app/about/page.tsx`
- **Meta tags**: Update `app/layout.tsx` (title, description, OG tags)
- **Structured data**: Update the Person schema in `app/layout.tsx`

## Project Structure

```
app/
  components/     # Reusable components (Navbar, Hero, Footer, etc.)
  about/          # About page
  resume/         # Resume page
  links/          # Links page
  page.tsx        # Home page
  layout.tsx      # Root layout with metadata
  globals.css     # Global styles and color palette
```

## Design System

- **Colors**: White (#FFFFFF), Carolina Blue (#9BCBFF), Light Grey (#F3F4F6)
- **Typography**: Inter font family with system UI fallback
- **Max Width**: 1100px container
- **Spacing**: Generous white space, Apple-style spacing
- **Animations**: Subtle fade-in animations and hover micro-interactions

## Build & Deploy

```bash
npm run build
npm start
```

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
