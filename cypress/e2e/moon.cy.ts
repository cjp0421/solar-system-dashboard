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

    it('displays the hero section and CTA navigation', () => {
        cy.visit('/');
        cy.get('header').within(() => {
            cy.contains('h6', 'Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Earth's Moon").should('be.visible');
        cy.contains("Facts About Earth's Moon").should('not.exist');

        cy.get('img')
            .should(
                'have.attr',
                'src',
                'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg?w=1536&h=864&fit=clip&crop=faces%2Cfocalpoint'
            );

        cy.contains('Go to Moon Data').click();
        cy.get("#moon-facts").scrollIntoView();

        cy.get('h3').contains("Facts About Earth's Moon").should('be.visible');
        cy.url().should('include', '#moon-facts');
    });
    it('shows skeleton loaders while data is fetching', () => {
        cy.visit('/');
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
    it('displays Moon data after successful load', () => {
        cy.visit('/');
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

        cy.visit('/');

        cy.contains('Go to Moon Data').click();

        cy.wait('@getMoonError');

        cy.contains('Unable to load Moon data. Please try again later.');

        cy.get('#moon-facts [role="progressbar"]').should('not.exist');

        cy.contains('Mass').should('not.exist');
        cy.contains('Gravity').should('not.exist');
        cy.contains('Density').should('not.exist');
        cy.contains('Mean Radius').should('not.exist');
        cy.contains('Orbital Period').should('not.exist');
        cy.contains('Rotation Period').should('not.exist');
        cy.contains('Escape Velocity').should('not.exist');
    });
    it('allows retries after an API error', () => {
        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            { statusCode: 500, body: { message: 'fail' } }
        ).as('failMoon');

        cy.visit('/');

        cy.contains('Go to Moon Data').click();
        cy.wait('@failMoon');

        cy.contains('Unable to load Moon data').should('be.visible');

        cy.intercept(
            'GET',
            '**/proxy?id=moon*',
            { fixture: 'moon.json' }
        ).as('successMoon');

        cy.contains('Go to Moon Data').click();

        cy.wait('@successMoon')

        cy.contains("Facts About Earth's Moon").should('be.visible');
        cy.contains('Mass').should('be.visible');
        cy.get('#moon-facts [role="progressbar"]').should('not.exist');
    });
});
