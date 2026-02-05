// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    M.AutoInit();

    // Inicializar tabs swipeables
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems, { swipeable: true });

    // Inicializar sidenav 
    var sidenavs = document.querySelectorAll('.sidenav');
     M.Sidenav.init(sidenavs);
}

