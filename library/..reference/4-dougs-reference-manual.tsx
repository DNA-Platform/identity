import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import ManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#7a4a8c</Coloured>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            The book <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts this library is built with.
        </Paragraph>
        <Synopsis>{ManualSynopsis()}</Synopsis>
    </Chapter>
);
