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
})