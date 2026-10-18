import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ page-items-shadow v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`class $PageItems extends $ApplicationCollection<PageItems, $PageItem, PageItem, $PageCatalogue> {
    constructor(ref: $Reference<PageItems>, document: $Document) {
        super(ref, "PageItems", document);
    }

    getByName(name: $Str) { return super._getByName(name); }
}

class $PageItem<TItem extends PageItem = PageItem> extends $ArtboardItem<TItem, $PageCatalogue> {
    URL(newValue?: $Str) { return this.$get<string>(o => o.URL, $str(newValue)); }
    absoluteZOrderPosition() { return this.$get<number>(o => o.absoluteZOrderPosition); }
    artworkKnockout(newValue?: $Ref<KnockoutState>) { return this.$get<KnockoutState>(o => o.artworkKnockout, $ref(newValue)); }
    blendingMode(newValue?: $Ref<BlendModes>) { return this.$get<BlendModes>(o => o.blendingMode, $ref(newValue)); }
    controlBounds() { return this.$get<Rect>(o => o.controlBounds); }
    editable() { return this.$get<boolean>(o => o.editable); }
    hidden(newValue?: $Bool) { return this.$get<boolean>(o => o.hidden, $ref(newValue)); }
    isIsolated(newValue?: $Bool) { return this.$get<boolean>(o => o.isIsolated, $ref(newValue)); }
    layer() { return this.$get<Layer>(o => o.layer); }
    left(newValue?: $Num) { return this.$get<number>(o => o.left, $ref(newValue)); }
    locked(newValue?: $Bool) { return this.$get<boolean>(o => o.locked, $ref(newValue)); }
    name(newValue?: $Str) { return this.$get<string>(o => o.name, $str(newValue)); }
    note(newValue?: $Str) { return this.$get<string>(o => o.note, $str(newValue)); }
    opacity(newValue?: $Num) { return this.$get<number>(o => o.opacity, $ref(newValue)); }
    pixelAligned(newValue?: $Bool) { return this.$get<boolean>(o => o.pixelAligned, $ref(newValue)); }
    position(newValue?: $Ref<Point>) { return this.$get<Point>(o => o.position, $ref(newValue)); }
    selected(newValue?: $Bool) { return this.$get<boolean>(o => o.selected, $ref(newValue)); }
    sliced(newValue?: $Bool) { return this.$get<boolean>(o => o.sliced, $ref(newValue)); }
    tags(): $Tags { return $docref(this.$get(o => o.tags), this.typename(), this.document()); }
    top(newValue?: $Num) { return this.$get<number>(o => o.top, $ref(newValue)); }
    visibilityVariable(newValue?: $Any) { return this.$get<any>(o => o.visibilityVariable, $ref(newValue)); }
    visibleBounds() { return this.$get<Rect>(o => o.visibleBounds); }
    wrapInside(newValue?: $Bool) { return this.$get<boolean>(o => o.wrapInside, $ref(newValue)); }
    wrapOffset(newValue?: $Num) { return this.$get<number>(o => o.wrapOffset, $ref(newValue)); }
    wrapped(newValue?: $Bool) { return this.$get<boolean>(o => o.wrapped, $ref(newValue)); }
    zOrderPosition() { return this.$get<number>(o => o.zOrderPosition); }

    constructor(ref: $Reference<TItem> | string, document: $Document, typename: string = "PageItem") {
        super(ref, typename, document);
    }

    applyEffect(liveEffectXML: $Str) { return this.$call(o => o.applyEffect, $str(liveEffectXML)); }
    bringInPerspective(positionX: $Num, positionY: $Num, perspectiveGridPlane: $Ref<PerspectiveGridPlaneType>) { return this.$call(o => o.bringInPerspective, $ref(positionX), $ref(positionY), $ref(perspectiveGridPlane)); }
    duplicate(relativeObject: $Any, insertionLocation: $Any) { return this.$call(o => o.duplicate, $ref(relativeObject), $ref(insertionLocation)); }
    move(relativeObject: $Any, insertionLocation: $Any) { return this.$call(o => o.move, $ref(relativeObject), $ref(insertionLocation)); }
    remove() { return super._remove(); }
    removeAll() { return super._removeAll(); }
    resize(scaleX: $Num, scaleY: $Num, changePositions?: $Bool, changeFillPatterns?: $Bool, changeFillGradients?: $Bool, changeStrokePattern?: $Bool, changeLineWidths?: $Num, scaleAbout?: $Ref<Transformation>) { return this.$call(o => o.resize, $ref(scaleX), $ref(scaleY), $ref(changePositions), $ref(changeFillPatterns), $ref(changeFillGradients), $ref(changeStrokePattern), $ref(changeLineWidths), $ref(scaleAbout)); }
    rotate(angle: $Num, changePositions?: $Bool, changeFillPatterns?: $Bool, changeFillGradients?: $Bool, changeStrokePattern?: $Bool, rotateAbout?: $Ref<Transformation>) { return this.$call(o => o.rotate, $ref(angle), $ref(changePositions), $ref(changeFillPatterns), $ref(changeFillGradients), $ref(changeStrokePattern), $ref(rotateAbout)); }
    sendScriptMessage(pluginName: $Str, messageSelector: $Str, inputString: $Str) { return this.$call(o => o.sendScriptMessage, $str(pluginName), $str(messageSelector), $str(inputString)); }
    transform(transformationMatrix: $Ref<Matrix>, changePositions?: $Bool, changeFillPatterns?: $Bool, changeFillGradients?: $Bool, changeStrokePattern?: $Bool, changeLineWidths?: $Num, transformAbout?: $Ref<Transformation>) { return this.$call(o => o.transform, $ref(transformationMatrix), $ref(changePositions), $ref(changeFillPatterns), $ref(changeFillGradients), $ref(changeStrokePattern), $ref(changeLineWidths), $ref(transformAbout)); }
    translate(deltaX?: $Num, deltaY?: $Num, transformObjects?: $Bool, transformFillPatterns?: $Bool, transformFillGradients?: $Bool, transformStrokePattern?: $Bool) { return this.$call(o => o.translate, $ref(deltaX), $ref(deltaY), $ref(transformObjects), $ref(transformFillPatterns), $ref(transformFillGradients), $ref(transformStrokePattern)); }
    zOrder(zOrderCmd: $Ref<ZOrderMethod>) { return this.$call(o => o.zOrder, $ref(zOrderCmd)); }
}`}
        </CodeBox>
    </Chapter>
);
