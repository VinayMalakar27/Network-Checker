//Network connection checking app
/*
details about the current network type(wifi - celluar,etc)
// steps:
1. use the network information API to get the network status and type.
2.display the network connection type (wifi , celluar) and status (online/offline).
3. provide a button to manually check the network status again
*/

function checkNetworkStatus(){
    updateNetworkStatus();

}

function updateNetworkStatus(){
    const statusElement = document.getElementById('status');

    if(navigator.onLine){
        statusElement.innerHTML = 'you are Online <br> NEtwork type:' + getNetworktype();
        statusElement.className = 'status online';
    } else{
        statusElement.innerHTML = 'You are Offline';

        statusElement.className = 'status offline';
    }
}

function getNetworktype(){
    if(navigator.connection){
        console.log(navigator.connection);
        const connectionType = navigator.connection.effectiveType || 'Unknown';
        return connectionType;
    } else{
        return 'Network Information API not Supported'
    }
}

//run the initial network
window.onload = updateNetworkStatus;

//listen for changes in the network connection (online / offline)

window.addEventListener('online',updateNetworkStatus);
window.addEventListener('offline',updateNetworkStatus);
