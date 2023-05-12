const express = require('express');
const actorRouter = require('./actor.route');
const genresRouter = require('./genre.route');
const directorRouter = require('./director.route');
const movieRouter = require('./movie.route');
const router = express.Router();

router.use('/genres', genresRouter)
router.use('/actors', actorRouter)
router.use('/directors', directorRouter)
router.use('/movies', movieRouter)


module.exports = router;