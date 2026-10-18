import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fix for Async Methods in View v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Option 1: Pass execution context state to update
private schedule(chemical: $Chemical, action: () => void) {
    console.log("schedule", chemical.toString(), action);
    const formula = chemical[$formula];
    const orchestrator = chemical[$orchestrator];
    orchestrator.actions.push(action);
    
    if (orchestrator.active) {
        console.log("schedule: active update", chemical.toString(), action);
        // Run the action immediately if orchestrator is active
        action();
        // Then trigger update
        formula.update();
    }
}

// Option 2: Track pending async methods differently
class $BondExecutionContext {
    chemical: $Chemical;
    actions: Map<string, Promise<void>> = new Map();
    resolved: Map<string, boolean> = new Map();
    reacted: Map<string, boolean> = new Map();
    pending: Set<string> = new Set(); // Track methods that have been called
    
    add(bond: $Bond, action: Promise<void>) {
        const id = $BondExecutionContext.executionId(this.chemical, bond);
        this.pending.add(id); // Mark as called
        this.actions.set(id, action.then(() => { 
            this.resolved.set(id, true);
        }));
        this.resolved.set(id, false);
        this.reacted.set(id, false);
    }
    
    // Check if method has been called (not just if promise exists)
    hasPending(id: string): boolean {
        return this.pending.has(id);
    }
}

// Then in bondCall:
private bondCall(chemical: $Chemical, ...args: any[]): any {
    let id: string | undefined;
    const context = $Bond.context;
    const formula = chemical[$formula];
    
    if (context) {
        id = $BondExecutionContext.executionId(chemical, this);
        
        // Check if this method has already been called
        if (context.hasPending(id)) {
            // Already called, don't run again
            if (context.resolved.get(id) && !context.reacted.get(id)) {
                // If resolved but not reacted, mark as reacted
                context.react(id);
            }
            return;
        }
    }
    
    // Rest of the method...
}

// Option 3: Use symbolized state for update coordination
class $Formula {
    update(contextState?: string) {
        if (contextState) {
            // Deserialize and merge context state
            const state = $Represent.literalize(contextState);
            // Apply state to current execution context
            if ($Bond.context) {
                Object.assign($Bond.context, state);
            }
        }
        
        // Continue with normal update logic
        if (this._update) {
            this._update();
        }
    }
}`}
        </CodeBox>
    </Chapter>
);
