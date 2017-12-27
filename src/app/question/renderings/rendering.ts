export class Rendering {

    public static RenderingsMap = new Map<string, Rendering>();
    public static freetext = new Rendering('FREETEXT');
    public static radio = new Rendering('RADIO');
    public static combobox = new Rendering('COMBOBOX');
    public static checkbox = new Rendering('CHECKBOX');

    private constructor(public name: string) {
        Rendering.RenderingsMap.set(name, this);
    }

    toString() {
        return this.name;
    }
}
