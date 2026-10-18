import { Chapter, Heading, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ chemistry-framework v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>chemistry-framework at version 4</Heading>
        </Section>
    </Chapter>
);
