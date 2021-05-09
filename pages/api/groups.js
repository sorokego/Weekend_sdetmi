const groups = [
    {
        name: "Популярные",
        color: "#FF9F39",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "Развитие навыков",
        color: "#466FBD",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "Локация",
        color: "#00CCA9",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
];

export default (req, res) => {
    res.json(groups);
};
