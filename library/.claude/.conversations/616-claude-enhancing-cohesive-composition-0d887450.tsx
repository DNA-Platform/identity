import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--enhancing-cohesive-composition--0d887450/.cover.tsx';
import TheSynopsis from './claude--enhancing-cohesive-composition--0d887450/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[20 March 2025](2025-03-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Enhancing Cohesive Composition ]]( claude--Enhancing Cohesive Composition--0d887450 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Enhancing Cohesive Composition ]]( claude--Enhancing Cohesive Composition--0d887450 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
