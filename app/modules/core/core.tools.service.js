var ot;
(function (ot) {
    var graph;
    (function (graph) {
        var core;
        (function (core) {
            angular
                .module("ot.graph")
                .service("tools", tools);
            var tools = (function () {
                function tools($log, $window) {
                    var vm = this;
                    vm.notify = notify;
                    function notify(text) {
                        $window.alert(text);
                    }
                }
                tools.IID = "tools";
                tools.$inject = ["$log", "$window"];
                return tools;
            })();
            core.tools = tools;
        })(core = graph.core || (graph.core = {}));
    })(graph = ot.graph || (ot.graph = {}));
})(ot || (ot = {}));
//# sourceMappingURL=core.tools.service.js.map