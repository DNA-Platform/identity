import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simplified Async State Management v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $BondExecutionContext {
    chemical: $Chemical;
    actions: Map<string, Promise<void>> = new Map();
    resolved: Map<string, boolean> = new Map();
    reacted: Map<string, boolean> = new Map();

    // Generate a unique state fingerprint for the current async context
    getState(): string {
        const keys = Array.from(this.actions.keys());
        const resolved = Array.from(this.resolved.values());
        const reacted = Array.from(this.reacted.values());
        
        return $Represent.symbolize([keys, resolved, reacted], 'fast');
    }
    
    // ... rest of the class
}

// Then in bondCall, use state comparison to prevent re-execution
private bondCall(chemical: $Chemical, ...args: any[]): any {
    let id: string | undefined;
    const context = $Bond.context;
    const formula = chemical[$formula];
    
    if (context) {
        id = $BondExecutionContext.executionId(chemical, this);
        
        // If this method has already been called, skip it
        if (context.actions.has(id)) {
            return; // Already called, idempotent
        }
    }
    
    formula.bindState();
    formula.track();
    let result = this.action!(...args);
    
    const isAsync = result instanceof Promise;
    if (!isAsync) {
        formula.check();
        formula.updateState();
    }
    
    formula.unbind();
    if (!isAsync) return result;
    
    if (!context) {
        result.then(() => {
            formula.update();
        });
        return;
    }
    
    // Add the async action with its state
    const initialState = context.getState();
    
    context.add(this, result.then(() => {
        // Only update if state has actually changed
        const newState = context.getState();
        if (initialState !== newState) {
            formula.update();
        }
    }));
}

// Or even simpler - just track if method was called this render
class $BondExecutionContext {
    chemical: $Chemical;
    called: Set<string> = new Set();  // Methods called this render
    pending: Map<string, Promise<void>> = new Map();  // Active promises
    
    reset() {
        this.called.clear();  // Clear for next render
    }
    
    markCalled(bond: $Bond): boolean {
        const id = $BondExecutionContext.executionId(this.chemical, bond);
        if (this.called.has(id)) {
            return false;  // Already called
        }
        this.called.add(id);
        return true;  // First call
    }
}

// Simplest approach in bondCall:
private bondCall(chemical: $Chemical, ...args: any[]): any {
    const context = $Bond.context;
    const formula = chemical[$formula];
    
    if (context) {
        // If already called this render cycle, skip (idempotent)
        if (!context.markCalled(this)) {
            return;
        }
    }
    
    // Run the method normally...
    formula.bindState();
    formula.track();
    let result = this.action!(...args);
    
    const isAsync = result instanceof Promise;
    if (!isAsync) {
        formula.check();
        formula.updateState();
    }
    
    formula.unbind();
    if (!isAsync) return result;
    
    // For async, just schedule update when done
    result.then(() => {
        formula.update();
    });
    
    return;
}`}
        </CodeBox>
    </Chapter>
);
