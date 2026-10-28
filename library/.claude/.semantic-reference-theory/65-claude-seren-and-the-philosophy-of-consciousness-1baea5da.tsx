import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
