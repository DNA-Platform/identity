import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.cover.tsx';
import TheSynopsis from './claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
