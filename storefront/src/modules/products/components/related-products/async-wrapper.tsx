import RelatedProducts from "./index"
import { getRegion } from "@lib/data/regions"
import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

type RelatedProductsWrapperProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

type StoreProductParamsWithTags = HttpTypes.StoreProductParams & {
  tags?: string[]
}

type StoreProductWithTags = HttpTypes.StoreProduct & {
  tags?: { value: string }[]
}

export default async function RelatedProductsWrapper({
  product,
  countryCode,
}: RelatedProductsWrapperProps) {
  console.log('[RelatedProducts] Component called with product:', product.handle, 'countryCode:', countryCode)
  
  try {
    const region = await getRegion(countryCode)

    if (!region) {
      console.log('[RelatedProducts] No region found for countryCode:', countryCode)
      return null
    }

    // If no collection_id, try to show products anyway
    if (!product.collection_id) {
      console.log('[RelatedProducts] Product has no collection_id, showing random products')
    }

    // edit this function to define your related products logic
    const queryParams: any = {}
    if (region?.id) {
      queryParams.region_id = region.id
    }
    if (product.collection_id) {
      queryParams.collection_id = [product.collection_id]
    }
    const productWithTags = product as StoreProductWithTags
    if (productWithTags.tags && productWithTags.tags.length > 0) {
      queryParams.tags = productWithTags.tags
        .map((t) => t.value)
        .filter(Boolean) as string[]
    }
    queryParams.is_giftcard = false
    queryParams.limit = 4

    console.log('[RelatedProducts] Fetching with params:', queryParams)

    const products = await getProductsList({
      queryParams,
      countryCode,
    }).then(({ response }) => {
      const filtered = response.products?.filter(
        (responseProduct) => responseProduct.id !== product.id
      ) || []
      console.log('[RelatedProducts] Found', response.products?.length, 'products, filtered to', filtered.length)
      return filtered
    })

    if (!products || products.length === 0) {
      console.log('[RelatedProducts] No related products found')
      return null
    }

    console.log('[RelatedProducts] Rendering', products.length, 'related products')
    return <RelatedProducts products={products} region={region} />
  } catch (error) {
    console.error('[RelatedProducts] Error:', error)
    return null
  }
}
