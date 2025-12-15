describe('Earth', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=earth*',
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });
                req.reply({ fixture: 'earth.json' });
            }
        ).as('getEarth');
    });
    it('displays the hero section and CTA navigation with Earth details', () => {
        cy.visit('/earth');

        cy.get('header').within(() => {
            cy.contains('Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Earth").should('be.visible');
        cy.contains("Facts About Earth").should('not.exist');

        cy.get('.earth-background')
            .should('exist')
            .and('be.visible');

        cy.contains('Go to Earth Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('h3').contains("Facts About Earth").should('be.visible');
        cy.url().should('include', '#earth-facts');
    });
    it('displays Earth fact cards after successful load', () => {
        cy.visit('/earth');
        cy.contains('Go to Earth Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#earth-facts').within(() => {
            cy.get('h3').contains("Facts About Earth").should('be.visible');

            cy.get('div.MuiCard-root').should('have.length', 10);

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });
        cy.get('#earth-facts').within(() => {
            cy.contains(/mass/i).should('be.visible');
            cy.contains(/mean radius/i).should('be.visible');
            cy.contains(/gravity/i).should('be.visible');
            cy.contains(/density/i).should('be.visible');
            cy.contains(/orbital period/i).should('be.visible');
            cy.contains(/rotation period/i).should('be.visible');
            cy.contains(/escape velocity/i).should('be.visible');

            cy.get('[role="progressbar"]').should('not.exist');
        });
    });
});
