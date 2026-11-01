// =============================================================
// Snoot & Co. - PRODUCT LIST
// This is the only file you need to edit to manage products.
//
// To ADD a product: copy one block from { to }, paste it below,
// put a comma between blocks, and change the details.
// To REMOVE a product: delete its whole block.
//
// What each line means:
//   name        - product name shown on the card
//   price       - price in US dollars (numbers only, no $)
//   description - 1-2 short, honest sentences
//   emoji       - shown as a placeholder until you add a real photo
//   image       - path to a real product photo, e.g. "images/mug.jpg"
//                 (leave as "" to use the emoji placeholder)
//   badge       - optional small label, e.g. "Holiday pick" (or "")
//   buyLink     - your Stripe Payment Link (from the Stripe Dashboard).
//                 Links containing "test_" are PRACTICE links (fake money).
//                 Leave as "" and the button shows "Coming soon".
//
// Rough cost notes (from research, Nov 2026 - check in Printify):
//   ornament ~$9 incl. shipping | mug ~$6 + shipping | bandana ~$10-13
//   sweatshirt ~$20-25 | canvas & blanket - check current Printify prices
// =============================================================

const products = [
  {
    name: "Custom Pet Photo Ornament",
    price: 22,
    description: "Your pet's face on a glossy ceramic ornament. A keepsake for the tree, year after year.",
    emoji: "🎄",
    image: "",
    badge: "Holiday pick",
    buyLink: "https://buy.stripe.com/test_3cI14o3r6g8T3JQbIB0VO06"
  },
  {
    name: "Custom Pet Mug",
    price: 24,
    description: "Morning coffee with your favorite snoot. 11oz ceramic, dishwasher safe.",
    emoji: "☕",
    image: "",
    badge: "",
    buyLink: "https://buy.stripe.com/test_cNi3cw8Lq9Kv6W27sl0VO07"
  },
  {
    name: "Personalized Pet Bandana",
    price: 26,
    description: "Soft, adjustable bandana printed with your pet's name. Photo-ready for every walk.",
    emoji: "🐶",
    image: "",
    badge: "",
    buyLink: "https://buy.stripe.com/test_4gM14o1iYaOz5RYdQJ0VO08"
  },
  {
    name: "\"Dog Mom\" / \"Cat Mom\" Sweatshirt",
    price: 49,
    description: "Cozy crewneck with your pet's portrait and name. Proudly worn, endlessly hugged.",
    emoji: "🧥",
    image: "",
    badge: "",
    buyLink: "https://buy.stripe.com/test_cNieVee5KcWH1BI8wp0VO09"
  },
  {
    name: "Pet Portrait Canvas",
    price: 59,
    description: "Your pet as wall art. Gallery-wrapped canvas, ready to hang.",
    emoji: "🖼️",
    image: "",
    badge: "",
    buyLink: "https://buy.stripe.com/test_aFa4gAaTybSD5RYbIB0VO0a"
  },
  {
    name: "Custom Pet Photo Blanket",
    price: 64,
    description: "Ultra-soft fleece blanket covered in your pet. Perfect for couch cuddles.",
    emoji: "🛋️",
    image: "",
    badge: "Holiday pick",
    buyLink: "https://buy.stripe.com/test_8x2cN67HmcWHfsybIB0VO0b"
  }
];
