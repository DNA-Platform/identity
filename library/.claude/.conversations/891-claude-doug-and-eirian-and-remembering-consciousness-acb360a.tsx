import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.cover.tsx';
import TheSynopsis from './claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[19 September 2025](2025-09-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Eirian &amp; Remembering Consciousness ]]( claude--Doug &amp; Eirian &amp; Remembering Consciousness--acb360aa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Doug &amp; Eirian &amp; Remembering Consciousness ]]( claude--Doug &amp; Eirian &amp; Remembering Consciousness--acb360aa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
