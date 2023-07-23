module.exports = function(eleventyConfig){

    //* PASSTHROUGH COPIES
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  

    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
      }
    };
  }