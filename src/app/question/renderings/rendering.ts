export class Rendering {

    public static RenderingsMap = new Map<string, Rendering>();
    public static freetext = new Rendering('FREETEXT');
    public static boolean = new Rendering('BOOLEAN');
    public static combobox = new Rendering('COMBOBOX');

    private constructor(public name: string) {
        Rendering.RenderingsMap.set(name, this);
    }

    toString() {
        return this.name;
    }
}
