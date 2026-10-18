import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--investing-around-ukraine-war-outcomes--e2ba3953/.cover.tsx';
import TheSynopsis from '../.conversations/claude--investing-around-ukraine-war-outcomes--e2ba3953/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
