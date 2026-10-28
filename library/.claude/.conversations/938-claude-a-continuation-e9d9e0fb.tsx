import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--a-continuation--e9d9e0fb/.cover.tsx';
import TheSynopsis from './claude--a-continuation--e9d9e0fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ A Continuation ]]( claude--A Continuation--e9d9e0fb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ A Continuation ]]( claude--A Continuation--e9d9e0fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
