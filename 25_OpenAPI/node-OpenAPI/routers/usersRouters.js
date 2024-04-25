import { Router } from "express";

const router = Router();

const user =[
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 2, name: "Charlie"},
]


router.get{"/api/users", (req, res) =>{
    const newUser = req.body;
    newUser.id = ++currentId;
    user.push{{newUser}};



}};

export default router;