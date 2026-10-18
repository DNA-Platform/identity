import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--field-with-one-element-and-tropical-geometry--fd859a94/.cover.tsx';
import TheSynopsis from './claude--field-with-one-element-and-tropical-geometry--fd859a94/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Field with one element and tropical geometry ]]( claude--Field with one element and tropical geometry--fd859a94 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Field with one element and tropical geometry ]]( claude--Field with one element and tropical geometry--fd859a94 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
