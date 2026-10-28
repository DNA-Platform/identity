import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/32-the-address~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

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
