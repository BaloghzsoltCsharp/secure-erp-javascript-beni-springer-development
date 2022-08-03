window.crmController = (() => {
    const crm = window.crmModel
    const view = window.view

    function listCustomers() {
        //view.printErrorMessage("Not implemented yet.")
        document.getElementById("result").innerHTML = "";
        view.printTable(crm.getTable());

    }

    function addCustomer() {

        let data = view.getInputs(crm.getInputFields())
        crm.addCust(data)
        //view.printStatus(status);
        listCustomers()

    }

    function updateCustomer() {
        //view.printErrorMessage("Not implemented yet.")
        crm.UpdateCust(crm.getTable(), view.getInput("Please write below the ID of the one you want to modify"), view.getInputs(crm.getInputFields()))
        //itt vagyunk elakadva ↑
        crm.getTable(true);
        listCustomers();
    }

    function deleteCustomer() {
        //view.printErrorMessage("Not implemented yet.")
        crm.RemoveCust(crm.getTable(), view.getInput("Please write below the ID of the one you want to remove"));
        crm.getTable(true);
        //alert("Sikeres törlés!");
        listCustomers();
    }

    function getSubscribedEmails() {
        view.printErrorMessage("Not implemented yet.")
    }

    function menu() {
        document.getElementById("menu").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        const options = [
            { title: "Back to main menu", operation: () => { window.displayMainMenu() } },
            { title: "List customers", operation: () => { listCustomers() } },
            { title: "Add new customer", operation: () => { addCustomer() } },
            { title: "Update customer", operation: () => { updateCustomer() } },
            { title: "Remove customer", operation: () => { deleteCustomer() } },
            { title: "Subscribed customer emails", operation: () => { getSubscribedEmails() } },
        ]
        view.printMenu("Customer Relationship Management", options)
    }

    return {
        menu
    }
})()
