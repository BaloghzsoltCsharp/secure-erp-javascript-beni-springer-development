/* Customer Relationship Management (CRM) module

Data table structure:
    - id (string)
    - name (string)
    - email (string)
    - subscribed (int): Is subscribed to the newsletter? 1: yes, 0: no
*/

window.crmModel = (() => {
    const util = window.util
    const dataManager = window.dataManager
    let loadedTable = null
    const STORAGE_KEY = "customers"
    const INPUT_FIELDS = [
        "name",
        "email",
        "subscribed",
    ]

    function loadData(needRefresh) {
        if (!loadedTable || needRefresh) {
            return dataManager.readTableFromStore(STORAGE_KEY)
        }
        return loadedTable
    }

    function getInputFields() {
        return INPUT_FIELDS
    }

    function addCust(data) {
        //db beolvasása
        //let loadedTable = loadData();

        //adarok manipulálása
        if (!loadedTable) {
            loadedTable = dataManager.readTableFromStore(STORAGE_KEY)
        }

        loadedTable = util.addRow(loadedTable, data);
        //..newtable
        //logic add to DB
        dataManager.writeTableToStore(STORAGE_KEY, loadedTable);

        //loadData(true);
        //return 0;
        //loaddatta ujra behívnoi ha hozzáadtunk

    }
    function RemoveCust(data, id) {
        if (!loadedTable) {
            loadedTable = dataManager.readTableFromStore(STORAGE_KEY)
        }
        loadedTable = util.removeRow(data, id);
        dataManager.writeTableToStore(STORAGE_KEY, data);
    }
    function UpdateCust(data, id, updateitem) {//itt vagyunk elakadva
        if (!loadedTable) {
            loadedTable = dataManager.readTableFromStore(STORAGE_KEY)
        }
        loadedTable = util.updateRow(data, id, updateitem);
        dataManager.writeTableToStore(STORAGE_KEY, data);
    }

    return {
        getTable: loadData,
        getInputFields,
        addCust,
        RemoveCust,
        UpdateCust
    }
})()