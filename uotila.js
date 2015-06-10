#! /usr/bin/env node


/**
 * Ok, maybe I should get some sleep @ night...
 */

var say = require('say'),
    theGreatestPlaceOnEarth = [
        '','','','UUUUUUUU     UUUUUUUU                         tttt            iiii  lllllll','U::::::U     U::::::U                      ttt:::t           i::::i l:::::l','U::::::U     U::::::U                      t:::::t            iiii  l:::::l','UU:::::U     U:::::UU                      t:::::t                  l:::::l',' U:::::U     U:::::U   ooooooooooo   ttttttt:::::ttttttt    iiiiiii  l::::l   aaaaaaaaaaaaa',' U:::::D     D:::::U oo:::::::::::oo t:::::::::::::::::t    i:::::i  l::::l   a::::::::::::a',' U:::::D     D:::::Uo:::::::::::::::ot:::::::::::::::::t     i::::i  l::::l   aaaaaaaaa:::::a',' U:::::D     D:::::Uo:::::ooooo:::::otttttt:::::::tttttt     i::::i  l::::l            a::::a',' U:::::D     D:::::Uo::::o     o::::o      t:::::t           i::::i  l::::l     aaaaaaa:::::a',' U:::::D     D:::::Uo::::o     o::::o      t:::::t           i::::i  l::::l   aa::::::::::::a',' U:::::D     D:::::Uo::::o     o::::o      t:::::t           i::::i  l::::l  a::::aaaa::::::a',' U::::::U   U::::::Uo::::o     o::::o      t:::::t    tttttt i::::i  l::::l a::::a    a:::::a',' U:::::::UUU:::::::Uo:::::ooooo:::::o      t::::::tttt:::::ti::::::il::::::la::::a    a:::::a','  UU:::::::::::::UU o:::::::::::::::o      tt::::::::::::::ti::::::il::::::la:::::aaaa::::::a','    UU:::::::::UU    oo:::::::::::oo         tt:::::::::::tti::::::il::::::l a::::::::::aa:::a','      UUUUUUUUU        ooooooooooo             ttttttttttt  iiiiiiiillllllll  aaaaaaaaaa  aaaa','','','','------------------------------------------','   http://fi.wikipedia.org/wiki/Uotila','------------------------------------------',
    ].join("\n"),

    theGreatestSongOnEarth = [
        'Uotila','UoUoUo','UoUoUo','lalalaa','Uotila','Uotila','Uotila','Uu','Uotila','UoUoUo','UoUoUo','lalalaa','Uotila','Uotila','Uotila','Uu','Uotila','UoUoUo','UoUoUo','lalalaa','Uotila','Uotila','Uotila','Uu'
    ].join("\n");



/**
 * Let the magic begin =>
 */

console.log(theGreatestPlaceOnEarth);
say.speak('Cellos',theGreatestSongOnEarth);