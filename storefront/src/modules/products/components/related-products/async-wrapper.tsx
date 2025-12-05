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
  try {
    const region = await getRegion(countryCode)

    if (!region) {
      return null
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

    const products = await getProductsList({
      queryParams,
      countryCode,
    }).then(({ response }) => {
      const filtered = response.products?.filter(
        (responseProduct) => responseProduct.id !== product.id
      ) || []
      return filtered
    })

    if (!products || products.length === 0) {
      return null
    }

    return <RelatedProducts products={products} region={region} />
  } catch (error) {
    console.error('[RelatedProducts] Error:', error)
    return null
  }
}
