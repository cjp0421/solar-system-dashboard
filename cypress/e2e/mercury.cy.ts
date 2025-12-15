describe('Mercury', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/proxy?id=mercury*',
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });
                req.reply({ fixture: 'mercury.json' });
            }
        ).as('getMercury');
    });
    it('displays the hero section and CTA navigation with Mercury details', () => {
        cy.visit('/mercury');

        cy.get('header').within(() => {
            cy.contains('Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Mercury").should('be.visible');
        cy.contains("Facts About Mercury").should('not.exist');

        cy.get('.mercury-background')
            .should('exist')
            .and('be.visible');

        cy.contains('Go to Mercury Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('h3').contains("Facts About Mercury").should('be.visible');
        cy.url().should('include', '#mercury-facts');
    });
    it('displays Mercury fact cards after successful load', () => {
        cy.visit('/mercury');
        cy.contains('Go to Mercury Data').click();
        cy.wait('@getMercury');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#mercury-facts').within(() => {
            cy.get('h3').contains("Facts About Mercury").should('be.visible');
            cy.get('div.MuiCard-root').should('have.length', 10);

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });
        cy.get('#mercury-facts').within(() => {
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
        cy.visit('/mercury');
        cy.contains('Go to Mercury Data').click();


        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('exist');

        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('not.exist');

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#mercury-facts').within(() => {
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
            '**/proxy?id=mercury*',
            {
                statusCode: 500,
                body: { message: 'internal error' }
            }
        ).as('getMercuryError');

        cy.visit('/mercury');

        cy.contains('Go to Mercury Data').click();
        cy.wait('@getMercuryError');

        cy.contains('Unable to load data. Please try again later.');

        cy.get('#mercury-facts [role="progressbar"]').should('not.exist');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.contains(/mass/i).should('not.exist');
        cy.contains(/mean radius/i).should('not.exist');
        cy.contains(/gravity/i).should('not.exist');
        cy.contains(/density/i).should('not.exist');
        cy.contains(/orbital period/i).should('not.exist');
        cy.contains(/rotation period/i).should('not.exist');
        cy.contains(/escape velocity/i).should('not.exist');
    });
    it('allows keyboard/screen reader users to skip navigation and jump to the Mercury Data CTA', () => {
        cy.visit('/mercury');

        cy.contains('Skip to main data').focus();

        cy.contains('Skip to main data').click();

        cy.focused().should('have.attr', 'id', 'hero-cta');

        cy.url().should('include', '#hero-cta')
    });
});
