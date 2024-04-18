// usersController.js
export const getUsers = (req, res) => {
    // Dummy users data
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
  };
  