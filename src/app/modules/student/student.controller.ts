import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await StudentServices.createStudentIntoDB(student); //service function calling

    // send response
    res.status(200).json({
      success: true,
      message: " Student created successfully ",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudents = async (req: Request, res: Response)=>{
    try {
        const result = await StudentServices.getStudentsFromDB()
        res.status(200).json({
            success: true,
            message: " Students are retrieved successfully ",
            data: result,
          });
    } catch (error) {
        console.log(error);
    }
}
const getAStudent = async (req: Request, res: Response)=>{
    try {
        const {studentId} = req.params;
        const result = await StudentServices.getAStudentFromDB(studentId)
        res.status(200).json({
            success: true,
            message: " Student is retrieved successfully ",
            data: result,
          });
    } catch (error) {
        console.log(error);
    }
}

export const StudentControllers = {
    createStudent,
    getStudents,
    getAStudent
}
