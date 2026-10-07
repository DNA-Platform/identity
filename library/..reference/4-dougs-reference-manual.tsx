import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Volume } from '../.manual/.book';
import { Caption } from './o1-the-catalogue~said.tsx';
import ManualCover from '../.manual/.cover';
import ManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Volume>{ManualCover()}</Volume>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            <Caption />
            The book <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts this library is built with.
        </Paragraph>
        <Synopsis>{ManualSynopsis()}</Synopsis>
    </Chapter>
);
