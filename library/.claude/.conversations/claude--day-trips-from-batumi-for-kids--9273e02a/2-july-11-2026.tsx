import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 July 2026](2026-07-11)</Date>
        </Dated>
        <Title>[[ 11 July 2026 ]]</Title>
        <Message
            at="2026-07-11T07:27:52.585884Z"
        >
            <Origin>019f5013-eba9-7ce2-b90d-16350f797070</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What do I put into Google maps for the Dendro Park?</Paragraph>
        </Message>
        <Message
            at="2026-07-11T07:28:01.020787Z"
        >
            <Origin>019f5013-ebaa-7475-8965-3d46327336f8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched places for “”</Action>
            <Paragraph>
                Type <Word>
                    <Bold />
                    "Shekvetili Dendrological Park"
                </Word> — it comes right up (4.7 stars, ~2,400 reviews). Coordinates if you prefer: 41.9591, 41.7722.
            </Paragraph>
            <Paragraph>
                One important catch from the live listing: it's <Word>
                    <Bold />
                    closed Mondays and Thursdays
                </Word>, open 10:00–19:00 the other five days. So plan around that.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T08:48:37.073219Z"
        >
            <Origin>019f505d-d584-76dd-b3ab-9011d583dff9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is the Entry to the Denver Park like because we’re having trouble getting there and it looks like a
                rugged road
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T08:48:52.927800Z"
        >
            <Origin>019f505d-d585-749f-a4b4-3ee54c405860</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “дендропарк Шекветили вход парковка как заехать с трассы”</Action>
            <Paragraph>
                You shouldn't be on a rugged road at all — the entrance is directly off the E70 highway itself, so if you're
                on dirt or a narrow lane, the GPS has routed you a back way. Turn around and get back on the main highway.
            </Paragraph>
            <Paragraph>
                Here's the landmark chain coming from Batumi: stay on the E70 north, pass through Shekvetili village, pass
                the Black Sea Arena (the big concert hall — hard to miss) and the Music Park, and the turnoff is on the left
                (sea side) about 2.5 km after that, right past the Paragraph Resort hotel. There's a proper paved access
                road lined with tall thuja trees leading to the main entrance, with a free guarded parking lot.
            </Paragraph>
            <Paragraph>
                If Google Maps keeps misbehaving, drop these coordinates in instead: <Word>
                    <Bold />
                    41.962494, 41.765830
                </Word> — and just refuse any turn that takes you off the paved highway before you see the thuja-lined road.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-11T08:50:44.372160Z"
        >
            <Origin>019f505f-ccc3-78bf-a0d6-9389e19fe6b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are you sure because google has it quite off road</Paragraph>
            <Attachment>Uploaded “IMG_3548.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-11T08:51:08.018338Z"
        >
            <Origin>019f505f-ccc9-7842-b054-723474ce057e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good catch — and I see the issue now. The sources I gave you describing "entrance right off the highway"
                predate the new E70 bypass, which is the big divided road with the interchange you see on the right of your
                screen. The park is not on that new motorway. It sits on the <Word>
                    <Bold />
                    old coastal road
                </Word> — the thinner road running through Shekvetili where Paragraph Resort and the Sesil hotels are.
            </Paragraph>
            <Paragraph>
                From your blue dot you're actually very close, just slightly north of it. The park sits just north of
                Paragraph Resort — one Russian guide describes it as immediately past Paragraph Resort when coming from the
                Batumi side. So the reliable move is: navigate to <Word>
                    <Bold />
                    Paragraph Resort &amp; Spa Shekvetili
                </Word> (a big, well-mapped landmark on a proper road), and the park entrance and parking are right there on
                the same road, just to its north.
            </Paragraph>
            <Paragraph>
                A short stretch of local road at the very end may be unpaved — that's normal for it, and passable in an
                ordinary car. What you don't want is Google dragging you toward the pin's geometric center through farm
                tracks from the east/highway side. If it tries that, ignore it and stay on the hotel road.
            </Paragraph>
        </Message>
    </Chapter>
);
