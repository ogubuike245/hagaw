const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.setBrowserSyncConfig({
    cors: true,
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

// error

// config
