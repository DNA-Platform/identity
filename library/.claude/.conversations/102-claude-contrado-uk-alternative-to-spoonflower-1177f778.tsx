import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
