window.view = (() => {
    function printErrorMessage(message) {
        const messageBox = document.getElementById("error-message")
        messageBox.innerText = message
    }

    function printMessage(message) {
        const messageBox = document.getElementById("message")
        messageBox.innerText = message
    }

    function getInput(message) {
        return prompt(message)
    }

    function getInputs(fields) {
        let result = {}
        //{"id": util.generateUniqueId()}
        for (let field of fields) {
            result[field] = getInput(field);
            //newCustomer[input[i]]=view.getInput(input[i])
        }
        // ... tip: you can use prompt to get multiple input
        console.log(result)
        return result
    }

    function printTable(table, title) {

        const result = document.getElementById("result");

        let values = [];
        let keys = Object.keys(table[0]);

        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');

        for (var i = -1; i < table.length; i++) {

            var tr = document.createElement('tr');
            if (i == -1) {
                for (let k = 0; k < keys.length; k++) {
                    var th = document.createElement('th');
                    th.innerText = keys[k];
                    tr.appendChild(th);
                }

            }
            else {
                values = Object.values(table[i])
                for (var j = 0; j < values.length; j++) {

                    var td = document.createElement('td');
                    td.innerText = values[i, j];

                    td.appendChild(document.createTextNode('\u0020'))
                    tr.appendChild(td)

                }
            }
            tbdy.appendChild(tr);

        }

        tbl.appendChild(tbdy);
        result.appendChild(tbl);
    }

    function printGeneralResults(data, title) {
        printTable(data, title)
    }

    function printMenu(title, listOptions) {
        const menuNode = document.getElementById("menu")
        const titleNode = document.createElement('h1')
        titleNode.innerText = title
        const listNode = document.createElement('ul')
        for (let i = 0; i < listOptions.length; i++) {
            const listItemNode = document.createElement('li')
            const buttonNode = document.createElement('button')
            buttonNode.innerText = listOptions[i].title
            buttonNode.onclick = listOptions[i].operation
            listItemNode.appendChild(buttonNode)
            listNode.appendChild(listItemNode)
        }
        menuNode.appendChild(listNode)
    }

    function printStatus(status) {
        let statusString = ""
        switch (status) {
            case 0:
                statusString = "ok"
                break;
        }
        console.log(statusString)

    }

    return {
        printErrorMessage,
        getInput,
        getInputs,
        printTable,
        printMessage,
        printGeneralResults,
        printMenu,
        printStatus,
    }
})()

