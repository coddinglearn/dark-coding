const queryString = window.location.search;
const mainUrl = 'http://fumacrom.com/'
if (queryString == '')
    window.alert("Error")
else {
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    document.getElementById('link').setAttribute('href', mainUrl + id)
}
