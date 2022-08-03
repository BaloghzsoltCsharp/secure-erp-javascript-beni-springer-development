window.salesController = (() => {
    const sales = window.salesModel
    const view = window.view

    function listTransactions() {
        //view.printErrorMessage("Not implemented yet.")
        //console.log(sales.getTable())
        view.printTable(sales.getTable());
    }


    function addTransaction() {
        //view.printErrorMessage("Not implemented yet.")
        let data = view.getInputs(sales.getInputFields())
        sales.addTransaction(data)

        listTransactions()
    }


    function updateTransaction() {
        view.printErrorMessage("Not implemented yet.")
    }


    function deleteTransaction() {
        view.printErrorMessage("Not implemented yet.")
    }


    function getBiggestRevenueTransaction() {
        view.printErrorMessage("Not implemented yet.")
    }


    function getBiggestRevenueProduct() {
        view.printErrorMessage("Not implemented yet.")
    }


    function countTransactionsBetween() {
        view.printErrorMessage("Not implemented yet.")
    }


    function sumTransactionsBetween() {
        view.printErrorMessage("Not implemented yet.")
    }

    function menu() {
        document.getElementById("menu").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        const options = [
            { title: "Back to main menu", operation: () => { window.displayMainMenu() } },
            { title: "List transactions", operation: () => { listTransactions() } },
            { title: "Add new transaction", operation: () => { addTransaction() } },
            { title: "Update transaction", operation: () => { updateTransaction() } },
            { title: "Remove transaction", operation: () => { deleteTransaction() } },
            { title: "Get the transaction that made the biggest revenue", operation: () => { getBiggestRevenueTransaction() } },
            { title: "Get the product that made the biggest revenue altogether", operation: () => { getBiggestRevenueProduct() } },
            { title: "Count number of transactions between", operation: () => { countTransactionsBetween() } },
            { title: "Sum the price of transactions between", operation: () => { sumTransactionsBetween() } },
        ]
        view.printMenu("Sales", options)
    }

    return {
        menu
    }
})()

