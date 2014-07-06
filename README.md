# Brick-log

> Static fake blog, support for jQuery exercise.

* * *

Brick-log is an educational project, which will be used for jQuery courses.

**Note:** the school where the course is given, the HEPL from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

## jQuery

Lancé en 2006 par [John Resig](http://fr.wikipedia.org/wiki/John_Resig), [jQuery](http://jquery.com) s'est très vite imposé comme une révolution dans le monde de javascript.

Simple à prendre en main, flexible et adaptable, jQuery est la boîte à outils du développeur web.

### La librairie jQuery

Cet exercice est un peu spécial, puisque nous n'allons pas le faire ensemble : vous allez le faire seul, en utilisant toutes les ressources à votre disposition (c'est-à-dire *le monde de l'internet tout entier*) pour répondre aux demandes de l'énoncé.

Dans ce *repository*, vous avez récupéré un mini-site statique, qui représente un article de blog, et vous allez devoir dynamiser un peu le tout grâce à jQuery.

Je vous ai joins la dernière version de jquery dans le dossier `/js/`.  
Le fichier de travail se nomme `/js/script.js`, il est prêt à l'emploi, il n'attend plus que votre code.

* * *

## Énoncé

> **note:** cet exercice *doit* tourner sur un serveur local, puisqu'il fait appel à un petit script php.

Il y a plusieurs choses à faire sur cette page. Les voici : 

1. Il y a certains liens sur la page qui ont un attribut `rel="external"`. Ces liens doivent s'ouvrir dans une nouvelle fenêtre (*on est d'accord, c'est pas forcément la meilleure pratique au monde, mais c'est pour l'exercice, alors zut*).
    
2. Dans la colonne de droite, il y a 3 vignettes dans une section nommée **Trombinoscope**. Il faudrait n'afficher qu'une seule image, et faire un mini-diaporama pour changer de photo toutes les 5 secondes.

3. Toutes les 5 secondes, vous allez faire un appel `AJAX` vers le service situé à l'adresse `/comments.php`, qui vous fournira un nombre aléatoire de commentaires à ajouter dans la page.

4. Pour chaque commentaire, il y a un petit bouton en forme de croix. Au clic sur ce bouton, le commentaire est remplacé par un avertissement de modération, comme montré dans la page.

**Allez hop ! Au boulot !**
* * *

## Ressources credits

This educational project use some external resources : 

* the stylesheet & icons are made using [bootstrap](http://getbootstrap.com)
* the background image of the page are taken from the [awesomewallpapersblog](http://awesomewallpapersblog.com/2010/09/02/misc-wallpaper-set-23/lego-red-1440x900/)
* the "*Outbreak*" zombie attack scene are from [Chris McVeigh](https://www.flickr.com/photos/powerpig)
* the others little photos are from me, using [LEGO Minifigures](http://minifigures.lego.com).
