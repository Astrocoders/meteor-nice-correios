Package.describe({
  name: 'astrocoders:nice-correios',
  version: '0.1.2',
  summary: 'Get Correios shipping costs without complications',
  git: 'https://github.com/Astrocoders/meteor-nice-correios',
  documentation: 'README.md'
});

Npm.depends({
  'soap': '0.6.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'ecmascript',
    'check',
    'stevezhu:lodash',
  ], 'server');

  api.addFiles('nice-correios.js', 'server');

  api.export('NiceCorreios');
});
