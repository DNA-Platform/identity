import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ robots..txt v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>robots.txt at version 1</Heading>
            <Paragraph>
                User-agent: * Allow: /$ Allow: /index.html$ Allow: /static/ Disallow: /login Disallow: /internal/
            </Paragraph>
        </Section>
    </Chapter>
);
