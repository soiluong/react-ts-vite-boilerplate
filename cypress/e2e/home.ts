describe('home', () => {
  it('should boot up', () => {
    cy.visit('/')
    cy.findByText('Learn React')
  })
})
