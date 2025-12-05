import Medusa from "@medusajs/js-sdk"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
})

// Store configuration
export const STORE_NAME = process.env.NEXT_PUBLIC_STORE_NAME || "V'lora"
export const STORE_EMAIL = process.env.NEXT_PUBLIC_STORE_EMAIL || "info@vlora.com"
export const STORE_SUPPORT_EMAIL = process.env.NEXT_PUBLIC_STORE_SUPPORT_EMAIL || "support@vlora.com"
export const STORE_ADDRESS = process.env.NEXT_PUBLIC_STORE_ADDRESS || "Hong Kong"
