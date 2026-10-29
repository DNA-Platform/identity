import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Camel Crush cigarette availability in Georgia ]]( claude--Camel Crush cigarette availability in Georgia--bca6a3ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
