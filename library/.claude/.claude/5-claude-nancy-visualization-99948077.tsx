import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--nancy-visualization--99948077/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nancy-visualization--99948077/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[24 June 2026](2026-06-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 June 2026: <Means>$[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
