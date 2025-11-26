describe('Moon', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });

                req.reply({ fixture: 'moon.json' });
            }
        ).as('getMoon');

        cy.visit('/');
    });

    it('shows skeleton loaders while data is fetching', () => {
        cy.contains('Go to Moon Data').click();

        cy.get('#moon-facts [role="progressbar"]', { timeout: 10000 })
            .should('exist');

        cy.get('#moon-facts [role="progressbar"]', { timeout: 10000 })
            .should('not.exist');

        cy.get('#moon-facts').within(() => {
            cy.contains('Mass', { timeout: 10000 }).should('be.visible');
            cy.contains('Gravity').should('be.visible');
            cy.contains('Density').should('be.visible');
            cy.contains('Mean Radius').should('be.visible');
            cy.contains('Orbital Period').should('be.visible');
            cy.contains('Rotation Period').should('be.visible');
            cy.contains('Escape Velocity').should('be.visible');
        });
    });
});

