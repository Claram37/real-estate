export { cn } from "cn"

// Navy outline shown when a link or button is reached with the keyboard.
export const focusRing =
  "rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"

// White outline for yellow buttons that sit on a photo, where navy wouldn't
// show. outline-solid is needed because shadcn's button style sets outline-none.
export const focusRingOnPhoto =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
})

// Short US-dollar prices: 500000 → "$500K", 2400000 → "$2.4M".
export const formatPrice = (dollars: number) => priceFormat.format(dollars)
