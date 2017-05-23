/* Design objectives

* Eliminate the use of global variables
* Effetively update only modified variables to DB
* Retrieve the task variable data when needed
* Adhere to OO principles

*/

// VariablesClass Class Definition
function VariablesClass() {

    // One object for storing the task variable data[Immutable and in sync with DB]
    this.dbvars = {};

    // One object for storing the modified values from UI
    this.updatedvars = {};

    // Initialise the task variable data
    this.init();
}

// Initialise method definition
VariablesClass.prototype.init = function () {
    var variables = getTaskVariables();
    for (var i = 0, len = variables.length; i < len; ++i) {
        var variable = variables[i];
        this.dbvars[variable["name"]] = variable["value"]
    }
};

// UpdateDb method
VariablesClass.prototype.updateDB = function () {
    var modifiedVarArray = [];
    for (var name in updatedvars) {
        var value = this.updatedvars[name];
        modifiedVarArray.push({
            "name": name,
            "value": value
        });
    }
    if (modifiedVarArray.length > 0)
        setTaskVariables(modifiedVarArray);
};

// Getter for variables
VariablesClass.prototype.getVariable = function (name) {
    return this.dbvars[name];
};

// Setter for variables
VariablesClass.prototype.setVariable = function (name, value) {
    this.updatedvars[name] = value;
};

// Getter for variables
VariablesClass.prototype.getUpdatedLocalVariable = function (name) {
    if(name in this.updatedvars)
        return this.updatedvars[name];
    else 
        return this.dbvars[name];
};

// Clear all updated data method
VariablesClass.prototype.resetVariables = function () {
    this.updatedvars = {};
};