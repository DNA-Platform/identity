import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--subjectivity-library-catalogue--d9e541b7/.cover.tsx';
import TheSynopsis from './claude--subjectivity-library-catalogue--d9e541b7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2026</Part>
        <Dated>
            <Date>[5 November 2026](2026-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Subjectivity library catalogue ]]( claude--Subjectivity library catalogue--d9e541b7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Subjectivity library catalogue ]]( claude--Subjectivity library catalogue--d9e541b7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
