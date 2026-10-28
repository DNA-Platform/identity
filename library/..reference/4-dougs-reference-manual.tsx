import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../.manual/20-the-bookshelf~code.tsx';
import { Volume } from '../.manual/19-the-cover~code.tsx';
import ManualCover from '../.manual/.cover';
import ManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Volume>{ManualCover()}</Volume>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            <Caption />
            What the library is built with, and how to build with it: <Means>$[[ Dougs Reference Manual ]]</Means>.
        </Paragraph>
        <Synopsis>{ManualSynopsis()}</Synopsis>
    </Chapter>
);
