import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.cover.tsx';
import TheSynopsis from '../.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
