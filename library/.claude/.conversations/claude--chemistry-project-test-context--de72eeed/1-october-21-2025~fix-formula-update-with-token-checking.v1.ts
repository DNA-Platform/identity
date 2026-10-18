class $Formula {
    private _lastToken?: string;  // Track last execution context state
    
    update(token?: string) {
        // If token provided and hasn't changed, skip update
        if (token && token === this._lastToken) {
            console.log("update: token unchanged, skipping");
            return;
        }
        
        if (token) {
            this._lastToken = token;
        }
        
        if (this._update) {
            this._update();
        }
    }
    
    // Reset token when starting new render
    resetToken() {
        this._lastToken = undefined;
    }
}

// Alternative simpler fix - just check if already in correct state:
private bondCall(chemical: $Chemical, ...args: any[]): any {
    let id: string | undefined;
    const context = $Bond.context;
    const formula = chemical[$formula];
    
    if (context) {
        id = $BondExecutionContext.executionId(chemical, this);
        
        if (context.actions.has(id)) {
            if (context.resolved.get(id)) {
                if (!context.reacted.get(id)) {
                    // Mark as reacted immediately - don't schedule
                    context.react(id);
                    console.log("bondCall: marking as reacted");
                    // The update already happened when promise resolved
                    // No need to trigger another one
                }
                return; // Already processed
            }
            return; // Still pending
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
            console.log("bondCall: context-free: update");
            formula.update();
        });
        return;
    }
    
    id = $BondExecutionContext.executionId(chemical, this);
    context.add(this, result.then(() => {
        console.log("bondCall: async complete");
        // Mark as resolved and trigger ONE update
        context.resolve(id!);
        formula.update();
    }));
}