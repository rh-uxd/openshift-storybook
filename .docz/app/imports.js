export const imports = {
  'design/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-index" */ 'design/index.mdx'
    ),
  'design/crud/actions.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-actions" */ 'design/crud/actions.mdx'
    ),
  'design/crud/dialogs.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-dialogs" */ 'design/crud/dialogs.mdx'
    ),
  'design/crud/edit-link.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-edit-link" */ 'design/crud/edit-link.mdx'
    ),
  'design/crud/forms.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-forms" */ 'design/crud/forms.mdx'
    ),
  'design/crud/labels.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-labels" */ 'design/crud/labels.mdx'
    ),
  'design/crud/resource-creation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-resource-creation" */ 'design/crud/resource-creation.mdx'
    ),
  'design/crud/wizards.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-wizards" */ 'design/crud/wizards.mdx'
    ),
  'design/crud/yaml.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-crud-yaml" */ 'design/crud/yaml.mdx'
    ),
  'design/indicators/badges.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-indicators-badges" */ 'design/indicators/badges.mdx'
    ),
  'design/misc/notifications.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-misc-notifications" */ 'design/misc/notifications.mdx'
    ),
  'design/metrics/unit-labels.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-metrics-unit-labels" */ 'design/metrics/unit-labels.mdx'
    ),
  'design/navigation/breadcrumbs.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-navigation-breadcrumbs" */ 'design/navigation/breadcrumbs.mdx'
    ),
  'design/views/dashboard.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "design-views-dashboard" */ 'design/views/dashboard.mdx'
    ),
}
