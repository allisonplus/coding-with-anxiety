$( function() {
	$( '.show-info' ).on( 'click', function() {
		$( '.modal-container' ).addClass( 'show' );
	});

	$( '.close-button' ).on( 'click', function() {
		$( '.modal-container' ).removeClass( 'show' );
	});
} );
