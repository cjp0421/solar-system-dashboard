describe('Phobos', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=phobos*',
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });
                req.reply({ fixture: 'phobos.json' });
            }
        ).as('getPhobos');
    });
    it('displays the hero section and CTA navigation with Phobos details', () => {
        cy.visit('/phobos');

        cy.get('header').within(() => {
            cy.contains('Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Phobos").should('be.visible');
        cy.contains("Facts About Phobos").should('not.exist');

        cy.get('.phobos-background')
            .should('exist')
            .and('be.visible');

        cy.contains('Go to Phobos Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('h3').contains("Facts About Phobos").should('be.visible');
        cy.url().should('include', '#phobos-facts');
    });
    it('displays Phobos fact cards after successful load', () => {
        cy.visit('/phobos');
        cy.contains('Go to Phobos Data').click();
        cy.wait('@getPhobos');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#phobos-facts').within(() => {
            cy.get('h3').contains("Facts About Phobos").should('be.visible');
            cy.get('div.MuiCard-root').should('have.length', 10);

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });
        cy.get('#phobos-facts').within(() => {
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
        cy.visit('/phobos');
        cy.contains('Go to Phobos Data').click();


        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('exist');

        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('not.exist');

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#phobos-facts').within(() => {
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
            '**/proxy?id=phobos*',
            {
                statusCode: 500,
                body: { message: 'internal error' }
            }
        ).as('getPhobosError');

        cy.visit('/phobos');

        cy.contains('Go to Phobos Data').click();
        cy.wait('@getPhobosError');

        cy.contains('Unable to load data. Please try again later.');

        cy.get('#phobos-facts [role="progressbar"]').should('not.exist');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.contains(/mass/i).should('not.exist');
        cy.contains(/mean radius/i).should('not.exist');
        cy.contains(/gravity/i).should('not.exist');
        cy.contains(/density/i).should('not.exist');
        cy.contains(/orbital period/i).should('not.exist');
        cy.contains(/rotation period/i).should('not.exist');
        cy.contains(/escape velocity/i).should('not.exist');
    });
    it('allows keyboard/screen reader users to skip navigation and jump to the Phobos Data CTA', () => {
        cy.visit('/phobos');

        cy.contains('Skip to main data').focus();

        cy.contains('Skip to main data').click();

        cy.focused().should('have.attr', 'id', 'hero-cta');

        cy.url().should('include', '#hero-cta')
    });
});
