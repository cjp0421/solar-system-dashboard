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
    // MD - 002 - Success State 
    it('displays Moon data after successful load', () => {
        cy.contains('Go to Moon Data').click();

        cy.wait('@getMoon');

        cy.get('#moon-facts').within(() => {
            cy.contains("Facts About Earth's Moon").should('be.visible');
        });

        cy.get('#moon-facts').within(() => {
            cy.contains('Mass').should('be.visible');
            cy.contains('Mean Radius').should('be.visible');
            cy.contains('Gravity').should('be.visible');
            cy.contains('Density').should('be.visible');
            cy.contains('Orbital Period').should('be.visible');
            cy.contains('Rotation Period').should('be.visible');
            cy.contains('Escape Velocity').should('be.visible');

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.contains('🚨ERROR🚨').should('not.exist');
    });
});
