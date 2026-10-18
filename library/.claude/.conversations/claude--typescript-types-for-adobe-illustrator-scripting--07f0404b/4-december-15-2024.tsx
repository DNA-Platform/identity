import { Append, Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 December 2024](2024-12-15)</Date>
        </Dated>
        <Title>[[ 15 December 2024 ]]</Title>
        <Message
            at="2024-12-15T22:22:19.884155Z"
        >
            <Origin>c664b0e0-0815-45eb-8d6c-be3efdc4d268</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want to make this function remove the curviness from PathPointItems. How can I dod that?
                angular(makeAngular?: boolean): boolean &#123; const allCorner = this.pathPoints().all(p =&gt;
                p.item().pointType === PointType.CORNER); if (makeAngular) &#123; this.pathPoints().do(p =&gt;
                p.set().pointType(PointType.CORNER)); this._defaultPointType = PointType.CORNER; &#125; return allCorner;
                &#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-12-15T22:22:41.533260Z"
        >
            <Origin>0a615e90-77b7-4108-ba5a-af0b447f2f6a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                To remove the "curviness" from PathPoints, we need to make their left and right direction points coincide
                with their anchor points. This makes each point a true corner point. Here's the modified function:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`angular(makeAngular?: boolean): boolean {
    const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);
    if (makeAngular) {
        this.pathPoints().do(p => {
            const anchor = p.item().anchor;
            p.set()
                .pointType(PointType.CORNER)
                .leftDirection(anchor)
                .rightDirection(anchor);
        });
        this._defaultPointType = PointType.CORNER;
    }
    return allCorner;
}`}
            </CodeBox>
            <Paragraph>Key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>When making points angular, get each point's anchor position</Line>
                <Line>Set both the left and right direction points to match the anchor point</Line>
                <Line>This effectively removes any curve handles while also setting the point type to CORNER</Line>
            </Paragraph>
            <Paragraph>
                This will make the path truly angular, with straight lines between points, rather than just changing the
                point type.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-15T22:44:34.426458Z"
        >
            <Origin>2f67869e-5b42-4cb2-aa23-174b4a28e1f6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Would it be possible to reimplement these throwing away all information except the position of the point? I
                want moving back and forth between angular and curve states to be equivalent:
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-12-15T22:45:11.580712Z"
        >
            <Origin>de35cbc9-0451-43fa-9008-10dec942edfe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes! We can reimplement these smoothing methods using only anchor positions. This way they'll behave
                identically whether starting from an angular path or already smooth one. Here's the modified version:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Smoothing {
    static bezier(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        // Extract just the anchor positions
        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) / 3;
            const deltaY = (next[1] - prev[1]) / 3;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static catmullRomSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) / 6;
            const deltaY = (next[1] - prev[1]) / 6;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static tensionSmooth(path: PathItemQuery, tension: number = 0.16): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) * tension;
            const deltaY = (next[1] - prev[1]) * tension;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static bSplineSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 4) return;

        const positions = points.toArray().map(p => p.anchor());
        const smoothedAnchors: Position[] = [];

        for (let i = 1; i < positions.length - 2; i++) {
            const p0 = positions[i - 1];
            const p1 = positions[i];
            const p2 = positions[i + 1];
            const p3 = positions[i + 2];

            const smoothX = (p0[0] + 4 * p1[0] + p2[0]) / 6;
            const smoothY = (p0[1] + 4 * p1[1] + p2[1]) / 6;

            const deltaX = (p3[0] - p0[0]) / 6;
            const deltaY = (p3[1] - p0[1]) / 6;

            const adjustedX = smoothX + deltaX;
            const adjustedY = smoothY + deltaY;

            smoothedAnchors.push([adjustedX, adjustedY]);
        }

        for (let i = 1; i < positions.length - 2; i++) {
            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .anchor(smoothedAnchors[i - 1]);
        }
    }

    static cubicSplineSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());
        const n = positions.length;
        const h = Array(n - 1);

        for (let i = 0; i < n - 1; i++) {
            const p1 = positions[i];
            const p2 = positions[i + 1];
            h[i] = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
        }

        for (let i = 1; i < n - 1; i++) {
            const current = positions[i];
            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([
                    current[0] - h[i - 1] / 3,
                    current[1] - h[i - 1] / 3
                ])
                .rightDirection([
                    current[0] + h[i] / 3,
                    current[1] + h[i] / 3
                ]);
        }
    }
}`}
            </CodeBox>
            <Paragraph>Key changes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>First extract all anchor positions into an array</Line>
                <Line>Use only these positions for all calculations</Line>
                <Line>Never look at existing direction points or point types</Line>
                <Line>Apply the calculated handle positions fresh each time</Line>
            </Paragraph>
            <Paragraph>
                This way, whether you start with an angular path or a curved one, you'll get the same result each time the
                smoothing is applied. Going from angular to smooth and back to angular will leave you with exactly the same
                path.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
    </Chapter>
);
