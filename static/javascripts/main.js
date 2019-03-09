var featureList;
// import { getImageUrl } from "takeshape-routing";
var tr = require("takeshape-routing");
var getImageUrl = tr.getImageUrl;

global.getFeatureList = function() {
  const key = "Bearer " + apiKey;
  const query = `{
      getHomepage {
        featuresSection {
          featureList {
            feature {
              blurb
              image {
                _id
                caption
                credit
                description
                filename
                mimeType
                path
                sourceUrl
                title
                uploadStatus
              }
              title
            }
          }
      }
    }
  }
   `;
  fetch(
    "https://api.takeshape.io/project/6fbd048e-a1f2-4cab-9f68-114df1baea34/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: key
      },
      body: JSON.stringify({ query })
    }
  )
    .then(res => {
      return res.json();
    })
    .then(json => {
      featureList = json.data.getHomepage.featuresSection.featureList;
      const feature = featureList[0].feature;
      const imagePath = getImageUrl(feature.image.path);
      $("#featureBlurb").text(feature.blurb);
      $("#featureImage").attr("src", imagePath);
    });
};

global.changeFeature = function(num) {
  const feature = featureList[num].feature;
  console.log(featureList[num].feature.image.path);
  const imagePath = getImageUrl(feature.image.path);
  $("#featureBlurb").text(feature.blurb);
  $("#featureImage").attr("src", imagePath);
};
