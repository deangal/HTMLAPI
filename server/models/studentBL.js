const { resolve } = require('path');
var Student = require('../models/schema');

var getAll=()=>{
    return new Promise((resolve, reject)=>{
        Student.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}


var getById=(id)=>{
    return new Promise((resolve, reject)=>{
        Student.findById(id,(err, data)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(data)
        }
    })
    })

}


var addStudent=(newStudent)=>{
    return new Promise((resolve, reject)=>{
        var student = new Student({
            fullName : newStudent.fullName,
            email : newStudent.email,
            faculty : newStudent.faculty,
            birthDate : new Date(newStudent.birthDate),
            grades : newStudent.grades
          
        })
        console.log(student);
        student.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(student)
            }
        })
    })
}  





var updateStudent=(id,updatedStudent)=>{
    console.log(updatedStudent);
    return new Promise((resolve, reject)=>{
        Student.findByIdAndUpdate(id,{
            fullName : updatedStudent.fullName,
            email : updatedStudent.email,
            faculty : updatedStudent.faculty,
            birthDate : updatedStudent.birthDate,
            grades : updatedStudent.grades
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(updatedStudent)
                }
            })
        })
        
        
    }


var deleteStudent=(id)=>{
    return new Promise((resolve, reject)=>{
        Student.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("delete")
            }
            })
        })
}





module.exports={getAll,getById,addStudent,updateStudent,deleteStudent};