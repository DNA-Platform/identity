import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fixed chemistry..ts - BondExecutionContext react method v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// In $BondExecutionContext class, fix the react method:

react(id: string) {
    if (!this.resolved.get(id))
        throw new Error("One cannot react to an unresolved action")
    this.reacted.set(id, true);  // ← FIXED: Was setting resolved instead of reacted
}`}
        </CodeBox>
    </Chapter>
);
