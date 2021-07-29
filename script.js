//_______________________________________ API ENDPOINTS ____________________________________________________________
baseUrl = 'http://api.coinlayer.com/api/'
key = 'ce2620e0f1086a1790b167f60d66e0a5'
liveUrl = 'http://api.coinlayer.com/api/live?access_key=ce2620e0f1086a1790b167f60d66e0a5'
historicalUrl = 'http://api.coinlayer.com/api/2015-11-25?access_key=ce2620e0f1086a1790b167f60d66e0a5' // change YYYY-MM-DD to desired date \\
listUrl =  'http://api.coinlayer.com/api/list?access_key=ce2620e0f1086a1790b167f60d66e0a5'
//__________________________________________________________________________________________________________________
//_______________________________________ Dom ______________________________________________________________________
//_____________________________________ Variables __________________________________________________________________
const btcCard = document.querySelector('.btc-card-body');
const ethCard = document.querySelector('.eth-card-body');
const adaCard = document.querySelector('.ada-card-body');
const btcText = document.querySelector('.btc-card-text');
const ethText = document.querySelector('.eth-card-text');
const adaText = document.querySelector('.ada-card-text');
//__________________________________________________________________________________________________________________
//______________________________________ Fetch _____________________________________________________________________
//____________________________________ Functions ___________________________________________________________________
const fetchCryptoList = async () => {
    for(let i=0; i <= 387; i++){
        await fetchList(i);
    }
}
async function fetchLive(){
    const url = liveUrl
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayLive(data);
}
fetchLive();
async function fetchList(){
    const url = listUrl
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayList(data);
}
fetchList();
async function fetchHistorical(){
    const url = historicalUrl
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayHistorical(data);
}
fetchHistorical();
//__________________________________________________________________________________________________________________
//_______________________________________ Display __________________________________________________________________
//______________________________________ Functions _________________________________________________________________
function displayLive(data){
    const adaPrice = data.rates.ADA;
    adaText.innerText = adaPrice;
}
function displayList(data){}
function displayHistorical(data){}