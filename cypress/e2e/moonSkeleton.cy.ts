describe('Moon', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            (req) => {
                req.reply({ fixture: 'moon.json' });
            }
        ).as('getMoon');

        cy.visit('/');
    });

    it('shows skeleton loaders while data is fetching', () => {
        cy.contains('Go to Moon Data').click();

        cy.wait(40);

        cy.get('#moon-facts [role="progressbar"]').should('exist');

        cy.wait('@getMoon');

        cy.get('#moon-facts').within(() => {
            cy.contains('Mass').should('be.visible');
            cy.contains('Gravity').should('be.visible');
            cy.contains('Density').should('be.visible');
            cy.contains('Mean Radius').should('be.visible');
            cy.contains('Orbital Period').should('be.visible');
            cy.contains('Rotation Period').should('be.visible');
            cy.contains('Escape Velocity').should('be.visible');

            cy.get('[role="progressbar"]').should('not.exist');
        });
    });
});

