/* HEPL RIA 2014 - Cours
 *
 * JS Document - /js/script.js
 *
 * coded by leny
 * started at 22/09/2014
 */

/* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

( function( $ ) {

    var $trombinoFigures, $commentTemplate, $comments;

    var _startTrombino = function() {
        var $current = $trombinoFigures.filter( ":visible" ),
            _ref,
            $next = ( _ref = $current.next() ).size() ? _ref : $trombinoFigures.first();
            $current.fadeOut( "fast", function() {
                $next.fadeIn( "fast" );
            } );
    };

    var _fetchComments = function() {
        $.ajax( {
            url: "/comments.json",
            type: "get",
            responseType: "json",
            error: function( oXHR, sStatus, oError ) {
                console.error( "Shit happens:", oError );
            },
            success: function( oResponse ) {
                var _i = -1, oComment, $comment;
                for( ; oComment = oResponse[ ++_i ] ; ) {
                    ( $comment = $commentTemplate.clone() )
                        .hide()
                        .find( "h4 strong" )
                            .text( oComment.author.name )
                            .end()
                        .find( "p" )
                            .text( oComment.content )
                            .end()
                        .appendTo( $comments )
                        .fadeIn( "fast" );
                }
            }
        } );
    };

    var _moderateComment = function( e ) {
        e.preventDefault();
        $( this )
            .parent()
                .removeClass( "alert-block" )
                .removeClass( "alert-info" )
                .addClass( "alert-error" )
                .empty()
                .text( "Ce commentaire a été modéré." );
    };

    $( function() {
        // step one
        $( 'a[rel="external"]' ).attr( "target", "_new" );

        // step two
        ( $trombinoFigures = $( "#trombino figure" ) ).hide().first().show();
        setInterval( _startTrombino, 3000 );

        // step three
        $commentTemplate = ( $comments = $( "#comments ol" ) ).find( "li" ).first().clone();
        _fetchComments();
        setInterval( _fetchComments, 5000 );

        // step four
        $comments.on( "click", ".close", _moderateComment );
    } );

} )( jQuery );
