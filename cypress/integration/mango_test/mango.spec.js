describe('Mango Challenge', () =>{
    it('Navigate to e site', () => {
        cy.visit('http://shop.mango.com/gb')        
    })
    it('close country modal', () => {        
        closeModalCountrySelection();
    })  
    it('close susbcription modal', () => {        
        closeModalSubscribe();
    })    
    it('Click on search button', () => {
        cy.get('#search_icon_button').click()
    })
    it('Search for men ties', () => {
        cy.get('.search-input').type('ties for men{enter}')        
    })
    it('select first item', () => {
        cy.get('.product-list-item.product-layout-4-columns-A1.product-list-item-js').first().click()
    })    
})

function closeModalCountrySelection() {
    cy.wait(5000);
    const $el = Cypress.$('.icon.closeModal.icon__close.desktop.confirmacionPais'); 
    if ($el.length) {
        cy.log('Closing Country Selection');
        cy.get('.icon.closeModal.icon__close.desktop.confirmacionPais').click();
    }
    cy.get('.icon.closeModal.icon__close.desktop.confirmacionPais').should('not.be.visible');
}
function closeModalSubscribe() {
    cy.wait(5000);
    const $el = Cypress.$('#modalClose > span'); 
        if ($el.length) {
        cy.log('Closing Subscription Selection');
        cy.get('#modalClose > span').click();
    }
    cy.get('#modalClose > span').should('not.be.visible');
}
