import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--formal-system-exploration--1c9b3ac5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--formal-system-exploration--1c9b3ac5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 October 2025: <Means>$[[ Formal system exploration ]]( claude--Formal system exploration--1c9b3ac5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
