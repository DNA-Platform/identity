import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--calculating-ownership-percentage-in-tonx--277e30ae/.cover.tsx';
import TheSynopsis from './claude--calculating-ownership-percentage-in-tonx--277e30ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Calculating ownership percentage in tonx ]]( claude--Calculating ownership percentage in tonx--277e30ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
