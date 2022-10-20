class ActionHandler{
    constructor(buttonListernerData){
        //...
    }
    takeAction(){
        // abstractMethod
    }
}

export class UpwardActionHandler extends ActionHandler{
    doSomething(){
        // do something with listerner data
    }

}

export class DownwardActionHandler extends ActionHandler{
    doSomething(){
        // do something with listerner data
    }

}

export class StopctionHandler extends ActionHandler{
    doSomething(){
        // do something with listerner data
    }

}
