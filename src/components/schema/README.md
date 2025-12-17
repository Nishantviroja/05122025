# Schema Components

This folder contains Google Search Console (GSC) friendly schema markup generators for structured data that helps improve SEO and search visibility.

## Schema Types Implemented

### 1. Product Schema (`productSchema.ts`)
Used for certification exam dumps pages to display product information in search results.

**Features:**
- Product details (name, description, image)
- Price and availability
- Brand information
- Aggregate ratings and reviews
- Merchant listing compatibility

**Usage:**
```typescript
import { generateProductSchema } from '@/components/schema';

const productSchema = generateProductSchema({
  id: 'certification-id',
  title: 'Certification Title',
  description: 'Description text',
  price: '$29',
  category: 'Administrator',
  image: 'https://example.com/image.jpg',
  rating: 4.8,
  reviewCount: 150
});
```

### 2. Breadcrumb Schema (`breadcrumbSchema.ts`)
Implements breadcrumb navigation in search results.

**Features:**
- Hierarchical navigation
- Position tracking
- Pre-built breadcrumb generators for common pages

**Usage:**
```typescript
import { generateBreadcrumbSchema, getCertificationBreadcrumb } from '@/components/schema';

// For certification detail page
const breadcrumbSchema = generateBreadcrumbSchema(
  getCertificationBreadcrumb('Certification Title', 'cert-id')
);
```

**Available Breadcrumb Generators:**
- `getHomeBreadcrumb()` - Home page
- `getDumpsBreadcrumb()` - All dumps page
- `getCertificationBreadcrumb(title, id)` - Individual certification page
- `getAboutBreadcrumb()` - About page
- `getContactBreadcrumb()` - Contact page

### 3. Organization Schema (`organizationSchema.ts`)
Defines the organization/business information.

**Features:**
- Organization name and URL
- Logo and description
- Social media links
- Contact information

**Usage:**
```typescript
import { generateOrganizationSchema } from '@/components/schema';

const organizationSchema = generateOrganizationSchema();
```

### 4. Website Schema (`websiteSchema.ts`)
Defines the website and enables search functionality in Google.

**Features:**
- Website metadata
- Search action for site search box
- Potential actions

**Usage:**
```typescript
import { generateWebsiteSchema } from '@/components/schema';

const websiteSchema = generateWebsiteSchema();
```

### 5. FAQ Schema (`faqSchema.ts`)
For pages with frequently asked questions.

**Features:**
- Question and answer pairs
- Rich results in search

**Usage:**
```typescript
import { generateFAQSchema } from '@/components/schema';

const faqSchema = generateFAQSchema([
  {
    question: 'What is included?',
    answer: 'Complete exam dumps with verified answers.'
  },
  // ... more FAQs
]);
```

## Implementation in Pages

### Homepage (`src/app/page.tsx`)
✅ Website Schema
✅ Organization Schema
✅ Breadcrumb Schema

### Certification Detail Page (`src/app/[id]/page.tsx`)
✅ Product Schema (with merchant listings support)
✅ Breadcrumb Schema
✅ Course Schema

### Dumps Page (`src/app/dumps/page.tsx`)
✅ Breadcrumb Schema

### About Page (`src/app/about/page.tsx`)
✅ Organization Schema
✅ Breadcrumb Schema

## Adding Schema to a Page

### Server Component (e.g., detail page):
```typescript
import { generateProductSchema } from '@/components/schema';

export default async function Page() {
  const schema = generateProductSchema({...});
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  );
}
```

### Client Component (e.g., dumps page):
```typescript
"use client";
import { generateBreadcrumbSchema } from '@/components/schema';

export default function Page() {
  const schema = generateBreadcrumbSchema([...]);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  );
}
```

## Testing Schema

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor performance in GSC

### 6. ItemList Schema (`itemListSchema.ts`)
For product collection pages to display multiple products.

**Features:**
- Product collection listings
- Position tracking for each item
- Support for category filtering
- CollectionPage schema for category pages

