( function() {
  const guests = Array.from( document.querySelectorAll('.tableSeating__guest') );
  const searchInput = document.querySelector('.tableSeating__searchInput');
  const searchIcon = document.querySelector('.tableSeating__searchIcon');
  const searchIconClose = document.querySelector('.tableSeating__searchIconClose');

  const displayAllGuests = () => {
    guests.forEach( guest => {
      if ( guest.classList.contains('hide') ) guest.classList.remove('hide');
    } );
  };

  const toggleSearchIcons = value => {
    if ( !value ) {
      searchIcon.classList.remove('hide');
      searchIconClose.classList.remove('show');
      return;
    }

    if ( value === '' ) {
      if ( searchIcon.classList.contains('hide') ) {
        searchIcon.classList.remove('hide');
        searchIconClose.classList.remove('show');
      } 
    } else {
      searchIcon.classList.add('hide');
      searchIconClose.classList.add('show');
    }    
  };

  searchInput.addEventListener( 'input', function(){    
    const value = this.value.toLowerCase().trim();

    toggleSearchIcons( value );
    
    if ( value === '' ) {
      displayAllGuests();  
      return;
    }
    
    guests.forEach( guest => {
      const name = guest.querySelector('.name').textContent.toLowerCase();
      if ( !name.includes( value ) ) {
        guest.classList.add('hide');
      } else {
        guest.classList.remove('hide');
      }
    } );
  } );

  searchIconClose.addEventListener( 'click', () => {
    searchInput.value = '';
    toggleSearchIcons();
    displayAllGuests();
  } )
} )();
