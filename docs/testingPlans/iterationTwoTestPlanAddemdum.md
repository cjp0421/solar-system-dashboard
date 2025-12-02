# FOOTER Test Additions – Iteration 2

## FOOTER-001 – Footer is visible across all routes

**Purpose**  
Ensure the global Footer component is consistently rendered on all pages, including routed content and the 404 fallback page.

**Scope**  
- Landing Page (`/`)  
- Moon Page (`/moon`)  
- Not Found Page (`/does-not-exist`)

**Steps**  
1. Visit the target route (`/`, `/moon`, or `/does-not-exist`).  
2. Assert that the footer landmark is visible (`role="contentinfo"`).  

**Expected Result**  
The global Footer is displayed on all routes, confirming correct placement within the shared application layout.

**Example Cypress Assertions**  
```ts
cy.findByRole("contentinfo").should("be.visible");
```

---

## FOOTER-002 – Sticky Footer remains visible at bottom of viewport

**Purpose**  
Verify that the Footer is always visible and fixed to the bottom of the viewport, regardless of page content height.

**Steps**  
1. Visit any route (e.g., `/`).  
2. Assert the footer is visible.  
3. Scroll the page.  
4. Assert the footer remains visible at the bottom of the viewport.

**Expected Result**  
A sticky global Footer remains fixed at the bottom of the viewport during scrolling.

**Example Cypress Assertions**  
```ts
cy.findByRole("contentinfo").should("be.visible");
cy.scrollTo("bottom");
cy.findByRole("contentinfo").should("be.visible");
```