import {UpwardActionHandler, DownwardActionHandler, StopctionHandler} from "ActionHandlers";
import {SafetyChecksModule} from "SafetyChecksModule";

class Elevator {
    constructor(safetyChecksModule,
                elevatorActionAdapter) {
        this.safetyChecksModule = safetyChecksModule;
        this.elevatorActionAdapter = elevatorActionAdapter;
        //...
    }

    handlebuttonListerner(buttonListerner) {
        safetyChecksModule.checkElevatorLoad(this.currentLoad);
        const actionHandler = this.elevatorActionAdapter.getActionHandler(buttonListerner.type)
        actionHandler.doSomething();
    }
}
