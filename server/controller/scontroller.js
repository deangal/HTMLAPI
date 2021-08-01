var express = require('express')
var appRouter = express.Router()

var studentBL = require('../models/studentBL')

appRouter.route('/').get(async(req,resp)=>{
    var students = await studentBL.getAll()
    return resp.json(students);
})

appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id;
    var student = await studentBL.getById(id)
    return resp.json(student);
})

appRouter.route('/').post(async(req,resp)=>{
    var student = req.body;
    var newStudent = await studentBL.addStudent(student)
    return resp.json(newStudent);
})

appRouter.route('/:id').post(async(req,resp)=>{
    var id = req.params.id;
    var newGrade = await studentBL.addGrade(id)
    return resp.json(newGrade);
})

appRouter.route('/:id').put(async(req,resp)=>{
    var id = req.params.id;
    var updatedStudent = req.body;
    var result = await studentBL.updateStudent(id,updatedStudent)
    return resp.json(result);

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id;
    var result = await studentBL.deleteStudent(id)
    return resp.json(result);

    

})





module.exports = appRouter;
