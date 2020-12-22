const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};