**Usage:**
```typescript
import { generateItemListSchema, generateCollectionPageSchema } from '@/components/schema';

const itemListSchema = generateItemListSchema(
  certifications.map(cert => ({
    id: cert.id,
    title: cert.title,
    price: cert.price,
    image: cert.certificationIMG,
    category: cert.category,
    rating: cert.rating
  }))
);
```

## Google Shopping & Merchant Listings Integration

### Enhanced Product Schema Features

✅ **Product Identifiers**
- SKU (Stock Keeping Unit)
- MPN (Manufacturer Part Number)
- Unique product @id

✅ **Merchant Return Policy**
- 30-day return window
- Free returns
- Return by mail option

✅ **Shipping Details**
- Free shipping ($0 cost)
- Instant digital delivery (0 days)
- Worldwide availability

✅ **Price Specifications**
- Clear pricing with currency
- Price validity period (1 year)
- Tax information

✅ **Multiple Reviews**
- 3+ customer reviews per product
- Dated reviews with ratings
- Verified customer testimonials

✅ **Product Attributes**
- Question count
- Digital download format
- Lifetime access
- Latest version updates

### Google Shopping Checklist

To get your products into Google Shopping:

1. **✅ Product Schema** - Fully implemented with all required fields
2. **✅ Merchant Return Policy** - 30-day return policy included
3. **✅ Shipping Details** - Free instant delivery configured
4. **✅ Product Images** - High-quality images with proper URLs
5. **✅ Pricing Information** - Clear USD pricing with validity
6. **✅ Reviews & Ratings** - Aggregate ratings and individual reviews
7. **✅ Product Identifiers** - SKU and MPN included
8. **✅ Availability Status** - In Stock status set
9. **✅ ItemList Schema** - Product collections properly structured
10. **⚠️ Google Merchant Center** - You need to set up account and submit feed

### Next Steps for Google Shopping

1. **Create Google Merchant Center Account**
   - Go to: https://merchants.google.com
   - Verify your website
   - Set up business information

2. **Submit Product Feed**
   - Use automatic product feed via sitemap
   - Or create XML/CSV product feed
   - Submit to Merchant Center

3. **Verify Structured Data**
   - Test at: https://search.google.com/test/rich-results
   - Check for Product snippets
   - Verify Merchant listings

4. **Enable HTTPS** (if not already)
   - Required for Google Shopping
   - SSL certificate needed

## Benefits

✅ **HTTPS**: Site is served over HTTPS (configured at deployment)
✅ **Product Snippets**: Shows product info, price, rating in search results
✅ **Merchant Listings**: Fully compatible with Google Merchant Center
✅ **Breadcrumbs**: Navigation path displayed in search results
✅ **Rich Snippets**: Enhanced search result appearance with images
✅ **Better CTR**: Up to 30% higher click-through rate with rich results
✅ **Shopping Tab**: Products appear in Google Shopping with proper schema
✅ **Price Comparison**: Products can appear in price comparison tools
✅ **Mobile Shopping**: Optimized for mobile search results
✅ **Return Policy Display**: Customer confidence with visible return policy
✅ **Free Shipping Badge**: Highlights instant digital delivery

## Implementation Status

### Homepage
✅ Website Schema with search functionality
✅ Organization Schema
✅ Breadcrumb Schema

### Certification Detail Pages
✅ Enhanced Product Schema (Google Shopping ready)
✅ Merchant Return Policy
✅ Shipping Details
✅ Multiple Reviews
✅ Product Attributes
✅ Breadcrumb Schema
✅ Course Schema

### Dumps Collection Page
✅ ItemList Schema (all products)
✅ CollectionPage Schema
✅ Breadcrumb Schema
✅ Category filtering support

### About Page
✅ Organization Schema
✅ Breadcrumb Schema

## Notes

- All schemas use the SEO_CONFIG from `@/data/seo` for consistency
- Schemas are JSON-LD format (recommended by Google)
- Price fields automatically handle currency formatting
- Review counts and ratings are configurable per product
- Product identifiers (SKU/MPN) auto-generated from certification ID
- Images must be publicly accessible URLs
- Shipping details configured for digital products (instant delivery)
- Return policy meets Google's minimum requirements

