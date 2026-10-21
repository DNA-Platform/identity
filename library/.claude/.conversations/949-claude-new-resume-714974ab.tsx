import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--new-resume--714974ab/.cover.tsx';
import TheSynopsis from './claude--new-resume--714974ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[29 May 2026](2026-05-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ New Resume ]]( claude--New Resume--714974ab )</Title>
        <Paragraph>
            <Caption />
            A conversation, 159 exchanges: <Means>$[[ New Resume ]]( claude--New Resume--714974ab )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
