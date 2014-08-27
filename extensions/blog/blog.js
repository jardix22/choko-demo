var blog = module.exports = {};

/**
 * The navigation() hook.
 */
blog.navigation = function(navigations, callback) {

  // Add main navigation item for the demo pages.
  navigations['main'].items.push({
    title: 'Blog',
    url: '/blog'
  });

  callback();
};

/**
 * The role() hook.
 */
blog.role = function (roles, callback) {
  // Grant new permission to all authenticated users.
  roles['authenticated'].permissions.push('manage-blog');

  callback(null, {});
};
