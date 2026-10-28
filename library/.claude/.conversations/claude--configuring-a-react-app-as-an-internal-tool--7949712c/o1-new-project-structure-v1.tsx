import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/32-the-address~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ New Project Structure v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>New Project Structure at version 1</Heading>
            <Paragraph>
                src/ ├── components/ │ ├── HomePage.tsx │ ├── InternalToolPage.tsx │ ├── ProtectedRoute.tsx │ └── Login.tsx
                ├── services/ │ └── auth.ts ├── App.tsx ├── index.tsx └── public/ └── robots.txt
            </Paragraph>
        </Section>
    </Chapter>
);
