const view = window.view

const crmController = window.crmController
const salesController = window.salesController
const hrController = window.hrController

function displayMainMenu() {
    document.getElementById("menu").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    const options = [
        { title: "Customer Relationship Management (CRM)", operation: () => { crmController.menu(); } },
        { title: "Sales", operation: () => { salesController.menu(); } },
        { title: "Human Resources", operation: () => { hrController.menu(); } },
    ]
    view.printMenu("Main menu", options)
}


displayMainMenu()