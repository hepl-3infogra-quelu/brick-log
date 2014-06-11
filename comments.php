<?php
/* HEPL RIA 2014 - Cours
 *
 * PHP Document - /comments.php
 *
 * coded by leny
 * started at 14/09/13
 */

// Note: Ce script est dégueulasse. Mais c'est du php, j'aime plus le php. Faut pas m'en vouloir, c'est viscéral.

function getRandAuthor() {
	$aNames = array( 'adalbert', 'francky', 'gontrand', 'théophile', 'éliane', 'markus' );
	$aDomains = array( 'gmail.com', 'hotmail.com', 'live.be' );
	$iNameIndex = array_rand( $aNames );
	return array(
		'name' => ucfirst( $aNames[ $iNameIndex ] ),
		'email' => $aNames[ $iNameIndex ] . rand( 0,999 ) . '@' . $aDomains[ array_rand( $aDomains ) ]
	);
} // getRandAuthor

function getRandContent() {
	$aSentences = array( "Li Europan lingues es membres del sam familie.", "Lor separat existentie es un myth.", "Por scientie, musica, sport etc, litot Europa usa li sam vocabular.", "Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.", "Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.", "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.", "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues.", "Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues." );
	$iParagraphs = rand( 1, 5 );
	$sText = '';
	for( $i = 0; $i < $iParagraphs; $i++ ) {
		$iSentences = rand( 1, 3 );
		$sText .= '<p>';
		for( $j = 0; $j < $iSentences; $j++ ) {
			$sText .= $aSentences[ array_rand( $aSentences ) ] . ' ';
		}
		$sText .= '</p>';
	}
	return $sText;
} // getRandContent

$iCommentAmount = rand( 1, 3 );
$aComments = array();

for( $i = 0; $i < $iCommentAmount; $i++ ) {
	$aComment = array(
		'date' => time() - ( 3 - $i ),
		'author' => getRandAuthor(),
		'content' => getRandContent()
	);
	array_push( $aComments, $aComment );
}

header( 'Content-Type: text/javascript; charset=UTF-8' );
die( json_encode( $aComments ) );
