describe('Mango Challenge', () =>{

    it('Navigate to e site', () => {
        cy.visit('http://shop.mango.com/gb')        
    })
    it('close fisrt pop up', () => {
        closeModal();      
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

function closeModal() {
    cy.wait(5000);
    cy.get('.icon.closeModal.icon__close.desktop.confirmacionPais').click();
}
