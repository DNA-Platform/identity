import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--what-is-better-for-charging-cl--5b5fddc8/.cover.tsx';
import TheSynopsis from './claude--what-is-better-for-charging-cl--5b5fddc8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ What is better for charging cl… ]]( claude--What is better for charging cl…--5b5fddc8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ What is better for charging cl… ]]( claude--What is better for charging cl…--5b5fddc8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
