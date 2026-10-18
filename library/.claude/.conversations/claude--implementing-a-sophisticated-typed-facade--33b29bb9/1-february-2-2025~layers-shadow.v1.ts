class $Layers extends $ApplicationCollection<Layers, $Layer, Layer, $Document> {
    constructor(ref: $Reference<Layers>, document: $Document) {
        super(ref, "Layers", document);
    }

    add(): $Layer { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}