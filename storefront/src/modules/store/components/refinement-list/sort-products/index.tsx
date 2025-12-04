"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { useTranslations } from "../../../../../i18n/client"

export type SortOptions = "price_asc" | "price_desc" | "created_at" | "popularity" | "rating" | "name_asc" | "name_desc"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "popularity",
    label: "Most Popular",
  },
  {
    value: "rating",
    label: "Highest Rated",
  },
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low → High",
  },
  {
    value: "price_desc",
    label: "Price: High → Low",
  },
  {
    value: "name_asc",
    label: "Name: A → Z",
  },
  {
    value: "name_desc",
    label: "Name: Z → A",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const t = useTranslations('product')
  
  const translatedSortOptions = [
    { value: "popularity", label: t('most_popular') },
    { value: "rating", label: t('highest_rated') },
    { value: "created_at", label: t('latest_arrivals') },
    { value: "price_asc", label: t('price_low_high') },
    { value: "price_desc", label: t('price_high_low') },
    { value: "name_asc", label: t('name_a_z') },
    { value: "name_desc", label: t('name_z_a') },
  ]
  
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <FilterRadioGroup
      title={t('sort_by')}
      items={translatedSortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
