import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 May 2026: <Means>$[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
