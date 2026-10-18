import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ PathItem Shadow Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $PathItem extends $PageItem<PathItem> {
    // Read-only properties
    area(): number { return this.$get<number>(o => o.area); }
    length(): number { return this.$get<number>(o => o.length); }
    pathPoints(): $PathPoints { return $docref(this.$get(o => o.pathPoints), this.typename(), this.document()); }
    selectedPathPoints(): $PathPoints { return $docref(this.$get(o => o.selectedPathPoints), this.typename(), this.document()); }

    // Read-write properties 
    clipping(newValue?: boolean): boolean | Reference<boolean> { 
        return this.$get<boolean>(o => o.clipping, $ref(newValue)); 
    }
    closed(newValue?: boolean): boolean | Reference<boolean> { 
        return this.$get<boolean>(o => o.closed, $ref(newValue)); 
    }
    evenodd(newValue?: boolean): boolean | Reference<boolean> { 
        return this.$get<boolean>(o => o.evenodd, $ref(newValue)); 
    }
    guides(newValue?: boolean): boolean | Reference<boolean> { 
        return this.$get<boolean>(o => o.guides, $ref(newValue)); 
    }
    polarity(newValue?: PolarityValues): PolarityValues | Reference<PolarityValues> { 
        return this.$get<PolarityValues>(o => o.polarity, $ref(newValue)); 
    }
    resolution(newValue?: number): number | Reference<number> { 
        return this.$get<number>(o => o.resolution, $ref(newValue)); 
    }

    // Fill properties
    fillColor(newValue?: Color): Color | Reference<Color> {
        return this.$get<Color>(o => o.fillColor, $ref(newValue));
    }
    fillOverprint(newValue?: boolean): boolean | Reference<boolean> {
        return this.$get<boolean>(o => o.fillOverprint, $ref(newValue));
    }
    filled(newValue?: boolean): boolean | Reference<boolean> {
        return this.$get<boolean>(o => o.filled, $ref(newValue));
    }

    // Stroke properties
    strokeCap(newValue?: StrokeCap): StrokeCap | Reference<StrokeCap> {
        return this.$get<StrokeCap>(o => o.strokeCap, $ref(newValue));
    }
    strokeColor(newValue?: Color): Color | Reference<Color> {
        return this.$get<Color>(o => o.strokeColor, $ref(newValue));
    }
    strokeDashOffset(newValue?: number): number | Reference<number> {
        return this.$get<number>(o => o.strokeDashOffset, $ref(newValue));
    }
    strokeDashes(newValue?: number[]): number[] | Reference<number[]> {
        return this.$get<number[]>(o => o.strokeDashes, $ref(newValue));
    }
    strokeJoin(newValue?: StrokeJoin): StrokeJoin | Reference<StrokeJoin> {
        return this.$get<StrokeJoin>(o => o.strokeJoin, $ref(newValue));
    }
    strokeMiterLimit(newValue?: number): number | Reference<number> {
        return this.$get<number>(o => o.strokeMiterLimit, $ref(newValue));
    }
    strokeOverprint(newValue?: boolean): boolean | Reference<boolean> {
        return this.$get<boolean>(o => o.strokeOverprint, $ref(newValue));
    }
    strokeWidth(newValue?: number): number | Reference<number> {
        return this.$get<number>(o => o.strokeWidth, $ref(newValue));
    }
    stroked(newValue?: boolean): boolean | Reference<boolean> {
        return this.$get<boolean>(o => o.stroked, $ref(newValue));
    }

    // Methods
    setEntirePath(pathPoints: [number, number][]): void {
        this.$call(o => o.setEntirePath, $ref(pathPoints)).$eval();
    }

    constructor(ref: Reference<PathItem> | string, document: $Document) {
        super(ref, document, "PathItem");
    }
}`}
        </CodeBox>
    </Chapter>
);
