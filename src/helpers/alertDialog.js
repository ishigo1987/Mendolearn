module.exports = (titleAd,messageAd,okButton,cancelButton,inputArray = [])=>{
  return new Promise((resolve)=>{
      new tabris.AlertDialog({
          title:titleAd,
          message:messageAd,
          textInputs:inputArray,
          buttons: {
            ok:okButton,
            cancel:cancelButton
          }
        }).on({
          closeOk: (e) => {
            if(inputArray.length !== 0){
              resolve({message:"button ok",valueTextInput:e.target.textInputs[0].text});
            }else{
              resolve({message:"button ok"});
            }
          },
          closeCancel: () => {resolve("button cancel");}
        }).open();
  });
    
}