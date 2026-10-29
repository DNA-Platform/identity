import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--coworking-in-tbilisi--1d63b14d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--coworking-in-tbilisi--1d63b14d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 May 2026](2026-05-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 May 2026: <Means>$[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
