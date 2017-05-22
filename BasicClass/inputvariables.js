var _alpha;
var _beta;
var _plim;
var _delta;
var _zeta;

updateTaskVariables()
{
    var VariableArray = [
        {"name" : "_alpha",      "value" : _alpha},
        {"name" : "_beta",       "value" : _beta},
        {"name" : "_delta",      "value" : _delta},
        {"name" : "_plim",       "value" : _plim},
        {"name" : "_zeta",       "value" : _zeta}
    ];
    setVariables(VariableArray);
};

initializeTaskVariables()
{
    var variables = getTaskVariables();
    for (var i = 0, len = variables.length; i < len; ++i) {
        var variable = variables[i];
        window[variable["name"]] = variable["value"]
    }
}