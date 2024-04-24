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

export const updateUser = (req, res) => {
    const {name} = req.body;
  
    const userIndex = _userExists(req, res);
    
    users[userIndex].name = name;

    return res.status(200).json({success: true, message: "User updated successfully"})
}

export const deleteUser = (req, res) => {
    const userIndex = _userExists(req, res);
    
    users.splice(userIndex, 1)

    return res.status(200).json({success: true, message: "User deleted successfully"})
}

export const getUserById = (req, res) => {
    const userIndex = _userExists(req, res);

    return res.status(200).json({success: true, data: {user: users[userIndex]}})
}

const _userExists = (req, res) => {
    const {id} = req.params;

    const userIndex = users.findIndex((user) => user.id == id)
    
    if(userIndex === -1) return res.status(404).json({success: false, message: `User with id [${id}] was not found`})

    return userIndex;
}