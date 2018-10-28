// localStorage.clear();
const themeColor = require('./helpers/themeColor.js')();
require('./modules/tabrisUi.js')(`dark`, `#186cb7`, themeColor);
const {device} = require('tabris');
if(device.version < 21){
  // A voir
  // require("./views/warningForAndroid4x.js").create();
}else{
  let storeMendolearnUserInfos = localStorage.getItem("storeMendolearnUserInfos");
      storeMendolearnUserInfos = JSON.parse(storeMendolearnUserInfos);
  if(storeMendolearnUserInfos !== null){
    // home.js
    // require("./views/home.js")create();
  }else{
    // firstPage.js

  }
}
