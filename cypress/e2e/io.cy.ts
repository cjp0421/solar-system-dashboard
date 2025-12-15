describe('Io', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=io*',
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });
                req.reply({ fixture: 'io.json' });
            }
        ).as('getIo');
    });
    it('displays the hero section and CTA navigation with Io details', () => {
        cy.visit('/io');

        cy.get('header').within(() => {
            cy.contains('Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Io").should('be.visible');
        cy.contains("Facts About Io").should('not.exist');

        cy.get('.io-background')
            .should('exist')
            .and('be.visible');

        cy.contains('Go to Io Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('h3').contains("Facts About Io").should('be.visible');
        cy.url().should('include', '#io-facts');
    });
    it('displays Io fact cards after successful load', () => {
        cy.visit('/io');
        cy.contains('Go to Io Data').click();
        cy.wait('@getIo');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#io-facts').within(() => {
            cy.get('h3').contains("Facts About Io").should('be.visible');
            cy.get('div.MuiCard-root').should('have.length', 10);

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });
        cy.get('#io-facts').within(() => {
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
    it('shows skeleton loaders while data is fetching', () => {
        cy.visit('/io');
        cy.contains('Go to Io Data').click();


        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('exist');

        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('not.exist');

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#io-facts').within(() => {
            cy.contains(/mass/i).should('be.visible');
            cy.contains(/mean radius/i).should('be.visible');
            cy.contains(/gravity/i).should('be.visible');
            cy.contains(/density/i).should('be.visible');
            cy.contains(/orbital period/i).should('be.visible');
            cy.contains(/rotation period/i).should('be.visible');
            cy.contains(/escape velocity/i).should('be.visible');
        });
    });
    it('shows user-friendly error message on API failure', () => {
        cy.intercept(
            'GET',
            '**/proxy?id=io*',
            {
                statusCode: 500,
                body: { message: 'internal error' }
            }
        ).as('getIoError');

        cy.visit('/io');

        cy.contains('Go to Io Data').click();
        cy.wait('@getIoError');

        cy.contains('Unable to load data. Please try again later.');

        cy.get('#io-facts [role="progressbar"]').should('not.exist');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.contains(/mass/i).should('not.exist');
        cy.contains(/mean radius/i).should('not.exist');
        cy.contains(/gravity/i).should('not.exist');
        cy.contains(/density/i).should('not.exist');
        cy.contains(/orbital period/i).should('not.exist');
        cy.contains(/rotation period/i).should('not.exist');
        cy.contains(/escape velocity/i).should('not.exist');
    });
    it('allows keyboard/screen reader users to skip navigation and jump to the Io Data CTA', () => {
        cy.visit('/io');

        cy.contains('Skip to main data').focus();

        cy.contains('Skip to main data').click();

        cy.focused().should('have.attr', 'id', 'hero-cta');

        cy.url().should('include', '#hero-cta')
    });
});
