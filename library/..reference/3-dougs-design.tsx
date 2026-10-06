import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import { Caption } from './o1-the-catalogue~views.tsx';
import DesignSynopsis from '../.design/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#d487a8</Coloured>
        <Title>[[ Dougs Design ]]</Title>
        <Paragraph>
            <Caption />
            The book <Means>$[[ Dougs Design ]]</Means> keeps the design of this library.
        </Paragraph>
        <Synopsis>{DesignSynopsis()}</Synopsis>
    </Chapter>
);
