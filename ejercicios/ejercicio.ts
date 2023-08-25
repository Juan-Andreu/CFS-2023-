class ElementoHTML {
  protected Id: string;
  protected ClassName: string;
  protected Value: string;

  constructor(id: string, className: string, value: string) {
    this.Id = id;
    this.ClassName = className;
    this.Value = value;
  }
}

class ElementoInput extends ElementoHTML {
  private Type: string;

  constructor(id: string, className: string, value: string, type: string) {
    super(id, className, value);
    this.Type = type;
  }

  public crearElemento(): HTMLInputElement {
    let elemento: HTMLInputElement = document.createElement('input');
    elemento.id = this.Id;
    elemento.className = this.ClassName;
    elemento.value = this.Value;
    elemento.type = this.Type;

    return elemento;
  }
}

class ElementoTextarea extends ElementoHTML {
  private cols: number;
  private rows: number;

  constructor(id: string, className: string, value: string, cols: number, rows: number) {
    super(id, className, value);
    this.cols = cols;
    this.rows = rows;
  }

  public crearElemento(): HTMLTextAreaElement {
    let textarea: HTMLTextAreaElement = document.createElement('textarea');
    textarea.id = this.Id;
    textarea.className = this.ClassName;
    textarea.value = this.Value;
    textarea.cols = this.cols;
    textarea.rows = this.rows;

    return textarea;
  }
}

class CustomOption extends HTMLOptionElement {
  constructor(text: string, value: string) {
    super();
    this.text = text;
    this.value = value;
  }
}

class Select extends ElementoHTML {
  private options: CustomOption[];

  constructor(id: string, className: string, options: CustomOption[]) {
    super(id, className, "");
    this.options = options;
  }

  public crearElemento(): HTMLSelectElement {
    let select: HTMLSelectElement = document.createElement("select");
    select.id = this.Id;
    select.className = this.ClassName;

    for (const option of this.options) {
      select.appendChild(option);
    }

    return select;
  }
}

function mostrarElemento() {
  const elementoInput = new ElementoInput("inputId", "inputClass", "Input Value", "text");
  const elementoTextarea = new ElementoTextarea("textareaId", "textareaClass", "Textarea Value", 4, 6);
  const opcionesSelect = [
    new CustomOption("Option 1", "1"),
    new CustomOption("Option 2", "2")
  ];
  const elementoSelect = new Select("selectId", "selectClass", opcionesSelect);

  const container = document.createElement("div");
  container.appendChild(elementoInput.crearElemento());
  container.appendChild(elementoTextarea.crearElemento());
  container.appendChild(elementoSelect.crearElemento());

  document.body.appendChild(container);
}
