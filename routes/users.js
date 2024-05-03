// routes/users.js
import express from "express";
import { getUsers, addUser, updateUser, deleteUser, getUserById } from "../controllers/users"; 

const router = express.Router();

// router.get('/', getUsers);

router.post('/', addUser)

// router.put('/:id', updateUser)

// router.delete('/:id', deleteUser)

// router.get('/:id', getUserById)

export default router;