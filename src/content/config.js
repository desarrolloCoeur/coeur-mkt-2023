import {z, defineCollection } from "astro:content";

const portfolioColletion = defineCollection({
    type: 'content',
    schema: z.object({
        title : z.string(),
        services: z.array(z.string()),
        description: z.string(),
        heroImage: z.string(),
        gallery: z.array(z.string()),  
    }),
});

export const collections = {
    'portafolio' : portfolioColletion,
};
