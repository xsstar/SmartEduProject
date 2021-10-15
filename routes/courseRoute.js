const express = require('express')
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // http://localhost:3000/courses den geldik../ la karşılaştık..olduğu gibi bu fonk.  çalışacak!
/* router.route('/yeni').post(courseController.yenikurs); // http://localhost:3000/courses/yeni adres olmuş oluyor. */
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;