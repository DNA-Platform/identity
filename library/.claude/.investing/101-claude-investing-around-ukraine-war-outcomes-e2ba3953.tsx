import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--investing-around-ukraine-war-outcomes--e2ba3953/.cover.tsx';
import TheSynopsis from '../.conversations/claude--investing-around-ukraine-war-outcomes--e2ba3953/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Investing around Ukraine war outcomes ]]( claude--Investing around Ukraine war outcomes--e2ba3953 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
