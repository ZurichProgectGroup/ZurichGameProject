export default function buildCommentTree(comments) {
    const tree = [];
    const mappedArr = {};

    comments.forEach((comment) => {
        const { id } = comment;

        mappedArr[id] = comment;
        mappedArr[id].children = [];
    });

    comments.forEach((comment) => {
        const { parentId } = comment;
        if (mappedArr[parentId]) {
            mappedArr[parentId].children.push(comment);
        } else {
            tree.push(comment);
        }
    });

    return tree;
}
