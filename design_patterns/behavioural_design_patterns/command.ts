interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  public turnOn() {
    console.log(`The light is on`);
  }

  public turnOff() {
    console.log(`The light is off`);
  }
}

class TurnOnCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}

class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff();
  }

  public undo(): void {
    this.light.turnOn();
  }
}

class RemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand) {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if (this.commandQueue.length) {
      const command = this.commandQueue.pop();
      command?.execute();
    }
  }

  public undoButtonWasPressed() {
    this.undoCommand.execute();
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}
const remote = new RemoteControl();
const light = new Light();

remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();
remote.undoButtonWasPressed();
