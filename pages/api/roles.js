const roles = [
    {
        name: "Администраторы",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "Пользователи",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
];

export default (req, res) => {
    res.json(roles);
};
