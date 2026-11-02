# Project: Online Store

## About the owner
- Complete beginner, has never coded. Learning while building.
- Has a GitHub account.

## How to teach
- Plain English. Define any technical term the first time, in one sentence.
- Before running a command, say in one line what it does.
- When creating a file, say in one line why it exists.
- When using an agent, say what job it has and why.
- Keep explanations short and practical.
- After each major step, give a 2-3 sentence summary and pause.
- Offer small "you try it" tasks at checkpoints.

## The store
- Name: **Snoot & Co.**
- Niche: personalized pet-lover gifts (dogs & cats)
- Supply: US-based print-on-demand (e.g. Printify) - no inventory
- Payments: Stripe Payment Links (test mode for version one)
- Hosting: GitHub Pages (free)

## Ask before
- Anything that costs money, publishes online, or can't be undone.

## Version one is done when
The store opens on a phone, shows 3-6 products with photos and prices, and a
Buy button completes a Stripe test-mode purchase.

## Files
- `index.html` - homepage content
- `styles.css` - design (colors at the top under "Brand colors")
- `products.js` - the product list (edit this to change products)
- `shop.js` - builds product cards from products.js
- `shipping-returns.html`, `privacy.html`, `contact.html` - info pages
- `thank-you.html` - shown after checkout (once Stripe redirect is switched on)
- `previews/` - screenshots for checking our work

## Store facts
- Contact email: adtherealone@yahoo.com
- Printify timing: production 2-7 business days + US shipping ~2-5 (we say 3-7)
- Holiday cutoff shown to customers: December 4
- Shipping: flat $6.99 per order, US only
- Live site (once GitHub Pages is on): https://adtherealone1980-jpg.github.io/snoot-and-co/

## Stripe (TEST MODE) - account "Snoot & Co." acct_1UX4FSJEX18d0sxg
Plan (from Stripe implementation planner): Payment Links (no-code) for the store,
Dashboard-created Invoices for custom/bulk orders, Stripe Tax via automatic_tax.
No secret API keys are used or stored in this project - ever.

| store_key  | Product ID          | Price ID                        | Price |
|------------|---------------------|---------------------------------|-------|
| ornament   | prod_VYAjezVG6VFNMX | price_1UX4NvJEX18d0sxgiCeEOFzN  | $22   |
| mug        | prod_VYAkpKUrWeO7A0 | price_1UX4P3JEX18d0sxgPASgrEQP  | $24   |
| bandana    | prod_VYAlHibUG4q13s | price_1UX4PZJEX18d0sxgluOZEEJN  | $26   |
| sweatshirt | prod_VYAlk899nztsS8 | price_1UX4PiJEX18d0sxg7duH9UFF  | $49   |
| canvas     | prod_VYAlTSh2p4LzTL | price_1UX4PpJEX18d0sxgMR29dr0G  | $59   |
| blanket    | prod_VYAlOCbd6hkeED | price_1UX4PvJEX18d0sxgIPau1pzj  | $64   |

Tax codes: txcd_99999999 (general goods); sweatshirt txcd_30011000 (clothing).
All prices are tax-exclusive (tax added at checkout).
Tax settings: ACTIVE (test). Head office in Virginia. Test VA registration taxreg_1UX5XEJEX18d0sxgWDnNzFa7.
Note: account default tax code is txcd_10202000 - always set tax_code explicitly on new products.
Shipping product (flat $6.99/order): prod_VYBvzoP55mDNh8 / price_1UX5XuJEX18d0sxgen3HDGVn (tax code txcd_92010001)

Payment Links (TEST, CURRENT) - all: product line (qty 1-10) + flat $6.99 shipping line (qty 1),
automatic_tax ON, US-only shipping address, required "petname" field, hosted confirmation
asking buyer to email pet photo + order # + pet name. Sweatshirt also has required "size" dropdown.
ornament plink_1UX5YAJEX18d0sxgZOH2tEYD | mug plink_1UX5YWJEX18d0sxg0cRp66N3
bandana plink_1UX5YkJEX18d0sxgX9lHTv5x | sweatshirt plink_1UX5YsJEX18d0sxgUAHAgLuh
canvas plink_1UX5Z5JEX18d0sxgW6rIhQSq | blanket plink_1UX5ZDJEX18d0sxgpoHIazjh
(Old links plink_1UX4... were DEACTIVATED - they had no shipping.)

Why shipping is a line item: Stripe MCP can't create/list Shipping Rates, and the owner's
dashboard rate (shr_...J362GtwOV1...) was made in a DIFFERENT Stripe account/sandbox.
All IDs for THIS account contain "JEX18d0sxg".

### Stripe TODO
- [x] Flat $6.99 shipping added (as a line item on each link)
- [x] Stripe Tax active, head office in VIRGINIA (VA)
- [x] Test VA registration added; automatic_tax ON for all 6 links
- [ ] Owner registers for a VA sales tax certificate with Virginia Tax before live sales
- [ ] After site is live: switch after_completion to redirect to thank-you.html
- [ ] Optional: Settings -> Branding (logo/colors) for checkout + invoices
- [ ] Before going live: recreate products/links in LIVE mode (test objects don't carry over)
- [ ] Before going live (optional): buy a custom domain (~$10-20/yr) and connect it in GitHub Pages.
      Owner chose to KEEP the free github.io address for now (Nov 2026).

## Product images
- Current: AI SAMPLE photos (Higgsfield, gpt_image_2_5, low quality, 0.25 credits each),
  hot-linked from d8j0ntlcm91z4.cloudfront.net. `sample: true` in products.js shows a
  "Sample design" label. Same URLs set as Stripe product images (test mode).
- Cloud sandbox network blocks that CDN, so images are NOT copied into the repo yet.
- TODO: replace with real Printify mockups (owner uploads in chat) -> save in images/,
  set image: "images/<key>.jpg" and sample: false, update Stripe product images.

## Agents
- `product-researcher` - finds trending products/niches
- `store-manager` - maintains products, pages, and links
