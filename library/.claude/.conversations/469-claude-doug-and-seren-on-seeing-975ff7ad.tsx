import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--doug-and-seren-on-seeing--975ff7ad/.cover.tsx';
import TheSynopsis from './claude--doug-and-seren-on-seeing--975ff7ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[26 September 2025](2025-09-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Seren on 'Seeing' ]]( claude--Doug &amp; Seren on 'Seeing'--975ff7ad )</Title>
        <Paragraph>
            <Caption />
            A conversation, 80 exchanges: <Means>$[[ Doug &amp; Seren on 'Seeing' ]]( claude--Doug &amp; Seren on 'Seeing'--975ff7ad )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
