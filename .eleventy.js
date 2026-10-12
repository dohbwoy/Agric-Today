module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "greenminds-brand.jpg": "greenminds-brand.jpg" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("dateReadable", (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  });
  eleventyConfig.addCollection("articles", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );
  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
