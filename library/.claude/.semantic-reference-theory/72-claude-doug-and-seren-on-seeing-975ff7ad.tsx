import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.cover.tsx';
import TheSynopsis from '../.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
