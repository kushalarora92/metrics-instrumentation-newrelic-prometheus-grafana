const router = require('express').Router(),
  log = require('./util/logger');

router.get('/1', function (req, res, next) {
  log.debug('api 1 success');
  return res.status(200).send('api 1 success');
});

router.get('/2', function (req, res, next) {
  log.debug('api 2 success');
  return res.status(200).send('api 2 success');
});

router.get('/3', function (req, res, next) {
  log.debug('api 3 success');
  return res.status(200).send('api 3 success');
});

router.get('/4', function (req, res, next) {
  log.debug('api 4 success');
  return res.status(200).send('api 4 success');
});

module.exports = router;