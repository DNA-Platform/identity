import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ $$ Run-Once Pattern Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// In $Chemical class, add tracking for $$ methods:

export class $Chemical {
    private $$executed = new Set<string>();
    
    // In the proxy handler or wherever methods are invoked:
    private invokeMethod(methodName: string, ...args: any[]) {
        // Check for $$ prefix - run exactly once methods
        if (methodName.startsWith('$$')) {
            if (this.$$executed.has(methodName)) {
                return; // Already ran once, skip
            }
            this.$$executed.add(methodName);
        }
        
        // Continue with normal method invocation...
        return this[methodName](...args);
    }
}

// Usage example:
export class $DataComponent extends $Chemical {
    data: any = null;
    
    // Runs exactly once, even if called from multiple places
    async $$loadInitialData() {
        const response = await fetch('/api/data');
        this.data = await response.json();
    }
    
    $DataComponent() {
        this.$$loadInitialData(); // First call - executes
    }
    
    view() {
        this.$$loadInitialData(); // Subsequent calls - skipped
        
        if (!this.data) return <div>Loading...</div>;
        return <div>{this.data.message}</div>;
    }
}`}
        </CodeBox>
    </Chapter>
);
