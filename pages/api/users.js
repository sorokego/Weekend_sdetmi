const users = [
    {
        firstName: "Wilde",
        lastName: "Rasta",
        email: "wilde@bk.ru",
        status: true,
        password: bccryptjs.hashSync("123", bccryptjs.genSaltSync(8)),
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        firstName: "user",
        lastName: "user",
        email: "user2@user.ru",
        status: true,
        password: bccryptjs.hashSync("123", bccryptjs.genSaltSync(8)),
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
];

export default (req, res) => {
    res.json(users);
};
