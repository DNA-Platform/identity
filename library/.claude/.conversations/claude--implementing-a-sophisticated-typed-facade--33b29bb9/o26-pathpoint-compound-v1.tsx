import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ pathpoint-compound v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $PathPoints extends $ApplicationCollection<PathPoints, $PathPoint, PathPoint, $PathItem> {
    constructor(ref: $Reference<PathPoints>, document: $Document) {
        super(ref, "PathPoints", document);
    }

    add(): $PathPoint { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $PathPoint extends $ApplicationItem<PathPoint, $PathItem> {
    anchor(newValue?: $Ref<Point>) { return this.$get(o => o.anchor, $ref(newValue)); }
    leftDirection(newValue?: $Ref<Point>) { return this.$get(o => o.leftDirection, $ref(newValue)); }
    pointType(newValue?: $Ref<PointType>) { return this.$get(o => o.pointType, $ref(newValue)); }
    rightDirection(newValue?: $Ref<Point>) { return this.$get(o => o.rightDirection, $ref(newValue)); }
    selected(newValue?: $Ref<PathPointSelection>) { return this.$get(o => o.selected, $ref(newValue)); }

    constructor(ref: $Reference<PathPoint> | string, document: $Document) {
        super(ref, "PathPoint", document);
    }

    remove() { return super._remove(); }
}

class $CompoundPathItems extends $ApplicationCollection<CompoundPathItems, $CompoundPathItem, CompoundPathItem, $PageCatalogue> {
    constructor(ref: $Reference<CompoundPathItems>, document: $Document) {
        super(ref, "CompoundPathItems", document);
    }

    add(): $CompoundPathItem { return super._add(); }
    getByName(name: $Str) { return super._getByName(name); }
    removeAll() { return super._removeAll(); }
}

class $CompoundPathItem extends $PageItem<CompoundPathItem> {
    pathItems(): $PathItems { return $docref(this.$get(o => o.pathItems), this.typename(), this.document()); }

    constructor(ref: $Reference<CompoundPathItem> | string, document: $Document) {
        super(ref, document, "CompoundPathItem");
    }
}`}
        </CodeBox>
    </Chapter>
);
