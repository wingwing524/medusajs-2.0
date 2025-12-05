import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import CategoryShowcase from "@modules/home/components/category-showcase"
import FeaturesSection from "@modules/home/components/features-section"
import PromoBanner from "@modules/home/components/promo-banner"
import BrandStory from "@modules/home/components/brand-story"
import FeaturedCollectionsHeader from "@modules/home/components/featured-collections-header"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Premium Bags & Accessories |V'lora",
  description:
    "Discover our curated collection of premium bags, wallets, and accessories. Quality craftsmanship meets timeless design.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <FeaturesSection />
      <CategoryShowcase />
      <div className="py-16 bg-gray-50">
        <FeaturedCollectionsHeader />
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <PromoBanner />
      <BrandStory />
    </>
  )
}
