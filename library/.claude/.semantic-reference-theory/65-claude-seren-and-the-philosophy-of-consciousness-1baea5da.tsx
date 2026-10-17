import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Seren &amp; The Philosophy of Consciousness ]]( claude--Seren &amp; The Philosophy of Consciousness--1baea5da )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
