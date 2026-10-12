module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateReadable", (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"});
  });
  eleventyConfig.addPassthroughCopy("greenminds-brand.jpg");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "uploads": "uploads" });
  eleventyConfig.addCollection("posts", function(api) {
    return api.getFilteredByGlob("posts/*.md").sort((a,b) => new Date(a.date) - new Date(b.date));
  });
  return { dir: { input: ".", includes: "_includes", output: "_site", data: "_data" }, templateFormats: ["njk","md","html"], markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
};