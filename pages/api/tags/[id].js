import { baseUrl } from "../../../src/constants";

export default async (req, res) => {
    const { id } = req.query;
    const tag = tags.find((tag) => tag.id === Number(id));

    const group = await fetch(`${baseUrl}/api/groups/${tag.GroupId}`);
    tag.Group = group;

    res.json(tag);
};
