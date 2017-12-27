export class Rendering {

    private static _renderingMap: Map<string, Rendering>;
    public static get renderingsMap() {
        if (!Rendering._renderingMap) {
            Rendering._renderingMap = new Map<string, Rendering>();
        }

        return Rendering._renderingMap;
    }

    public static textbox = new Rendering('TEXTBOX');
    public static radio = new Rendering('RADIO');
    public static combobox = new Rendering('COMBOBOX');
    public static checkbox = new Rendering('CHECKBOX');

    private constructor(private name: string) {

        Rendering.renderingsMap.set(name, this);
    }

    toString() {
        return this.name;
    }
}
