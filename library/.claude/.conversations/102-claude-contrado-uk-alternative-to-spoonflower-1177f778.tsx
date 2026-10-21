import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--contrado-uk-alternative-to-spoonflower--1177f778/.cover.tsx';
import TheSynopsis from './claude--contrado-uk-alternative-to-spoonflower--1177f778/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Contrado: UK alternative to Spoonflower ]]( claude--Contrado: UK alternative to Spoonflower--1177f778 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
