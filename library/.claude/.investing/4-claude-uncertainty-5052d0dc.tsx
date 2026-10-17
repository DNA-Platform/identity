import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--uncertainty--5052d0dc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--uncertainty--5052d0dc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Uncertainty ]]( claude--Uncertainty--5052d0dc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 January 2026: <Means>$[[ Uncertainty ]]( claude--Uncertainty--5052d0dc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
