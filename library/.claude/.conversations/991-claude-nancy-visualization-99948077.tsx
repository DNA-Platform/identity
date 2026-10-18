import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--nancy-visualization--99948077/.cover.tsx';
import TheSynopsis from './claude--nancy-visualization--99948077/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[24 June 2026](2026-06-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Nancy &gt; Visualization ]]( claude--Nancy &gt; Visualization--99948077 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
