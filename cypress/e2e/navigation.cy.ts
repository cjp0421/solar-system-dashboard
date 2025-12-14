describe('Navigation, Landing Page, and Global Layout', () => {
    it('dislays the landing page which renders the global layout and solar system categories', () => {
        cy.visit('/')

        cy.findByRole('navigation').should('be.visible');

        cy.findByRole('navigation')
            .findByRole('link', { name: /solar system dashboard/i })
            .should('be.visible');

        cy.findByRole('heading', { name: /welcome to the solar system/i })
            .should('be.visible');

        cy.findByRole('heading', { name: /moons/i }).should('be.visible');
        cy.findByRole('heading', { name: /planets/i }).should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /github/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /linkedin/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /portfolio/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findAllByText(/©/i)
            .should('be.visible');
    });
    it('navigates to Moon Page via card click', () => {
        cy.visit('/');
        cy.contains("Earth's Moon").click();

        cy.url().should('include', '/moon');
        cy.get('h1').contains("Learn More").should('be.visible');

        cy.findByRole('navigation')
            .findByRole('link', { name: /solar system dashboard/i })
            .should('be.visible');
    });
    it('navigates to the Landing Page when the NavBar title is clicked', () => {
        cy.visit('/moon');

        cy.findByRole('navigation')
            .findByRole('link', { name: /solar system dashboard/i })
            .click();
        cy.get('h1')
            .contains('Welcome to the Solar System')
            .should('be.visible');

    });
    it('navigates to the NotFoundPage inside the global layout', () => {
        cy.visit('/does-not-exist');
        cy.findByRole('navigation')
            .findByRole('link', { name: /solar system dashboard/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /github/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /linkedin/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findByRole('link', { name: /portfolio/i })
            .should('be.visible');

        cy.findByRole('contentinfo')
            .findAllByText(/©/i)
            .should('be.visible');

        cy.findByRole('heading', { name: /404/i })
            .should('be.visible');

        cy.get('h2').contains('Page not found.');
        cy.findByRole('heading', { name: /Page not found./i })
            .should('be.visible');

        cy.findByRole('navigation')
            .findByRole('link', { name: /solar system dashboard/i })
            .click();

        cy.findByRole('heading', { name: /welcome to the solar system/i })
            .should('be.visible');
    });
    it('displays the footer across all routes', () => {
        ["/", "/moon", "/does-not-exist"].forEach(route => {
            cy.visit(route);
            cy.findByRole("contentinfo").should("be.visible");
        });
    });
    it("keeps the footer visible while the main content scrolls", () => {
        cy.visit("/moon");

        cy.findByRole("contentinfo").then(($footer) => {
            const rect = $footer[0].getBoundingClientRect();
            const viewportHeight = Cypress.config("viewportHeight");

            expect(rect.top).to.be.gte(0);
            expect(rect.bottom).to.be.lte(viewportHeight);
        });

        cy.contains("Go to Moon Data").click();
        cy.get("#moon-facts").should("exist");

        cy.get("#moon-facts [role='progressbar']").should("not.exist");

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.findByRole("contentinfo").then(($footer) => {
            const rect = $footer[0].getBoundingClientRect();
            const viewportHeight = Cypress.config("viewportHeight");

            expect(rect.top).to.be.gte(0);
            expect(rect.bottom).to.be.lte(viewportHeight);
        });
    });
    it('displays Earth navigation link and navigates to Earth page via card click', () => {
        cy.visit('/');

        cy.get('[href="/solar-system-dashboard/earth"]').should('be.visible').click();

        cy.url().should('include', '/solar-system-dashboard/earth');
        cy.get('h1').contains('Learn More').should('be.visible');
    });
})