interface IFileSystemComponent {
  getName(): string;
  getSize(): number;
}

interface ICompositeFileSystemComponent extends IFileSystemComponent {
  getComponents(): IFileSystemComponent[];
  addComponent(file: IFileSystemComponent): void;
  removeComponent(file: IFileSystemComponent): void;
}

class __File implements IFileSystemComponent {
  constructor(
    private name: string,
    private size: number,
  ) {}

  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
}

class __Folder implements ICompositeFileSystemComponent {
  private __files: IFileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.__files.reduce((total, __file) => total + __file.getSize(), 0);
  }

  getComponents(): IFileSystemComponent[] {
    return this.__files;
  }
  addComponent(file: IFileSystemComponent): void {
    this.__files.push(file);
  }
  removeComponent(file: IFileSystemComponent): void {
    const index = this.__files.indexOf(file);
    if (index !== -1) {
      this.__files.splice(index, 1);
    }
  }
}

const file1 = new __File("file1.txt", 500);
const file2 = new __File("file2.txt", 1000);
const file3 = new __File("file3.txt", 1500);

const folder1 = new __Folder("MyFolder");
folder1.addComponent(file1);
folder1.addComponent(file2);
folder1.addComponent(file3);
folder1
  .getComponents()
  .forEach((component) =>
    console.log(
      `- ${component.getName()} with size of ${component.getSize()} bytes`,
    ),
  );

console.log(
  `Total size of folder '${folder1.getName()}': ${folder1.getSize()} bytes`,
);
