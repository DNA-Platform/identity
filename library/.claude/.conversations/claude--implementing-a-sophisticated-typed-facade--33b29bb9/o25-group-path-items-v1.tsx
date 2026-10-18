import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ group-path-items v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $GroupItems extends $ApplicationCollection<GroupItems, $GroupItem, GroupItem, $PageCatalogue> {
    constructor(ref: $Reference<GroupItems>, document: $Document) {
        super(ref, "GroupItems", document);
    }

    add(): $GroupItem { return super._add(); }
    static createFromFile(imageFile: $Ref<File>) { return $ref(GroupItems).$call(o => o.createFromFile, $ref(imageFile)); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $GroupItem extends $PageItem<GroupItem> {
    clipped(newValue?: $Bool) { return this.$get(o => o.clipped, $ref(newValue)); }
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

    constructor(ref: $Reference<GroupItem> | string, document: $Document) {
        super(ref, document, "GroupItem");
    }
}

class $PathItems extends $ApplicationCollection<PathItems, $PathItem, PathItem, $PageCatalogue> {
    constructor(ref: $Reference<PathItems>, document: $Document) {
        super(ref, "PathItems", document);
    }

    add(): $PathItem { return super._add(); }
    ellipse(top?: $Num, left?: $Num, width?: $Num, height?: $Num, reversed?: $Bool, inscribed?: $Bool) { return this.$call(o => o.ellipse, $ref(top), $ref(left), $ref(width), $ref(height), $ref(reversed), $ref(inscribed)); }
    getByName(name: $Str) { return super._getByName(name); }
    polygon(centerX?: $Num, centerY?: $Num, radius?: $Num, sides?: $Num, reversed?: $Bool) { return this.$call(o => o.polygon, $ref(centerX), $ref(centerY), $ref(radius), $ref(sides), $ref(reversed)); }
    rectangle(top: $Num, left: $Num, width: $Num, height: $Num, reversed?: $Bool) { return this.$call(o => o.rectangle, $ref(top), $ref(left), $ref(width), $ref(height), $ref(reversed)); }
    removeAll() { return super._removeAll(); }
    roundedRectangle(top: $Num, left: $Num, width: $Num, height: $Num, horizontalRadius?: $Num, verticalRadius?: $Num, reversed?: $Bool) { return this.$call(o => o.roundedRectangle, $ref(top), $ref(left), $ref(width), $ref(height), $ref(horizontalRadius), $ref(verticalRadius), $ref(reversed)); }
    star(centerX?: $Num, centerY?: $Num, radius?: $Num, innerRadius?: $Num, points?: $Num, reversed?: $Bool) { return this.$call(o => o.star, $ref(centerX), $ref(centerY), $ref(radius), $ref(innerRadius), $ref(points), $ref(reversed)); }
}

class $PathItem extends $PageItem<PathItem> {
    area() { return this.$get(o => o.area); }
    clipping(newValue?: $Bool) { return this.$get(o => o.clipping, $ref(newValue)); }
    closed(newValue?: $Bool) { return this.$get(o => o.closed, $ref(newValue)); }
    evenodd(newValue?: $Bool) { return this.$get(o => o.evenodd, $ref(newValue)); }
    fillColor(newValue?: $Ref<Color>) { return this.$get(o => o.fillColor, $ref(newValue)); }
    fillOverprint(newValue?: $Bool) { return this.$get(o => o.fillOverprint, $ref(newValue)); }
    filled(newValue?: $Bool) { return this.$get(o => o.filled, $ref(newValue)); }
    guides(newValue?: $Bool) { return this.$get(o => o.guides, $ref(newValue)); }
    length() { return this.$get(o => o.length); }
    pathPoints(): $PathPoints { return $docref(this.$get(o => o.pathPoints), this.typename(), this.document()); }
    polarity(newValue?: $Ref<PolarityValues>) { return this.$get(o => o.polarity, $ref(newValue)); }
    resolution(newValue?: $Num) { return this.$get(o => o.resolution, $ref(newValue)); }
    selectedPathPoints(): $PathPoints { return $docref(this.$get(o => o.selectedPathPoints), this.typename(), this.document()); }
    strokeCap(newValue?: $Ref<StrokeCap>) { return this.$get(o => o.strokeCap, $ref(newValue)); }
    strokeColor(newValue?: $Ref<Color>) { return this.$get(o => o.strokeColor, $ref(newValue)); }
    strokeDashOffset(newValue?: $Num) { return this.$get(o => o.strokeDashOffset, $ref(newValue)); }
    strokeDashes(newValue?: $Arr<number>) { return this.$get(o => o.strokeDashes, $ref(newValue)); }
    strokeJoin(newValue?: $Ref<StrokeJoin>) { return this.$get(o => o.strokeJoin, $ref(newValue)); }
    strokeMiterLimit(newValue?: $Num) { return this.$get(o => o.strokeMiterLimit, $ref(newValue)); }
    strokeOverprint(newValue?: $Bool) { return this.$get(o => o.strokeOverprint, $ref(newValue)); }
    strokeWidth(newValue?: $Num) { return this.$get(o => o.strokeWidth, $ref(newValue)); }
    stroked(newValue?: $Bool) { return this.$get(o => o.stroked, $ref(newValue)); }

    constructor(ref: $Reference<PathItem> | string, document: $Document) {
        super(ref, document, "PathItem");
    }

    setEntirePath(pathPoints: $Arr<[number, number]>) { return this.$call(o => o.setEntirePath, $ref(pathPoints)); }
}`}
        </CodeBox>
    </Chapter>
);
