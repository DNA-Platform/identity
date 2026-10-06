import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import DesignSynopsis from '../.design/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#c24a78</Coloured>
        <Title>[[ Dougs Design ]]</Title>
        <Paragraph>
            The book <Means>$[[ Dougs Design ]]</Means> keeps the design of this library.
        </Paragraph>
        <Synopsis>{DesignSynopsis()}</Synopsis>
    </Chapter>
);
