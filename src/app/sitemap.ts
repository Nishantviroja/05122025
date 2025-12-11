import { MetadataRoute } from 'next';
import { certifications } from '@/data/certifications';
import { SEO_CONFIG } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SEO_CONFIG.siteUrl;

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/dumps`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // {
        //     url: `${baseUrl}/privacy`,
        //     lastModified: new Date(),
        //     changeFrequency: 'yearly',
        //     priority: 0.3,
        // },
        // {
        //     url: `${baseUrl}/terms`,
        //     lastModified: new Date(),
        //     changeFrequency: 'yearly',
        //     priority: 0.3,
        // },
        // {
        //     url: `${baseUrl}/refund`,
        //     lastModified: new Date(),
        //     changeFrequency: 'yearly',
        //     priority: 0.3,
        // },
    ];

    // Dynamic certification pages - Commented out as per request
    // const certificationPages: MetadataRoute.Sitemap = certifications.map((cert) => ({
    //     url: `${baseUrl}/${cert.id}`,
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly' as const,
    //     priority: 0.8,
    // }));

    return [...staticPages];
}

