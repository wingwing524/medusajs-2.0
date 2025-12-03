"use client"

import { Listbox, Transition } from "@headlessui/react"
import { Fragment, useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"

import { StateType } from "@lib/hooks/use-toggle-state"
import { useParams, usePathname } from "next/navigation"
import { updateRegion } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"

type CountryOption = {
  country: string
  region: string
  label: string
}

type CountrySelectProps = {
  toggleState: StateType
  regions: HttpTypes.StoreRegion[]
}

const CountrySelect = ({ toggleState, regions }: CountrySelectProps) => {
  const [current, setCurrent] = useState<
    | { country: string | undefined; region: string; label: string | undefined }
    | undefined
  >(undefined)

  const { countryCode } = useParams()
  const currentPath = usePathname().split(`/${countryCode}`)[1]

  const { state, close } = toggleState

  const options = useMemo(() => {
    return regions
      ?.map((r) => {
        return r.countries?.map((c) => ({
          country: c.iso_2,
          region: r.id,
          label: c.display_name,
        }))
      })
      .flat()
      .sort((a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""))
  }, [regions])

  useEffect(() => {
    if (countryCode) {
      const option = options?.find((o) => o?.country === countryCode)
      setCurrent(option)
    }
  }, [options, countryCode])

  const handleChange = (option: CountryOption) => {
    updateRegion(option.country, currentPath)
    close()
  }

  return (
    <div className="flex-1">
      <Listbox
        as="div"
        onChange={handleChange}
        defaultValue={
          countryCode
            ? options?.find((o) => o?.country === countryCode)
            : undefined
        }
      >
        <Listbox.Button className="w-full text-left">
          {current && (
            <span className="text-sm font-medium flex items-center gap-x-2">
              <ReactCountryFlag
                svg
                style={{
                  width: "18px",
                  height: "18px",
                }}
                countryCode={current.country ?? ""}
              />
              {current.label}
            </span>
          )}
        </Listbox.Button>
        <div className="relative">
          <Transition
            show={state}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options
              className="absolute left-0 mt-2 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-[110] no-scrollbar min-w-[280px] w-max"
              static
            >
              {options?.map((o, index) => {
                return (
                  <Listbox.Option
                    key={index}
                    value={o}
                    className={({ active }) =>
                      `py-2.5 px-3 cursor-pointer flex items-center gap-x-3 text-sm ${
                        active ? "bg-gray-100" : ""
                      } ${
                        current?.country === o?.country
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : ""
                      }`
                    }
                  >
                    <ReactCountryFlag
                      svg
                      style={{
                        width: "18px",
                        height: "18px",
                      }}
                      countryCode={o?.country ?? ""}
                    />
                    {o?.label}
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CountrySelect
