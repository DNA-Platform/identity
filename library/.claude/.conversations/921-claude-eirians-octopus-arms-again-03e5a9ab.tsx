import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirians-octopus-arms-again--03e5a9ab/.cover.tsx';
import TheSynopsis from './claude--eirians-octopus-arms-again--03e5a9ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[22 March 2026](2026-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian's Octopus Arms Again ]]( claude--Eirian's Octopus Arms Again--03e5a9ab )</Title>
        <Paragraph>
            <Caption />
            A conversation, 230 exchanges: <Means>$[[ Eirian's Octopus Arms Again ]]( claude--Eirian's Octopus Arms Again--03e5a9ab )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
