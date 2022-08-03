window.hrController = (() => {
    const hr = window.hrModel
    const view = window.view

    function listEmployees() {
        //view.printErrorMessage("Not implemented yet.")
        view.printTable(hr.getTable());
    }
    function addEmployee() {
        view.printErrorMessage("Not implemented yet.")
    }
    function updateEmployee() {
        view.printErrorMessage("Not implemented yet.")
    }
    function deleteEmployee() {
        view.printErrorMessage("Not implemented yet.")
    }
    function getOldestAndYoungest() {
        view.printErrorMessage("Not implemented yet.")
    }
    function getAverageAge() {
        view.printErrorMessage("Not implemented yet.")
    }
    function nextBirthdays() {
        view.printErrorMessage("Not implemented yet.")
    }
    function countEmployeesWithClearance() {
        view.printErrorMessage("Not implemented yet.")
    }
    function countEmployeesPerDepartment() {
        view.printErrorMessage("Not implemented yet.")
    }

    function menu() {
        document.getElementById("menu").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        const options = [
            { title: "Back to main menu", operation: () => { window.displayMainMenu() } },
            { title: "List employees", operation: () => listEmployees(), },
            { title: "Add new employee", operation: () => addEmployee(), },
            { title: "Update employee", operation: () => updateEmployee(), },
            { title: "Remove employee", operation: () => deleteEmployee(), },
            { title: "Oldest and youngest employees", operation: () => getOldestAndYoungest(), },
            { title: "Employees average age", operation: () => getAverageAge(), },
            { title: "Employees with birthdays in the next two weeks", operation: () => nextBirthdays(), },
            { title: "Employees with clearance level", operation: () => countEmployeesWithClearance(), },
            { title: "Employee numbers by department", operation: () => countEmployeesPerDepartment(), },
        ]
        view.printMenu("Human resources", options)
    }

    return {
        menu
    }
})()
