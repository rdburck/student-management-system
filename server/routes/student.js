import express from 'express';
import {getStudents} from '../controllers/student.js';
//var express = require('express');
//this allows us to start adding routes
const router = express.Router();

//the first parameter is the path and the second parameter is the callback function
router.get('/', getStudents);
 
export default router;
