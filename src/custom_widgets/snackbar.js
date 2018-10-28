module.exports = (widgetToAttach,heightValue,firstTextSnackbar,secondTextSnackbar,themeColorTabris,delayOfHidingSnackbar = 3000) =>{
   // Single line height = 48dp = 36px but i choose 40px
   //Multi lines height = 80dp = 60px
   return new Promise((resolve)=>{
      const {Composite,TextView} = require('tabris');
      const snackbar = new Composite({ bottom:0,left:0,right:0,height:heightValue,background:"#323232",transform:{translationY:heightValue}}).appendTo(widgetToAttach);
      new TextView({font:"normal 14px roboto, noto",left:15,right:120,centerY:0,text:firstTextSnackbar,textColor:"#fff"}).appendTo(snackbar);
      if(secondTextSnackbar !== undefined){
        new TextView({right:15,highlightOnTouch:true,centerY:0,text:secondTextSnackbar.toUpperCase(),textColor:themeColorTabris})
        .on("tap", () =>{
            closeSnackbar();
            resolve("Action Snackbar Clicked");
        }).appendTo(snackbar);
      }
 
      function openSnackbar(){
          snackbar.animate({
              transform:{translationY:0}
            }, {
              delay:0,
              duration:150,
              repeat:0,
              reverse:false,
              easing: "ease-out"
            } 
          ).then(()=>{
            if(delayOfHidingSnackbar !== "infinite"){
              // i replace delay by setTimeout for some design purposes
              setTimeout(()=>{closeSnackbar();},delayOfHidingSnackbar);
            }
          });
        }
      function closeSnackbar(){
          snackbar.animate({
              transform:{translationY:heightValue}
            }, {
              delay:0,
              duration:150,
              repeat:0,
              reverse:false,
              easing: "ease-out"
            } ).then(()=>{snackbar.dispose();});
        }   
      openSnackbar();
   });
};