class ElementoHTML {
  protected Id: string;
  protected Class: string;
  protected Value: string;

  constructor(id: string, className: string, value: string) {
    this.Id = id;
    this.Class = className;
    this.Value = value;
  }

  public toDom(){
  }
}

class ElementInput extends ElementoHTML {
    private Type: string;

    constructor(Id: string, Name: string, Class: string, Value: string, Type: string){
        super(Id, Class, Value)
        this.Type = Type;
    }

    public crearElemento(): HTMLElement {
        let elemento: HTMLElement = document.createElement('input');
        elemento.id = this.Id
        elemento.className = this.Class
        elemento.setAttribute('value', this.Value);
        elemento.setAttribute('type', this.Type);

        return elemento;
    }
}

class ElementTextarea extends ElementoHTML{
  private cols: number;
  private rows: number;

  constructor(Id: string, Name: string, Class: string, Value: string, cols: number, rows: number){
    super(Id, Class, Value)
    this.cols = cols;
    this.rows = rows;
  }

  public crearElemento(): HTMLTextAreaElement {
    let textarea : HTMLTextAreaElement = document.createElement('textarea')
    textarea.id = this.Id;
    textarea.className = this.Class;
    textarea.cols = this.cols;
    textarea.rows = this.rows;
   
    return textarea;
  }
}

class Select extends ElementoHTML {
  private option: Node [];

  constructor(Id: string, className: string, value: string, options: Node[]) {
      super(Id, className, value)
      this.option = options;
  }

  public crearElemento(): HTMLSelectElement {
      let select: HTMLSelectElement = document.createElement("select");
      select.id = this.Id;
      select.setAttribute("className", this.Class);

      for (const option of this.option) {
          if (option instanceof HTMLOptionElement) {
              select.appendChild(option);
          }
      }

      return select;
  }
}

let inputText = new ElementInput('texto1', 'texto1', 'control-text', 'Hás creado un input', 'text');
inputText.crearElemento();

let inputCheckbox = new ElementInput('check', 'check', '', '', 'checkbox')
inputCheckbox.crearElemento();

let textarea = new ElementTextarea('textarea', 'textarea', 'text', '', 30, 10 );
textarea.crearElemento();

let select = new Select('localidad', 'localidad', '', [])
select.crearElemento();

function mostrarElemento() {
  const elementoInput = new ElementInput("inputId", "inputClass", "Input Value", "text");
  const elementoTextarea = new ElementTextarea("textareaId", "textareaClass", "Textarea Value", 4, 6);
  const opcionesSelect = [new Option("Option 1", "1"), new Option("Option 2", "2")];
  const elementoSelect = new Select("selectId", "selectClass", "Select Value", opcionesSelect);

  const container = document.createElement("div");
  container.appendChild(elementoInput.crearElemento());
  container.appendChild(elementoTextarea.crearElemento());
  container.appendChild(elementoSelect.crearElemento());

  document.body.appendChild(container);
}