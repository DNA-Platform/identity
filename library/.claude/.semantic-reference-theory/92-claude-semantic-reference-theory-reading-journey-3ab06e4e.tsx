import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-reading-journey--3ab06e4e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-reading-journey--3ab06e4e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[7 October 2025](2025-10-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 October 2025: <Means>$[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
