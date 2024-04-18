const users = [
    {
        id: 1,
        name: "Fadga"
    },
    {
        id: 2,
        name: "Fab",
    },
    {
        id: 3,
        name: "Chris",
    }
];

export const getUsers = (req, res) => {
    return res.status(200).json({
        success: true, 
        data: users
  })
}

export const addUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    
    return res.status(201).json({
        success: true,
        message: "User created successfully"
    })
}