// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:


require('cypress-xpath')
import './commands'
//This file execute before spec
before(function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log('expectation for cypress')
        return false
    });
    //cy.setCookie('sst-main', 'Sst1|PQFqc9C2X4v6kAtk4-5um6k2C6oijt_GvNJGQyEbSdWcBfgYpWgHyeLH-CXym8REYPEUL8j-8HLWS7FS3YsQ_VedyLML-_-0O394ISTfzVbDhFA_sjRusCc1QuVVNZDPPMK8YyAsg-pz9gljzrZ0Pby1W6jP30ruwKGIAnxOHJL8h1GEUnlIY07oLpLlr3asU64xxfLwyXwFiTfgcR6uiUv9uc5hCrW_LMxToH_-Lyx0o6eTsNKmAJ9pQo5YeTd53yloH9X9xvXg0TQaqPWFFmlMlalP3kt4FSR-kbrmMA5-Wp6MOJZTaM0ChFSQH25sxwKNEEIW4igiiATxgdEoN_1fuA');
    //cy.setCookie('sess-at-main', '"lpfkPj9HDctTVeK4PofpiNJSoXoaX/jTGE+wK+KIHkU="');
    //cy.setCookie('at-main', 'Atza|IwEBID84O2_JzyvjPn7-GVwtbMB2aRFRdRfJOlBi2TTbW3UzTfFP4ckzibhpb1gOwGWD1ZK0HIUAc9qsImCrtCC9-NUAY58s3j1JyRZoiurvnNjP1QweQfIrobpzG_8dygDRjYC8NjTMsr-QqlwgBgOTuO9eBJtTu9VSBvkeVqyYq82w07aXKHkDhBdcEAhhbBcL9-fG6Z1-zo0xNHOuRK7x5dByu-Yp-xoIJnzQ86Ot5ATJSXV8UUOXQ8M5N1np9cRAGKVavuXtaX6zRrfH_nLFVRPL16oNO0E0Bka2TIpuqcxfe9fg4wxH2ba2cgs3tS2WdPKZWA65TtSIcWn1WbLcGHaIj2zEJVqI7hv8bMS2iwyVroZO-LwP3clJxZpGh5yAoAzXcTOEfnTtwZgJg1bYTFDu');
    cy.setCookie('ad-privacy','0');
    cy.setCookie('ad-id','A0YjXBK2x0X5tctxezN7EgE');
    cy.setCookie('abid','16b90c33-4b8d-9fad-66e4-e234b9f36516');
    cy.setCookie('lc-main', 'en_US');
    cy.setCookie('x-main', '"d034XywiSZpeRO5H84AlyTgi?JDRAFv6rG7t7LexPbUI2K3ZWKELd0djWAtUAlEw"');
});





// Alternatively you can use CommonJS syntax:
// require('./commands')
