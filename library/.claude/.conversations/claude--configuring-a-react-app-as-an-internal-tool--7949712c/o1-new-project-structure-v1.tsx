import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
