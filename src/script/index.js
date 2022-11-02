const hamburger = document.querySelector('.mobile-nav-hamburger');
const tabs = document.querySelector('.mobile-nav-tabs');
const hamburgers = document.querySelector('.hamburgers')
const tab = Array.from(document.getElementsByClassName('mobile-nav-tab'));
const contact_us = document.querySelector('.mobile-contact-us')
const classes = tabs.classList
const cancel_button = document.querySelector('.mobile-nav-cancel')
hamburgers.addEventListener('click', () => {
    if (classes.contains('passive')) {
        classes.remove('passive')
        tabs.setAttribute('style', `
        padding-bottom: 6vh;
        position:absolute;
        display:flex;
        flex-direction: column;
        justify-content : space-around;
        align-items : flex-start;
        right:  -3vh;
        top : 0;
        height : 100vh ;
        background-color : 	#CBD8D7;
        z-index : +1;
        width:80vw;
        width: 300px;
        border-left: 1px solid #282738;
        'transition: width 0.25s ease-in-out,height 0.25s ease-in-out;'
        `
        )
        tab.forEach(e => {
            e.setAttribute('style', 'display:block')
        });
        contact_us.setAttribute('style', 'display:block')
        cancel_button.setAttribute('style', 'display:flex')
        classes.add('flex')
        classes.add('active')
        hamburgers.setAttribute('style', 'display : none')
        hamburger.setAttribute('style', `
        width : 0 ;
        height : 0  ;
        `
        )
    } else {
        
    }

})

cancel_button.addEventListener('click', () => {
    if(classes.contains('active')){ 
        tabs.setAttribute('style', '')
        classes.remove('flex')
        classes.remove('active')
        classes.add('passive')
        hamburger.setAttribute('style', ``)
        tab.forEach(e => {
            e.setAttribute('style', 'display:none')
        });
        contact_us.setAttribute('style', 'display:none')
        hamburgers.setAttribute('style', 'display : flex')
        cancel_button.setAttribute('style', 'display:none')
        console.log(tabs.attributes)
    }
})


var copium = `.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.              
(@%(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((%@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(             ,/#&%%(*.     ,/(%%&#(,                                                                                                                                   (@(              
(@(           ,(((* ../%/,. ,/#%/...*((#*                                                                                                                                 (@(              
(@(           /&(.,***,...  *#(*.     (@(                                                                                                                                 (@(              
(@(         .,(&%#(*//#%/.  ,/(#*   ,/%@#,.                                                                                                                               (@(              
(@(          .(@(.    ,/(#*   ,(#&@@#/#&/.                                                                                                                                (@(              
(@(           /&(.    ,/(#* .,,,.    ./&*                                                                                                                                 (@(              
(@(           ,/(#(//((#/.  .,/#(///(#/*.                                                                                                                                 (@(              
(@(             .,,,,,,.       .,,,,,..                                                                                                                                   (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                  ..,*/(#%&&@@@@@&&%#(/*,.                                                                                             (@(              
(@(                                               ,*(%&@@@@@@@@@@@@@@@@@@@@@&#(*.                                                                                         (@(              
(@(                                             *#&@@@@@@@@&#(//////((#&@@@@@@@@%#*                                                                                       (@(              
(@(                                           /&@@@@@@&%/.               .(&@@@@@@%(,                                                                                     (@(              
(@(                                         *#&@@@@@#*.                     ,/%@@@@@#*.                                                                                   (@(              
(@(                                       .*#@@@@@#*.                         ,(%@@@@&/                   ..,**///////**,.                                                (@(              
(@(                                       /&@@@@&#*                             (@@@@@#*.              ./#%&&@@@@@@@@@@@&&#(*                                             (@(              
(@(                                      .(@@@@@(.                                                  ,(%@@@@@@@@@@@@@@@@@@@@@@&(.                                          (@(              
(@(                                     ,/%@@@@&/                                                 ,(%@@@@@&#/,.       ,*(%&@@@@@#,.                                       (@(              
(@(                                     *#&@@@&#*                                               .,#@@@@@%/,               *(&@@@@&(.                                      (@(              
(@(                                     *%&@@@%(,                                               *%&@@@&#*                   /&@@@@%/,                                     (@(              
(@(                                     *%&@@@%(,                                              .(@@@@@(.                    ,/%@@@@&/                                     (@(              
(@(                                     *#&@@@%(,                                             .*#@@@@&/                       (@@@@@(                                     (@(              
(@(                                     ,(%@@@&%*                                             ,/%@@@&%*                       (@@@@@(.                                    (@(              
(@(                                     .*#@@@@@/                                             ,(%@@@&#*                       (@@@@@#,.                                   (@(              
(@(                                       (@@@@@#*.                             ,((###/*.     .*#@@@@&/                       (@@@@@(.                                    (@(              
(@(                                       *#&@@@@&/.                          .,#@@@@@(.      .,#@@@@@(.                    .*#@@@@@/                                     (@(              
(@(                                        .(&@@@@&#*                        ./&@@@@&#*         /&@@@@%(,                   /%&@@@%(,                                     (@(              
(@(                                         .,#@@@@@&%/,.                 .,(%&@@@@@(.          .*#@@@@@#*.               ,(%@@@@@(.                                      (@(              
(@(                                           .*#@@@@@@@&#/,.         .,(%&@@@@@@@(.              *#&@@@@@%/,           *(%@@@@@#*.                                       (@(              
(@(                                             .*(%&@@@@@@@@@&&&&&&@@@@@@@@@@&%(,.                 *#&@@@@@@@%##(((#%&@@@@@@&#/,                                         (@(              
(@(                                                 ,/(#%&@@@@@@@@@@@@@@@&%#(*,                       ,/(#&@@@@@@@@@@@@@@&%#/,.                                           (@(              
(@(                                                     ..,,*///((((/**,,..                               .,**//(((((/*,,..                                               (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                   .,*(//,.                            .**,.                                                                           (@(              
(@(                                                 *(((/,**/#/,.    ....      .  ....    .*,,.  .           .....    ...                                                 (@(              
(@(                                               .,/%*       ,*. .,/(/*//*,. *#(/**/(//, ,/**. ,(,   ,/,.. /%(*//((////(#*                                               (@(              
(@(                                               .*/(,           /&/.   ./%* *%(*.  ./%/ ,(/*. *%*   ,(*,../&/   /&(.  *%/.                                              (@(              
(@(                                               .,/#*       .*. /&/     /&/ *%/.    *#/,*(/*. *%*   ,(*,../%*   /&/   *#*.                                              (@(              
(@(                                                 *#(*,..,*((/, *#/,,.,,/(, *%#(*.,,(%/ ,(/*. /&(,,./%(,../%*   /&/   *#*.                                              (@(              
(@(                                                   ,//////*,     ,**///,   *%(****/*,. .,,.  .,*//***,.  ,*.   ,/,   .*.                                               (@(              
(@(                                                                           *%/.                                                                                        (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
(@(                                                                                                                                                                       (@(              
*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*`
console.log(copium)