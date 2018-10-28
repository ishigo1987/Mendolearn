module.exports = (actionCallVariable, titleSubMenu, image, placementPriority, navigationViewInsertion,actionId = "") =>{
  const {device,Action} = require('tabris');
  let scalePercent;
  device.platform === "Android" ? scalePercent = 2.5 : scalePercent = 1.1
  actionCallVariable = new Action({
    title:titleSubMenu,
    placementPriority: placementPriority,
    image: {src: image,scale:scalePercent},
    id:actionId,
    class:"action"
  }).appendTo(navigationViewInsertion);
    return actionCallVariable;
};