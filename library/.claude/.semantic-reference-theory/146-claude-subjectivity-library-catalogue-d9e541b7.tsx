import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--subjectivity-library-catalogue--d9e541b7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--subjectivity-library-catalogue--d9e541b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 November 2026](2026-11-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Subjectivity library catalogue ]]( claude--Subjectivity library catalogue--d9e541b7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 November 2026: <Means>$[[ Subjectivity library catalogue ]]( claude--Subjectivity library catalogue--d9e541b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
