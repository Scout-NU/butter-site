let featureList;
let tr = require("takeshape-routing");
let getImageUrl = tr.getImageUrl;
import css from "../stylesheets/main.scss";
import jQuery from "jQuery";
window.jquery = window.$ = jQuery;
import fullpage from "fullpage.js";
import "bootstrap";

$(document).ready(function() {
  let fullPageInstance = new fullpage("#fullpage", {
    //options here
    licenseKey: "6F1ED004-501241ED-968D38C4-BED591B1",
    anchors: ["hero", "roles", "features", "cities", "bottom"],
    sectionsColor: ["#fff", "#F1D5C7", "#B9C6BD", "#fff", "#F5D4C4"],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["Top", "Roles", "Features", "Cities", "Bottom"],
    verticalCentered: true,
    scrollBar: true
  });
});

// stores feature list as global variable and updates content on page via jquery
global.getFeatureList = function(s) {
  // given string from nunjucks has characters that mess up JSON.parse,
  // this removes them
  s = s
    .replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
  s = s.replace(/[\u0000-\u0019]+/g, "");
  let json = JSON.parse(s);
  featureList = json;
  const feature = featureList[0].feature;
  const imagePath = getImageUrl(feature.image.path);
  $("#featureBlurb").text(feature.blurb);
  $("#featureImage").attr("src", imagePath);
};

// switches between feature list content via jquery
global.changeFeature = function(num) {
  const feature = featureList[num].feature;
  const imagePath = getImageUrl(feature.image.path);
  $("#featureBlurb").text(feature.blurb);
  $("#featureImage").attr("src", imagePath);
};
