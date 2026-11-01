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
- `previews/` - screenshots for checking our work

## Store facts
- Contact email: adtherealone@yahoo.com
- Printify timing: production 2-7 business days + US shipping ~2-5 (we say 3-7)
- Holiday cutoff shown to customers: December 4

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
Tax settings status: PENDING - head office address missing (owner sets in Dashboard).

Payment Links (TEST) - all: US-only shipping address, required "petname" text field,
qty 1-10, hosted confirmation asking buyer to email pet photo + order # + pet name.
Sweatshirt link also has a required "size" dropdown (S-2XL).
ornament plink_1UX4UkJEX18d0sxgCgcWNcQM | mug plink_1UX4VNJEX18d0sxgrQzaAPeN
bandana plink_1UX4VgJEX18d0sxgNza5QPC9 | sweatshirt plink_1UX4VyJEX18d0sxgKdQVhiCd
canvas plink_1UX4WBJEX18d0sxgdAZ9IxH6 | blanket plink_1UX4WKJEX18d0sxgPDWSZA3S

### Stripe TODO
- [ ] Owner creates $6.99 "Standard shipping" rate in Dashboard -> attach to all 6 links
- [ ] Owner sets head office address (Settings -> Tax) + tells us their state
- [ ] Add test tax registration, then enable automatic_tax on all 6 links
- [ ] After site is live: switch after_completion to redirect to our own thank-you page
- [ ] Optional: Settings -> Branding (logo/colors) for checkout + invoices
- [ ] Before going live: recreate products/links in LIVE mode (test objects don't carry over)

## Agents
- `product-researcher` - finds trending products/niches
- `store-manager` - maintains products, pages, and links
