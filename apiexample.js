// $.get('https://openapi.etsy.com/v2/listings/active?api_key=2zj54t521846d3qz5ov9271s',  // url
//       function (data, textStatus, jqXHR) {  // success callback
//           console.log(data);
//     });





    // Create the XHR object.

// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//       // XHR for Chrome/Firefox/Opera/Safari.
//       xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//       // XDomainRequest for IE.
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
//     } else {
//       // CORS not supported.
//       xhr = null;
//     }
//     return xhr;
// }
  
// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//     return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
// // This is a sample server that supports CORS.
// var url = 'https://openapi.etsy.com/v2/listings/active?api_key=2zj54t521846d3qz5ov9271s';

// var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//         alert('CORS not supported');
//         return;
// }

// // Response handlers.
// xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
// };

// xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
// };

// xhr.send();
// }





// https://openapi.etsy.com/v2/listings/active?api_key=2zj54t521846d3qz5ov9271s
