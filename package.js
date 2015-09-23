Package.describe({
  name: 'astrocoders:nice-correios',
  version: '0.0.1',
  summary: 'Get Correios shipping costs without complications',
  git: 'https://github.com/Astrocoders/meteor-nice-correios',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['http', 'check'], 'server');

  api.addFiles('nice-correios.js', 'server');

  api.export('NiceCorreios');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('company:nice-correios');
  api.addFiles('nice-correios-tests.js');
});
