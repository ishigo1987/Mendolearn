module.exports = (data,url='https://youlearn-server.eu-4.evennode.com') =>{
  return new Promise((resolve)=>{
     let xhr = new XMLHttpRequest();
     xhr.addEventListener("load", () =>{
      let xhrResponse = JSON.parse(xhr.responseText);
      resolve(xhrResponse);
     });
     xhr.addEventListener("error", () =>{
       resolve("Pas de connexion internet");
     });
     xhr.responseType = "text";
     xhr.open('POST',url, true);
     xhr.send(data);
  });
 };
 