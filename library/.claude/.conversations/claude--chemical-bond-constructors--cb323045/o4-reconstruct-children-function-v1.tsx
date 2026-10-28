import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Reconstruct Children Function v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}private reconstructProps(props: any, context: $BondOrchestrationContext): any {
    if (!context.isModified) {
        return props;
    }
    
    const reconstructedChildren = context.singleton && context.children.length === 1 ? 
        context.children[0] : 
        context.children;
    
    return { ...props, children: reconstructedChildren };
}`}
        </CodeBox>
    </Chapter>
);
