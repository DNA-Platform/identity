class $Artboards extends $ApplicationCollection<Artboards, $Artboard, Artboard, $Document> {
    constructor(ref: $Reference<Artboards>, document: $Document) {
        super(ref, "Artboards", document);
    }

    add(artboardRect: $Ref<Rect>): $Artboard { return super._add(artboardRect); }
    getActiveArtboardIndex() { return this.$call(o => o.getActiveArtboardIndex); }
    getByName(name: $Str) { return super._getByName(name); }
    insert(artboardRect: $Ref<Rect>, index: $Num) { return this.$call(o => o.insert, $ref(artboardRect), $ref(index)); }
    remove(index: $Num) { return this.$call(o => o.remove, $ref(index)); }
    removeAll() { return super._removeAll(); }
    setActiveArtboardIndex(index: $Num) { return this.$call(o => o.setActiveArtboardIndex, $ref(index)); }
}

class $Artboard extends $ArtboardItem<Artboard, $Document> {
    artboardRect(newValue?: $Ref<Rect>) { return this.$get<Rect>(o => o.artboardRect, $ref(newValue)); }
    name(newValue?: $Str) { return this.$get<string>(o => o.name, $str(newValue)); }
    rulerOrigin(newValue?: $Ref<Point>) { return this.$get<Point>(o => o.rulerOrigin, $ref(newValue)); }
    rulerPAR(newValue?: $Num) { return this.$get<number>(o => o.rulerPAR, $ref(newValue)); }
    showCenter(newValue?: $Bool) { return this.$get<boolean>(o => o.showCenter, $ref(newValue)); }
    showCrossHairs(newValue?: $Bool) { return this.$get<boolean>(o => o.showCrossHairs, $ref(newValue)); }
    showSafeAreas(newValue?: $Bool) { return this.$get<boolean>(o => o.showSafeAreas, $ref(newValue)); }

    constructor(ref: $Reference<Artboard> | string, document: $Document) {
        super(ref, "Artboard", document);
    }

    remove() { return super._remove(); }
    removeAll() { return super._removeAll(); }
}