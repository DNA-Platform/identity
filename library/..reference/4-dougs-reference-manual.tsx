import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import { Caption } from './o1-the-catalogue~views.tsx';
import ManualSynopsis from '../.manual/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#4fb3a8</Coloured>
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Paragraph>
            <Caption />
            The book <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts this library is built with.
        </Paragraph>
        <Synopsis>{ManualSynopsis()}</Synopsis>
    </Chapter>
);
