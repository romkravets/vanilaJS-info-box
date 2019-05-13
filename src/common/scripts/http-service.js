export class HTTPServece {
   get(url, successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4) {
          if (xhr.status === 200) {
             const prsedData = JSON.parse(xhr.response);
             successCallback(prsedData);
          } else {
            errorCallback(xhr);
            }
         }
      }
   }
}