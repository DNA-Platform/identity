import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--consulting-neuroscientist-title-without-phd--3d953559/.cover.tsx';
import TheSynopsis from '../.conversations/claude--consulting-neuroscientist-title-without-phd--3d953559/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 July 2026](2026-07-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 July 2026: <Means>$[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
