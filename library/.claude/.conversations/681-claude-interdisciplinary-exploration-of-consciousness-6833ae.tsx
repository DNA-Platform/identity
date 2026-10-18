import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--interdisciplinary-exploration-of-consciousness--6833ae75/.cover.tsx';
import TheSynopsis from './claude--interdisciplinary-exploration-of-consciousness--6833ae75/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[11 November 2024](2024-11-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Interdisciplinary Exploration of Consciousness ]]( claude--Interdisciplinary Exploration of Consciousness--6833ae75 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Interdisciplinary Exploration of Consciousness ]]( claude--Interdisciplinary Exploration of Consciousness--6833ae75 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
