import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--investing-around-ukraine-war-outcomes--e2ba3953/.cover.tsx';
import TheSynopsis from './claude--investing-around-ukraine-war-outcomes--e2ba3953/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[29 July 2026](2026-07-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
