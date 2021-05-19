module.exports = async ({ createResolvers }, options) => {
  const { productPath = "/product" } = options;

  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    return `/${productPath}/${slug}`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    Product: {
      slug: {
        resolve: source => slugify(source.title)
      }
    }
  });
};
