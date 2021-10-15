const Course = require('../models/Course');

//KURS OLUŞTURMA
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    // res.send('YENİ KURS OLUŞTURULDU')
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

//OLUŞTURULAN KURSLARI SIRALAMA

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render('courses', {
      courses,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

//for POSTMAN : verilerimiz hazır olmasa bile..
/* exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(201).json({
      status: 'success',
      courses,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}; */