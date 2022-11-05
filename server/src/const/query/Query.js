//user
exports.selectAllUser = `select * from user`;
exports.selectByIdUser = `select * from user where userid = ?`;
exports.insertUser = `insert into user values (default,?,?,?,?)`;
exports.updateByIdUser = `update user set name = ?,?,? where userid = ?`;





//entertainment
exports.get
