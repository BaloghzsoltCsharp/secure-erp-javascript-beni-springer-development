window.util = (() => {
    function generateUniqueId(table) {
        //return 'T!uq6-b4Yq'
        let a = new Uint32Array(1);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g, "");

    }

    function addRow(table, newRowData) {
        /*
        //add new row
        //newRowData = view.getInputs()
        newRowData.id = generateUniqueId(table)
        //neRowData => table
        table.push(newRowData)
        //newCustomer[input[i]]=view.getInput(input[i])
        */
        table.splice(table.length, 0, { "id": generateUniqueId(table), ...newRowData })
        return table
    }

    function removeRow(table, id) {
        let modifiedTable;

        let keys = Object.keys(table[0]);
        let values = []
        for (let i = 0; i < table.length; i++) {
            if (keys[0] === "id") {
                values = Object.values(table[i]);
                if (values[0] === id) {
                    modifiedTable = table.splice(i, 1);
                }
            }
        }

        return table
    }

    function updateRow(table, id, updateItem) {
        console.log(table)
        console.log("========================")
        console.log(id)
        console.log("========================")
        console.log(updateItem)
        console.log("========================")
        let keys = Object.keys(table[0]);
        let values = []
        for (let i = 0; i < table.length; i++) {
            if (keys[0] === "id") {
                values = Object.values(table[i]);
                if (values[0] === id) {
                    let j = 1;
                    Object.keys(table).forEach(key => {
                        table[key] = updateItem[j]

                        console.log(table[key])
                        console.log(updateItem[j])
                        j++;
                    })
                    console.log(table);

                }
            }
        }

        return table

    }


    function getAge(birthDate, nowDate) {
        return 0
    }

    return {
        generateUniqueId,
        getAge,
        updateRow,
        removeRow,
        addRow,
    }
})()