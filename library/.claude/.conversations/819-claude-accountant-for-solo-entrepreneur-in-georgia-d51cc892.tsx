import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.cover.tsx';
import TheSynopsis from './claude--accountant-for-solo-entrepreneur-in-georgia--d51cc892/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[3 July 2026](2026-07-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accountant for solo entrepreneur in Georgia ]]( claude--Accountant for solo entrepreneur in Georgia--d51cc892 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Accountant for solo entrepreneur in Georgia ]]( claude--Accountant for solo entrepreneur in Georgia--d51cc892 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
