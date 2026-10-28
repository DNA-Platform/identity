import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

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
