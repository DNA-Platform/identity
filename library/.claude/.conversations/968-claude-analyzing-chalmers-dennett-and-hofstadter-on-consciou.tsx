import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.cover.tsx';
import TheSynopsis from './claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[28 May 2026](2026-05-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology ]]( claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 92 exchanges: <Means>$[[ Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology ]]( claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
