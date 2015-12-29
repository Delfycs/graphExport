module ot.graph.core {
  
  angular
    .module("ot.graph")
    .service("tools", tools);

  /** Boîte à outils de fonctions */
  export class tools {
    static IID: string = "tools";
    static $inject: string[] = ["$log", "$window"];
    /** Permet d'envoyer une alerte à l'utilisateur */
    notify: (text: string) => void;

    constructor($log: ng.ILogService, $window: ng.IWindowService) {
      let vm: tools = this;
      vm.notify = notify;

      function notify(text: string): void {
        $window.alert(text);
      }

    }
  }
}
