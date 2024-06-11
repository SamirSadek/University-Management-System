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

export const StudentControllers = {
    createStudent,
}
