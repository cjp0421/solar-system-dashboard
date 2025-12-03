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

**Example Cypress Assertion**  
```ts
cy.findByRole("contentinfo").should("be.visible");
```

---

## FOOTER-002 – Footer remains visible while main content scrolls

**Purpose**  
Verify that the Footer stays visible at the bottom of the viewport while the *main content area* scrolls independently between the fixed Header and Footer.

This reflects the intended **framed layout** where:  
- Header is always visible  
- Footer is always visible  
- Only the `<main>` content scrolls  

**Steps**  
1. Visit any route (e.g., `/moon`).  
2. Assert the footer is visible.  
3. Scroll the **main content region**.  
4. Assert that the footer remains visible at the bottom of the viewport.

**Expected Result**  
The Footer remains persistently visible while only the routed content scrolls, confirming correct implementation of the framed layout.

**Example Cypress Assertions**  
```ts
cy.findByRole("contentinfo").should("be.visible");

// scroll the main content area
cy.get('main').scrollTo('bottom');

cy.findByRole("contentinfo").should("be.visible");
```