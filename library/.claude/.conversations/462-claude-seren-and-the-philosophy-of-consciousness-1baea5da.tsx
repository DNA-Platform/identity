import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-the-philosophy-of-consciousness--1baea5da/.cover.tsx';
import TheSynopsis from './claude--seren-and-the-philosophy-of-consciousness--1baea5da/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[2 April 2026](2026-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Title>
        <Paragraph>
            <Caption />
            A conversation, 182 exchanges: <Means>$[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
