# Iteration 2 – Landing Page & Navigation Flow – Cypress Test Plan

## 1. Overview

**Goal:** Introduce a dedicated **Landing Page** and implement **React Router–based navigation** to the Moon page.  
This iteration establishes the global layout and navigation patterns for the app.

### Scope
- New Landing Page at `/`
- React Router layout (`<NavBar>` + `<Outlet>`)
- Routing to `/moon`
- Updated NavBar (use Router `Link` instead of `href`)
- 404 fallback route
- Updates required for existing Moon tests (now start at `/moon`)

### Out of Scope
- Additional celestial bodies  
- Responsive UI  
- Backend proxy integration  
- Any Moon feature changes (loading, success, error)

---

## 2. Design Reference

Wireframes for this iteration include:

- **Landing Page** – simple navigation entry point  
- **Layout** – NavBar + routed content area  
- **Moon Page** – existing design (now at `/moon`)  
- **Not Found Page** – fallback for invalid routes  

All images saved in:  
`docs/wireframes/iteration2/`

---

## 3. User Story

> **As a user,** I want to begin at a Landing Page and navigate to celestial body pages  
> **so that** I can explore the solar system.

---

## 4. Acceptance Criteria

### Landing Page
1. Visiting `/` loads the Landing Page.
2. NavBar is visible at the top of the page.
3. Landing Page displays a visible, accessible navigation element labeled **“Moon”**.
4. No Moon data or Moon UI is displayed on the Landing Page.

### Navigation
5. Clicking “Moon” navigates to `/moon` without reloading the page.
6. NavBar remains visible across all routes.
7. (Optional) Clicking the NavBar title navigates back to `/`.

### Error Handling
8. Visiting an invalid URL (e.g. `/not-real`) shows a **Not Found** message.
9. Not Found page includes a link or button returning to `/`.

### Moon Slice Impact
10. All Iteration 1 Moon tests now start at `/moon` instead of `/`.

---

## 5. Test Cases

### NAV-001 – Landing Page renders global layout and shows Solar System categories
**Steps**
1. Visit `/`
2. Assert NavBar is visible.
3. Assert app title **“Solar System Dashboard”** is visible in the NavBar.
4. Assert the page heading **“Welcome to the Solar System”** is visible.
5. Assert the **Moons** section heading is visible.
6. Assert the **Planets** section heading is visible.
7. Assert placeholder card items exist under each section (e.g., list items or skeletons).
8. Assert **no Moon page content** appears on this page:
   - No Moon hero
   - No Moon facts heading
   - No Moon data values
   - No Moon-specific layout

**Expected Result**  
The Landing Page shows the global layout and Solar-System-wide navigation categories, but does not render Moon slice UI.

---

### NAV-002 – Clicking “Moon” navigates to `/moon`
**Steps**
1. Visit `/`
2. Click the “Moon” navigation element.
3. Assert URL changes to `/moon`.
4. Assert Moon page heading or success UI appears.
5. Assert NavBar remains visible.
6. Assert the navigation occurs without a full page reload.

**Expected Result**  
User successfully navigates to the Moon page using client-side routing.

---

### NAV-003 – NavBar title returns user home

**Steps**
1. Visit `/moon`
2. Click the NavBar title or Home link.
3. Assert the URL changes to `/`.
4. Assert Landing Page content is visible.

**Expected Result**  
Global navigation correctly returns the user to the Landing Page.

---

### NAV-004 – Invalid routes show 404 page with global layout
**Steps**
1. Visit `/does-not-exist`.
2. Assert the NavBar is visible.
3. Assert the app title **“Solar System Dashboard”** is visible.
4. Assert **“404”** is visible.
5. Assert **“Page not found.”** is visible.
6. Assert footer links are visible (GitHub, LinkedIn, Portfolio).
7. Click the **Home** link in the NavBar.
8. Assert Landing Page appears.

**Expected Result**  
The 404 page displays the correct UI based on the wireframe and allows navigation back home through global layout.

---

## 6. Impact on Existing Tests

### Moon Slice (`moon.cy.ts`) Updates
- Update all `cy.visit('/')` to **`cy.visit('/moon')`**.
- No other changes required—success, loading, and error tests still function normally.
- Navigation Slice tests should **not** test Moon data loading; keep that responsibility in Slice 01.

### App Updates
- Add `LandingPage.tsx`.
- Add `NotFoundPage.tsx`.
- Convert NavBar `href` → React Router `Link`.
- Introduce Layout route with `<Outlet>`.
- Define routes:

```
/        → LandingPage
/moon    → MoonPage (Iteration 1)
/ *      → NotFoundPage
```

---

## 7. Folder Structure (Recommended)

```
src/
  components/
    NavBar.tsx
  routes/
    LandingPage.tsx
    MoonPage.tsx
    NotFoundPage.tsx
    Layout.tsx

cypress/e2e/
  navigation.cy.ts
  moon.cy.ts    (updated)

docs/wireframes/iteration2/
  landing.png
  not-found.png
  layout.png
```

---

## 8. Summary

Iteration 2 introduces the global navigation system for the app:

- Dedicated Landing Page at `/`
- Moon page moved to `/moon`
- NavBar wraps all pages using React Router layout
- Cypress tests validate rendering, routing, error handling
- Existing Moon tests continue unchanged except for route updates

This iteration establishes the foundation for adding additional celestial body pages in future slices.