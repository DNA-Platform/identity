import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--consulting-neuroscientist-title-without-phd--3d953559/.cover.tsx';
import TheSynopsis from '../.conversations/claude--consulting-neuroscientist-title-without-phd--3d953559/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 July 2026: <Means>$[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
