class $EmbeddedItems extends $ApplicationCollection<EmbeddedItems, $EmbedItem, EmbedItem, $Document> {
    constructor(ref: $Reference<EmbeddedItems>, document: $Document) {
        super(ref, "EmbeddedItems", document);
    }

    add(): $EmbedItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $EmbedItem extends $PageItem<EmbedItem> {
    contentVariable(newValue?: $Any) { return this.$get(o => o.contentVariable, $ref(newValue)); }
    file(newValue?: $Ref<File>) { return this.$get(o => o.file, $ref(newValue)); }
    filePath() { return this.$get(o => o.filePath); }
    placed() { return this.$get(o => o.placed); }
    position(newValue?: $Ref<Point>) { return this.$get(o => o.position, $ref(newValue)); }
    resolution() { return this.$get(o => o.resolution); }
    size() { return this.$get(o => o.size); }

    constructor(ref: $Reference<EmbedItem> | string, document: $Document) {
        super(ref, document, "EmbedItem");
    }
}

class $GraphItems extends $ApplicationCollection<GraphItems, $GraphItem, GraphItem, $Document> {
    constructor(ref: $Reference<GraphItems>, document: $Document) {
        super(ref, "GraphItems", document);
    }

    add(): $GraphItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $GraphItem extends $PageItem<GraphItem> {
    contentVariable(newValue?: $Any) { return this.$get(o => o.contentVariable, $ref(newValue)); }

    constructor(ref: $Reference<GraphItem> | string, document: $Document) {
        super(ref, document, "GraphItem");
    }
}