import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import MobileRefinementList from "@modules/store/components/refinement-list/mobile"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="content-container py-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold" data-testid="store-page-title">All products</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Mobile Filters Dropdown */}
        <div className="lg:hidden">
          <MobileRefinementList sortBy={sort} data-testid="mobile-sort-by-container" />
        </div>

        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:w-64 flex-shrink-0">
          <div className="sticky top-4">
            <RefinementList sortBy={sort} data-testid="sort-by-container" />
          </div>
        </aside>

        <div className="flex-1">
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
