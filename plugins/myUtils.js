export function convertJSONToNestedObject(data) {
    function createNestedStructure(node) {
        const result = {
            id: node.id,
            name: node.name,
            code: node.code,
            publish: node.publish,
            deadline: node.deadline,
            groups_id: node.groups_id,
            schools_id: node.schools_id,
        };
        // console.log(result)
        if (node.children && node.children.length > 0) {
            result.children = node.children.map(createNestedStructure);
        }

        return result;
    }

    const convertedData = data.map(createNestedStructure);
    // console.log(convertedData)
    return convertedData;
}