const express = require('express');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router();

// define to use middlewares
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout); 
// when a post request comes in, 
// it will find the createWorkout function which is exported from the Controller!!!

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;