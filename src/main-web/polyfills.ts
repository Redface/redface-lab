import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';

if (process.env.ENV !== 'production') {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
