describe('Navigation and Landing Page', () => {
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

        cy.findByRole('contentinfo').should('be.visible');

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
    })
})