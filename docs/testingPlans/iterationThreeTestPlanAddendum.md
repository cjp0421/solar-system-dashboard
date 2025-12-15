# Iteration 3 Addendum – Route-Aware Skip Link Behavior

## Purpose

This addendum documents an accessibility-driven refinement introduced in **Iteration 3**:  
the implementation of **route-aware skip links**.

As the application grows beyond a single data page, a globally rendered skip link is no longer appropriate for all routes. This addendum defines when skip links **should** and **should not** be rendered, and how this behavior is validated through navigation-level tests.

---

## Background

In earlier iterations, a skip link was rendered globally in the NavBar:

```
Skip to main data
```

This approach worked when the Moon page was the primary content, but became problematic once a dedicated **Landing Page** and multiple data pages (Moon, Earth) were introduced.

Specifically:

- The Landing Page does **not** contain primary data content.
- The skip link target does **not** exist on the Landing Page.
- Rendering a skip link in this context creates a misleading or broken navigation experience for keyboard and screen reader users.

---

## Design Decision

### Route-aware skip links are required.

The skip link is now treated as **page-specific accessibility affordance**, not a global NavBar feature.

This means:

- **Landing Page (`/`)**
  - ❌ No skip link is rendered
  - Navigation itself is the primary content

- **Data Pages (e.g. `/moon`, `/earth`)**
  - ✅ Skip link is rendered
  - Skip link points to the main data section for that page
  - Skip link allows keyboard users to bypass repeated navigation

---

## Accessibility Rationale

This decision aligns with WCAG guidance:

- Skip links should only be present when there is meaningful content to skip to
- Skip links should not point to non-existent or irrelevant targets
- Keyboard focus order should not include broken or misleading elements

By making skip links route-aware, the application avoids:

- Dead anchor targets
- Confusing screen reader announcements
- Unnecessary focus stops on pages without data content

---

## Test Coverage (Navigation-Level)

This behavior is enforced through **navigation tests**, not page-slice tests.

### NAV-006 – Skip link is NOT rendered on the Landing Page

**Intent**
- Ensure the skip link is absent when there is no main data content.

**Assertions**
- Visiting `/` does not render an element with the `.skip-link` selector.
- Global navigation elements remain unaffected.

---

### Tested in moon.cy.ts and earth.cy.ts – Skip link is rendered on data pages and points to valid content

**Intent**
- Ensure skip links exist only on pages where they are meaningful.

**Assertions**
- Visiting `/moon` or `/earth` renders a visible skip link.
- The skip link `href` points to the correct page-specific target.
- Activating the skip link moves focus or viewport to the target section.

---

## Implementation Notes (Non-Prescriptive)

This addendum intentionally avoids prescribing implementation details.  
However, any valid solution must satisfy the following constraints:

- Skip link rendering is **conditional**, not global
- Skip link target IDs exist on the page where rendered
- Skip link text accurately describes its behavior
- NavBar remains reusable and not hard-coded to specific pages

---

## Impact on Existing Features

- No changes required to Moon or Earth data slice tests
- No changes required to Hero or data rendering logic
- Navigation tests are expanded to include accessibility behavior
- Landing Page semantics are clarified and improved

**Note**: due to testing limitations, the navigation test is more of a conceptual test/documentation - i.e. it did not fail correctly - so this is something to look into further. 

---

## Summary

Iteration 3 introduces a small but important accessibility refinement:

- Skip links are **page-aware**
- Navigation behavior matches user expectations
- Keyboard and screen reader experiences are improved
- The NavBar remains clean and reusable

This change reinforces Iteration 3’s focus on scalability, accessibility, and maintainable UI architecture.