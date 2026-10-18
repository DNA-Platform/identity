import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ ..env File v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>.env File at version 1</Heading>
            <Paragraph>
                REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id-here.apps.googleusercontent.com
                REACT_APP_WORKSPACE_DOMAIN=yourcompany.com
            </Paragraph>
        </Section>
    </Chapter>
);
