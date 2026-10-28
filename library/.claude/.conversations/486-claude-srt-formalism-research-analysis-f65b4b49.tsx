import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--srt-formalism-research-analysis--f65b4b49/.cover.tsx';
import TheSynopsis from './claude--srt-formalism-research-analysis--f65b4b49/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[2 October 2025](2025-10-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
