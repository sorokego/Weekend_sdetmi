const images = [
    {
        name: "noimage.png",
        type: "primary",
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "noimage.png",
        type: "secondary",
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "noimage.png",
        type: "secondary",
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
    {
        name: "noimage.png",
        type: "secondary",
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    },
];

export default (req, res) => {
    res.json(images);
};
