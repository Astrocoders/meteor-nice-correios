Package.describe({
  name: 'astrocoders:nice-correios',
  version: '0.1.0',
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
    'ecmascript@0.1.5',
    'check',
    'stevezhu:lodash@3.10.1',
  ], 'server');

  api.addFiles('nice-correios.js', 'server');

  api.export('NiceCorreios');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('astrocoders:nice-correios');
  api.addFiles('nice-correios-tests.js');
});
