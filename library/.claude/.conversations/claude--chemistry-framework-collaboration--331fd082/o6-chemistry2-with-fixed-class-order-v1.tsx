import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry2 with Fixed Class Order v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Move DecoratorCache before $Chemical to fix initialization order

class DecoratorCache {
    $: Map<string, { type: Type, expecting: '?' | '!' | '[]' }> = new Map();
    parent: Map<string, Type> = new Map();
    inert: Map<string, boolean> = new Map();
    dynamic: Map<string, ((a: any, b: any) => boolean) | undefined> = new Map();
}

// Now decorators can reference DecoratorCache
export class $Chemical {
    @inert()
    private _diagram!: Diagram;
    
    // ... rest of $Chemical class
}`}
        </CodeBox>
    </Chapter>
);
