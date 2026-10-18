class $Layers extends $ApplicationCollection<Layers, $Layer, Layer, $Document> {
    constructor(ref: $Reference<Layers>, document: $Document) {
        super(ref, "Layers", document);
    }

    add(): $Layer { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $Layer extends $DocumentItem<Layer, $Document> {
    pageItems(): $PageItems { return $docref(this.$get(o => o.pageItems), this.typename(), this.document()); }
    pathItems(): $PathItems { return $docref(this.$get(o => o.pathItems), this.typename(), this.document()); }
    textFrames(): $TextFrames { return $docref(this.$get(o => o.textFrames), this.typename(), this.document()); }
    groupItems(): $GroupItems { return $docref(this.$get(o => o.groupItems), this.typename(), this.document()); }
    rasterItems(): $RasterItems { return $docref(this.$get(o => o.rasterItems), this.typename(), this.document()); }
    compoundPathItems(): $CompoundPathItems { return $docref(this.$get(o => o.compoundPathItems), this.typename(), this.document()); }
    legacyTextItems(): $LegacyTextItems { return $docref(this.$get(o => o.legacyTextItems), this.typename(), this.document()); }
    nonNativeItems(): $NonNativeItems { return $docref(this.$get(o => o.nonNativeItems), this.typename(), this.document()); }
    placedItems(): $PlacedItems { return $docref(this.$get(o => o.placedItems), this.typename(), this.document()); }
    graphItems(): $GraphItems { return $docref(this.$get(o => o.graphItems), this.typename(), this.document()); }
    meshItems(): $MeshItems { return $docref(this.$get(o => o.meshItems), this.typename(), this.document()); }

    absoluteZOrderPosition() { return this.$get<number>(o => o.absoluteZOrderPosition); }
    artworkKnockout(newValue?: $Ref<KnockoutState>) { return this.$get<KnockoutState>(o => o.artworkKnockout, $ref(newValue)); }
    blendingMode(newValue?: $Ref<BlendModes>) { return this.$get<BlendModes>(o => o.blendingMode, $ref(newValue)); }
    color(newValue?: $Ref<RGBColor>) { return this.$get<RGBColor>(o => o.color, $ref(newValue)); }
    dimPlacedImages(newValue?: $Bool) { return this.$get<boolean>(o => o.dimPlacedImages, $ref(newValue)); }
    hasSelectedArtwork() { return this.$get<boolean>(o => o.hasSelectedArtwork); }
    isIsolated(newValue?: $Bool) { return this.$get<boolean>(o => o.isIsolated, $ref(newValue)); }
    locked(newValue?: $Bool) { return this.$get<boolean>(o => o.locked, $ref(newValue)); }
    name(newValue?: string | $Reference<string>) { return super._name(newValue); }
    opacity(newValue?: $Num) { return this.$get<number>(o => o.opacity, $ref(newValue)); }
    preview(newValue?: $Bool) { return this.$get<boolean>(o => o.preview, $ref(newValue)); }
    printable(newValue?: $Bool) { return this.$get<boolean>(o => o.printable, $ref(newValue)); }
    sliced(newValue?: $Bool) { return this.$get<boolean>(o => o.sliced, $ref(newValue)); }
    visible(newValue?: $Bool) { return this.$get<boolean>(o => o.visible, $ref(newValue)); }
    zOrderPosition() { return this.$get<number>(o => o.zOrderPosition); }

    constructor(ref: $Reference<Layer> | string, document: $Document) {
        super(ref, "Layer", document);
    }

    move(relativeObject: $Any, insertionLocation: $Any) { return this.$call(o => o.move, $ref(relativeObject), $ref(insertionLocation)); }
    remove() { return super._remove(); }
    removeAll() { return super._removeAll(); }
    zOrder(zOrderCmd: $Ref<ZOrderMethod>) { return this.$call(o => o.zOrder, $ref(zOrderCmd)); }
}