import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Install Dependencies v1 ]]</Title>
        <CodeBox
            language="bash"
        >
            {`
# Install React Router for navigation
npm install react-router-dom

# Types for TypeScript
npm install --save-dev @types/react-router-dom
`}
        </CodeBox>
    </Chapter>
);
