class $SymbolItems extends $ApplicationCollection<SymbolItems, $SymbolItem, SymbolItem, $Document> {
    constructor(ref: $Reference<SymbolItems>, parent: $Document) {
        super(ref, "SymbolItems", parent);
    }

    add(symbol: $Ref<Symbol>): $SymbolItem { return super._add($ref(symbol)); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $SymbolItem extends $PageItem<SymbolItem> {
    symbol(newValue?: $Ref<Symbol>) { return this.$get(o => o.symbol, $ref(newValue)); }

    constructor(ref: $Reference<SymbolItem> | string, document: $Document) {
        super(ref, document, "SymbolItem");
    }

    breakLink() { return this.$call(o => o.breakLink); }
}

class $RasterItems extends $ApplicationCollection<RasterItems, $RasterItem, RasterItem, $PageCatalogue> {
    constructor(ref: $Reference<RasterItems>, document: $Document) {
        super(ref, "RasterItems", document);
    }

    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $RasterItem extends $PageItem<RasterItem> {
    bitsPerChannel() { return this.$get(o => o.bitsPerChannel); }
    boundingBox(newValue?: $Ref<Rect>) { return this.$get(o => o.boundingBox, $ref(newValue)); }
    channels() { return this.$get(o => o.channels); }
    colorants() { return this.$get(o => o.colorants); }
    colorizedGrayscale() { return this.$get(o => o.colorizedGrayscale); }
    contentVariable(newValue?: $Any) { return this.$get(o => o.contentVariable, $ref(newValue)); }
    embedded(newValue?: $Bool) { return this.$get(o => o.embedded, $ref(newValue)); }
    file() { return this.$get(o => o.file); }
    imageColorSpace() { return this.$get(o => o.imageColorSpace); }
    matrix(newValue?: $Ref<Matrix>) { return this.$get(o => o.matrix, $ref(newValue)); }
    overprint(newValue?: $Bool) { return this.$get(o => o.overprint, $ref(newValue)); }
    status() { return this.$get(o => o.status); }
    transparent() { return this.$get(o => o.transparent); }

    constructor(ref: $Reference<RasterItem> | string, document: $Document) {
        super(ref, document, "RasterItem");
    }

    colorize(rasterColor: $Ref<Color>) { return this.$call(o => o.colorize, $ref(rasterColor)); }
    trace() { return this.$call(o => o.trace); }
}

class $PlacedItems extends $ApplicationCollection<PlacedItems, $PlacedItem, PlacedItem, $Document> {
    constructor(ref: $Reference<PlacedItems>, document: $Document) {
        super(ref, "PlacedItems", document);
    }

    add(): $PlacedItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $PlacedItem extends $PageItem<PlacedItem> {
    boundingBox() { return this.$get(o => o.boundingBox); }
    contentVariable(newValue?: $Any) { return this.$get(o => o.contentVariable, $ref(newValue)); }
    file(newValue?: $Ref<File>) { return this.$get(o => o.file, $ref(newValue)); }
    matrix(newValue?: $Ref<Matrix>) { return this.$get(o => o.matrix, $ref(newValue)); }

    constructor(ref: $Reference<PlacedItem> | string, document: $Document) {
        super(ref, document, "PlacedItem");
    }

    embed() { return this.$call(o => o.embed); }
    relink(fileSpec: $Ref<File>) { return this.$call(o => o.relink, $ref(fileSpec)); }
    trace() { return this.$call(o => o.trace); }
}

class $EmbeddedItems extends $ApplicationCollection<EmbeddedItems, $EmbedItem, EmbedItem, $Document> {
    constructor(ref: $Reference<EmbeddedItems>, document: $Document) {
        super(ref, "EmbeddedItems", document);
    }

    add(): $EmbedItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $EmbedItem extends $PageItem<EmbedItem> {
    file(newValue?: $Ref<File>) { return this.$get(o => o.file, $ref(newValue)); }

    constructor(ref: $Reference<EmbedItem> | string, document: $Document) {
        super(ref, document, "EmbedItem");
    }
}