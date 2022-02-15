const cypressDark = require("cypress-dark")

describe('Simple calculator test',()=>{
   it('First test case',()=>{
       cy.visit('https://testsheepnz.github.io/BasicCalculator.html#main-body')
       cy.get('select').shadow().select('2')
   })
})