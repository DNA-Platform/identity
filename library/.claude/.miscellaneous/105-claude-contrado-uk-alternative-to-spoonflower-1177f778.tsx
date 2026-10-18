import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.cover.tsx';
import TheSynopsis from '../.conversations/claude--contrado-uk-alternative-to-spoonflower--1177f778/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
