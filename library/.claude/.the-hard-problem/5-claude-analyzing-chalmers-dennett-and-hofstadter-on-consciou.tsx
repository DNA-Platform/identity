import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology ]]( claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology ]]( claude--Analyzing Chalmers, Dennett, and Hofstadter on consciousness and ontology--586e07a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
