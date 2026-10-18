import { Chapter, Heading, Math, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ document-shadow-complete v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>document-shadow-complete at version 1</Heading>
            <Paragraph>
                class $Document extends $ApplicationItem&lt;Document, $Application&gt; &#123; layers(): $Layers &#123;
                return <Math>{"docref(this."}</Math>get(o =&gt; o.layers), this.typename(), this); &#125; artboards():
                $Artboards &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.artboards), this.typename(), this);
                &#125; views(): $Views &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.views), this.typename(),
                this); &#125; brushes(): $Brushes &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.brushes),
                this.typename(), this); &#125; swatches(): $Swatches &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.swatches), this.typename(), this); &#125; symbols(): $Symbols &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.symbols), this.typename(), this); &#125; stories(): $Stories &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.stories), this.typename(), this); &#125; pluginItems():
                $PluginItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.pluginItems), this.typename(), this);
                &#125; pageItems(): $PageItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.pageItems),
                this.typename(), this); &#125; pathItems(): $PathItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.pathItems), this.typename(), this); &#125; textFrames(): $TextFrames &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.textFrames), this.typename(), this); &#125; groupItems():
                $GroupItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.groupItems), this.typename(), this);
                &#125; rasterItems(): $RasterItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.rasterItems),
                this.typename(), this); &#125; compoundPathItems(): $CompoundPathItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.compoundPathItems), this.typename(), this); &#125;
                legacyTextItems(): $LegacyTextItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.legacyTextItems), this.typename(), this); &#125; nonNativeItems(): $NonNativeItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.nonNativeItems), this.typename(), this); &#125; gradients():
                $Gradients &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.gradients), this.typename(), this);
                &#125; variables(): $Variables &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.variables),
                this.typename(), this); &#125; patterns(): $Patterns &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.patterns), this.typename(), this); &#125; paragraphStyles(): $ParagraphStyles &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.paragraphStyles), this.typename(), this); &#125;
                characterStyles(): $CharacterStyles &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.characterStyles), this.typename(), this); &#125; spots(): $Spots &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.spots), this.typename(), this); &#125; datasets(): $DataSets
                &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.dataSets), this.typename(), this); &#125; tags():
                $Tags &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.tags), this.typename(), this); &#125;
                graphicStyles(): $ArtStyles &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.graphicStyles),
                this.typename(), this); &#125; placedItems(): $PlacedItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.placedItems), this.typename(), this); &#125; embeddedItems(): $EmbeddedItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.embeddedItems), this.typename(), this); &#125; graphItems():
                $GraphItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.graphItems), this.typename(), this);
                &#125; meshItems(): $MeshItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.meshItems),
                this.typename(), this); &#125;
            </Paragraph>
            <Paragraph>
                XMPString(newValue?: <Math>{"Str) { return this."}</Math>get&lt;string&gt;(o =&gt; o.XMPString,
                $str(newValue)); &#125; activeDataSet(newValue?: <Math>{"Ref<DataSet>) { return this."}</Math>get&lt;DataSet&gt;(o
                =&gt; o.activeDataSet, $ref(newValue)); &#125; activeLayer(newValue?:
                <Math>{"Ref<Layer>) { return this."}</Math>get&lt;Layer&gt;(o =&gt; o.activeLayer,
                <Math>{"ref(newValue)); } colorProfileName() { return this."}</Math>get&lt;string&gt;(o =&gt;
                o.colorProfileName); &#125; cropBox(newValue?: <Math>{"Ref<Rect>) { return this."}</Math>get&lt;Rect&gt;(o
                =&gt; o.cropBox, $ref(newValue)); &#125; cropStyle(newValue?:
                <Math>{"Ref<CropOptions>) { return this."}</Math>get&lt;CropOptions&gt;(o =&gt; o.cropStyle,
                $ref(newValue)); &#125; defaultFillColor(newValue?: <Math>{"Ref<Color>) { return this."}</Math>get&lt;Color&gt;(o
                =&gt; o.defaultFillColor, $ref(newValue)); &#125; defaultFillOverprint(newValue?:
                <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o =&gt; o.defaultFillOverprint, $ref(newValue));
                &#125; defaultFilled(newValue?: <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o =&gt;
                o.defaultFilled, $ref(newValue)); &#125; defaultStrokeCap(newValue?:
                <Math>{"Ref<StrokeCap>) { return this."}</Math>get&lt;StrokeCap&gt;(o =&gt; o.defaultStrokeCap,
                $ref(newValue)); &#125; defaultStrokeColor(newValue?: <Math>{"Ref<Color>) { return this."}</Math>get&lt;Color&gt;(o
                =&gt; o.defaultStrokeColor, $ref(newValue)); &#125; defaultStrokeDashOffset(newValue?:
                <Math>{"Num) { return this."}</Math>get&lt;number&gt;(o =&gt; o.defaultStrokeDashOffset, $ref(newValue));
                &#125; defaultStrokeDashes(newValue?: <Math>{"Arr<number>) { return this."}</Math>get&lt;number&#91;&#93;&gt;(o
                =&gt; o.defaultStrokeDashes, $ref(newValue)); &#125; defaultStrokeJoin(newValue?:
                <Math>{"Ref<StrokeJoin>) { return this."}</Math>get&lt;StrokeJoin&gt;(o =&gt; o.defaultStrokeJoin,
                $ref(newValue)); &#125; defaultStrokeMiterLimit(newValue?: <Math>{"Num) { return this."}</Math>get&lt;number&gt;(o
                =&gt; o.defaultStrokeMiterLimit, $ref(newValue)); &#125; defaultStrokeOverprint(newValue?:
                <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o =&gt; o.defaultStrokeOverprint, $ref(newValue));
                &#125; defaultStrokeWidth(newValue?: <Math>{"Num) { return this."}</Math>get&lt;number&gt;(o =&gt;
                o.defaultStrokeWidth, $ref(newValue)); &#125; defaultStroked(newValue?:
                <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o =&gt; o.defaultStroked,
                <Math>{"ref(newValue)); } documentColorSpace() { return this."}</Math>get&lt;DocumentColorSpace&gt;(o =&gt;
                o.documentColorSpace); &#125; fullName() &#123; return this.<Math>{"get<File>(o => o.fullName); } geometricBounds() { return this."}</Math>get&lt;Rect&gt;(o
                =&gt; o.geometricBounds); &#125; height() &#123; return this.<Math>{"get<number>(o => o.height); } inkList() { return this."}</Math>get&lt;Ink&#91;&#93;&gt;(o
                =&gt; o.inkList); &#125; kinsokuSet() &#123; return this.<Math>{`${''}get<string[]>(o => o.kinsokuSet); } mojikumiSet() { return this.`}</Math>get&lt;string&#91;&#93;&gt;(o
                =&gt; o.mojikumiSet); &#125; outputResolution() &#123; return this.$get&lt;number&gt;(o =&gt;
                o.outputResolution); &#125; pageOrigin(newValue?: <Math>{"Ref<Point>) { return this."}</Math>get&lt;Point&gt;(o
                =&gt; o.pageOrigin, <Math>{"ref(newValue)); } path() { return this."}</Math>get&lt;File&gt;(o =&gt; o.path);
                &#125; printTiles() &#123; return this.$get&lt;boolean&gt;(o =&gt; o.printTiles); &#125;
                rasterEffectSettings(newValue?: <Math>{"Ref<RasterEffectOptions>) { return this."}</Math>get&lt;RasterEffectOptions&gt;(o
                =&gt; o.rasterEffectSettings, $ref(newValue)); &#125; rulerOrigin(newValue?:
                <Math>{"Ref<Point>) { return this."}</Math>get&lt;Point&gt;(o =&gt; o.rulerOrigin,
                <Math>{"ref(newValue)); } rulerUnits() { return this."}</Math>get&lt;RulerUnits&gt;(o =&gt; o.rulerUnits);
                &#125; saved(newValue?: <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o =&gt; o.saved,
                $ref(newValue)); &#125; selection(newValue?: <Math>{"Any) { return this."}</Math>get&lt;any&gt;(o =&gt;
                o.selection, <Math>{"ref(newValue)); } showPlacedImages() { return this."}</Math>get&lt;boolean&gt;(o =&gt;
                o.showPlacedImages); &#125; splitLongPaths() &#123; return this.<Math>{"get<boolean>(o => o.splitLongPaths); } stationery() { return this."}</Math>get&lt;boolean&gt;(o
                =&gt; o.stationery); &#125; tileFullPages() &#123; return this.<Math>{"get<boolean>(o => o.tileFullPages); } useDefaultScreen() { return this."}</Math>get&lt;boolean&gt;(o
                =&gt; o.useDefaultScreen); &#125; variablesLocked(newValue?: <Math>{"Bool) { return this."}</Math>get&lt;boolean&gt;(o
                =&gt; o.variablesLocked, <Math>{"ref(newValue)); } visibleBounds() { return this."}</Math>get&lt;Rect&gt;(o
                =&gt; o.visibleBounds); &#125; width() &#123; return this.$get&lt;number&gt;(o =&gt; o.width); &#125;
            </Paragraph>
            <Paragraph>
                constructor(ref: $Reference&lt;Document&gt; | string) &#123; super(ref, "Document", undefined as any);
                this._document = this; &#125;
            </Paragraph>
            <Paragraph>
                activate() &#123; return this.$call(o =&gt; o.activate); &#125; close(saving?:
                <Math>{"Ref<SaveOptions>) { return this."}</Math>call(o =&gt; o.close, $ref(saving)); &#125;
                convertCoordinate(coordinate: $Ref&lt;Point&gt;, source: $Ref&lt;CoordinateSystem&gt;, destination:
                <Math>{"Ref<CoordinateSystem>) { return this."}</Math>call(o =&gt; o.convertCoordinate, $ref(coordinate),
                $ref(source), $ref(destination)); &#125; exportFile(exportFile: $Ref&lt;File&gt;, exportFormat:
                $Ref&lt;ExportType&gt;, options?: <Math>{"Any) { return this."}</Math>call(o =&gt; o.exportFile,
                $ref(exportFile), $ref(exportFormat), $ref(options)); &#125; exportPDFPreset(file:
                <Math>{"Ref<File>) { return this."}</Math>call(o =&gt; o.exportPDFPreset, $ref(file)); &#125;
                exportPerspectiveGridPreset(file: <Math>{"Ref<File>) { return this."}</Math>call(o =&gt;
                o.exportPerspectiveGridPreset, $ref(file)); &#125; exportPrintPreset(file:
                <Math>{"Ref<File>) { return this."}</Math>call(o =&gt; o.exportPrintPreset, $ref(file)); &#125;
                exportSelectionAsAi(exportFile: <Math>{"Ref<File>) { return this."}</Math>call(o =&gt;
                o.exportSelectionAsAi, $ref(exportFile)); &#125; exportSelectionAsPNG(exportFile: $Ref&lt;File&gt;,
                options?: <Math>{"Any) { return this."}</Math>call(o =&gt; o.exportSelectionAsPNG, $ref(exportFile),
                $ref(options)); &#125; exportVariables(file: <Math>{"Ref<File>) { return this."}</Math>call(o =&gt;
                o.exportVariables, $ref(file)); &#125; fitArtboardToSelectedArt(index?: <Math>{"Num) { return this."}</Math>call(o
                =&gt; o.fitArtboardToSelectedArt, <Math>{"ref(index)); } getPerspectiveActivePlane() { return this."}</Math>call(o
                =&gt; o.getPerspectiveActivePlane); &#125; hidePerspectiveGrid() &#123; return this.$call(o =&gt;
                o.hidePerspectiveGrid); &#125; imageCapture(imageFile: $Ref&lt;File&gt;, clipBounds?: $Ref&lt;Rect&gt;,
                options?: <Math>{"Ref<ImageCaptureOptions>) { return this."}</Math>call(o =&gt; o.imageCapture,
                $ref(imageFile), $ref(clipBounds), $ref(options)); &#125; importCharacterStyles(fileSpec:
                <Math>{"Ref<File>) { return this."}</Math>call(o =&gt; o.importCharacterStyles, $ref(fileSpec)); &#125;
                importFile(importFile: $Ref&lt;File&gt;, isLinked: $Bool, libraryName?: $Str, itemName?: $Str, elementRef?:
                $Str, modifiedTime?: $Num, creationTime?: $Num, adobeStockId?: $Str, adobeStockLicense?:
                <Math>{"Str) { return this."}</Math>call(o =&gt; o.importFile, $ref(importFile), $ref(isLinked),
                $str(libraryName), $str(itemName), $str(elementRef), $ref(modifiedTime), $ref(creationTime),
                $str(adobeStockId), $str(adobeStockLicense)); &#125; importPDFPreset(fileSpec: $Ref&lt;File&gt;,
                replacingPreset?: <Math>{"Bool) { return this."}</Math>call(o =&gt; o.importPDFPreset, $ref(fileSpec),
                $ref(replacingPreset)); &#125; importParagraphStyles(fileSpec: <Math>{"Ref<File>) { return this."}</Math>call(o
                =&gt; o.importParagraphStyles, $ref(fileSpec)); &#125; importPerspectiveGridPreset(fileSpec:
                $Ref&lt;File&gt;, perspectivePreset?: <Math>{"Str) { return this."}</Math>call(o =&gt;
                o.importPerspectiveGridPreset, $ref(fileSpec), $str(perspectivePreset)); &#125;
                importPrintPreset(printPreset: $Str, fileSpec: <Math>{"Ref<File>) { return this."}</Math>call(o =&gt;
                o.importPrintPreset, $str(printPre
            </Paragraph>
        </Section>
    </Chapter>
);
