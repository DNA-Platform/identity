import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.cover.tsx';
import TheSynopsis from '../.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 May 2026: <Means>$[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
