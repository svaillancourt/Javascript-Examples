/**
 * Hamburger Menu.
 */

// Let's grab our menu...
var myNav = document.querySelector( 'nav' );

// And our menu button...
var myNavButton = document.querySelector( '.menu-button' );

// Let's listen for a click on this.
myNavButton.addEventListener( 'click', function ( event ) {
    // When clicked, add/remove the "nav-open" class (in HTML.)
    myNav.classList.toggle( 'nav-open' );
} );