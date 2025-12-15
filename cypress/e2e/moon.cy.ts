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
    });

    it('displays the hero section and CTA navigation with Moon details', () => {
        cy.visit('/moon');
        cy.get('header').within(() => {
            cy.contains('Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Earth's Moon").should('be.visible');
        cy.contains("Facts About Earth's Moon").should('not.exist');

        cy.get('.moon-background')
            .should('exist')
            .and('be.visible');

        cy.contains('Go to Moon Data').click();
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('h3').contains("Facts About Earth's Moon").should('be.visible');
        cy.url().should('include', '#moon-facts');
    });
    it('shows skeleton loaders while data is fetching', () => {
        cy.visit('/moon');
        cy.contains('Go to Moon Data').click();


        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('exist');

        cy.get('[role="progressbar"]', { timeout: 10000 })
            .should('not.exist');

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#moon-facts').within(() => {
            cy.contains(/mass/i).should('be.visible');
            cy.contains(/mean radius/i).should('be.visible');
            cy.contains(/gravity/i).should('be.visible');
            cy.contains(/density/i).should('be.visible');
            cy.contains(/orbital period/i).should('be.visible');
            cy.contains(/rotation period/i).should('be.visible');
            cy.contains(/escape velocity/i).should('be.visible');
        });
    });
    it('displays Moon data after successful load', () => {
        cy.visit('/moon');
        cy.contains('Go to Moon Data').click();

        cy.wait('@getMoon');


        cy.get('#moon-facts').within(() => {
            cy.contains("Facts About Earth's Moon").should('be.visible');
        });

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.get('#moon-facts').within(() => {
            cy.contains(/mass/i).should('be.visible');
            cy.contains(/mean radius/i).should('be.visible');
            cy.contains(/gravity/i).should('be.visible');
            cy.contains(/density/i).should('be.visible');
            cy.contains(/orbital period/i).should('be.visible');
            cy.contains(/rotation period/i).should('be.visible');
            cy.contains(/escape velocity/i).should('be.visible');

            cy.get('[role="progressbar"]').should('not.exist');
        });

        cy.contains('Unable to load Moon data. Please try again later.').should('not.exist');
    });
    it('shows user-friendly error message on API failure', () => {
        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            {
                statusCode: 500,
                body: { message: 'internal error' }
            }
        ).as('getMoonError');

        cy.visit('/moon');

        cy.contains('Go to Moon Data').click();

        cy.wait('@getMoonError');

        cy.contains('Unable to load data. Please try again later.');

        cy.get('#moon-facts [role="progressbar"]').should('not.exist');

        cy.get("main").scrollTo("bottom", { ensureScrollable: false });

        cy.contains(/mass/i).should('not.exist');
        cy.contains(/mean radius/i).should('not.exist');
        cy.contains(/gravity/i).should('not.exist');
        cy.contains(/density/i).should('not.exist');
        cy.contains(/orbital period/i).should('not.exist');
        cy.contains(/rotation period/i).should('not.exist');
        cy.contains(/escape velocity/i).should('not.exist');
    });
    it('allows retries after an API error', () => {
        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            { statusCode: 500, body: { message: 'fail' } }
        ).as('failMoon');

        cy.visit('/moon');

        cy.contains('Go to Moon Data').click();
        cy.wait('@failMoon');

        cy.contains('Unable to load data').should('be.visible');

        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            { fixture: 'moon.json' }
        ).as('successMoon');

        cy.contains('Go to Moon Data').click();

        cy.wait('@successMoon')

        cy.contains("Facts About Earth's Moon").should('be.visible');
        cy.get("main").scrollTo("bottom", { ensureScrollable: false });
        cy.contains(/mass/i).should('be.visible');
        cy.get('#moon-facts [role="progressbar"]').should('not.exist');
    });
    // Accessibility: this test is intended to do a basic accessibility check
    it('supports basic accessibility via semantic landmarks, headings, loading state, and error announcements', () => {
        cy.visit('/moon');
        // LANDMARKS
        cy.get('main').should('exist');
        cy.get('header').should('exist');

        // HEADING STRUCTURE
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', "Learn More");

        cy.get('h2')
            .should('be.visible')
            .and('contain.text', "About Earth's Moon");

        // ACCESSIBLE LOADING STATE
        cy.contains('Go to Moon Data').click();

        cy.get('[role="progressbar"').should('exist');

        cy.wait('@getMoon');

        cy.get('[role="progressbar"]').should('not.exist');

        // ACCESSIBLE CONTENT REGION
        cy.get('#moon-facts')
            .find('h3')
            .should('contain.text', "Facts About Earth's Moon");

        // ACCESSIBLE ERROR MESSAGE - smoke check, not full flow
        cy.get('body')
            .should('not.contain.text', 'Unable to load Moon data')
    });
    // Accessibility: this test is inttended to practice using 
    it('allows keyboard/screen reader users to skip navigation and jump to the Moon Data CTA', () => {
        cy.visit('/moon');

        cy.contains('Skip to main data').focus();

        cy.contains('Skip to main data').click();

        cy.focused().should('have.attr', 'id', 'hero-cta');

        cy.url().should('include', '#hero-cta')
    })
});
