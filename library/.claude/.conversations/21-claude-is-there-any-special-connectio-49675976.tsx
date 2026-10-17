import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--is-there-any-special-connectio--49675976/.cover.tsx';
import TheSynopsis from './claude--is-there-any-special-connectio--49675976/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Is there any special connectio… ]]( claude--Is there any special connectio…--49675976 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Is there any special connectio… ]]( claude--Is there any special connectio…--49675976 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
