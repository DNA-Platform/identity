import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
