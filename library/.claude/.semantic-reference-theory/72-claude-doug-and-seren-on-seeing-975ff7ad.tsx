import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.cover.tsx';
import TheSynopsis from '../.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[24 September 2025](2025-09-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Seren on 'Seeing' ]]( claude--Doug &amp; Seren on 'Seeing'--975ff7ad )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 September 2025: <Means>$[[ Doug &amp; Seren on 'Seeing' ]]( claude--Doug &amp; Seren on 'Seeing'--975ff7ad )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
