describe('Moon', () => {
    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: /proxy.*id=moon.*/
            },
            (req) => {
                req.on('response', (res) => {
                    res.setDelay(300);
                });
                req.reply({ fixture: 'moon.json' });
            }
        ).as('getMoon');

        cy.visit('/');
    });



    it('displays the hero section and CTA navigation', () => {
        // cy.visit('/');
        cy.intercept('GET', '**', (req) => {
            console.log('🌙 CI FETCH URL:', req.url);
        }).as('debugAll');
        cy.get('header').within(() => {
            cy.contains('h6', 'Solar System Dashboard').should('be.visible');
            cy.contains('a', 'About');
        })

        cy.get('h1').contains("Learn More").should('be.visible');
        cy.get('h2').contains("About Earth's Moon").should('be.visible');

        cy.get('img')
            .should('have.attr', 'src', 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg?w=1536&h=864&fit=clip&crop=faces%2Cfocalpoint')

        cy.get('a').contains('Go to Moon Data').click();
        cy.get("#moon-facts").scrollIntoView();

        cy.get('h3').contains("Facts About Earth's Moon").should('be.visible');
        cy.url().should('include', '#moon-facts');
    });
    // MD - 001 - Loading State
    it('shows skeleton loaders while data is fetching', () => {
        // cy.visit('/');
        cy.intercept('GET', '**', (req) => {
            console.log('🌙 CI FETCH URL:', req.url);
        }).as('debugAll');
        cy.contains('Go to Moon Data').click();

        cy.get('#moon-facts').within(() => {
            cy.get('[role="progressbar"]').should('exist');
        })

        cy.wait('@getMoon')

        cy.get('#moon-facts').within(() => {
            cy.contains('Mass').should('be.visible');
            cy.contains('Gravity').should('be.visible');
            cy.contains('Density').should('be.visible');
            cy.contains('Mean Radius').should('be.visible');
            cy.contains('Orbital Period').should('be.visible');
            cy.contains('Rotation Period').should('be.visible');
            cy.contains('Escape Velocity').should('be.visible');

            cy.get('[role="progressbar"]').should('not.exist');
        })
    })
    // MD - 002 - Success State 
    it('displays Moon data after successful load', () => {
        // cy.intercept('GET', '**/proxy?id=moon', {
        //     fixture: 'moon.json',
        // }).as('getMoon');


        // cy.visit('/');
        cy.intercept('GET', '**', (req) => {
            console.log('🌙 CI FETCH URL:', req.url);
        }).as('debugAll');
        cy.contains('Go to Moon Data').click();

        cy.wait('@getMoon');

        cy.get('#moon-facts').within(() => {
            cy.contains("Facts About Earth's Moon").should('be.visible');
        })

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
    })

})