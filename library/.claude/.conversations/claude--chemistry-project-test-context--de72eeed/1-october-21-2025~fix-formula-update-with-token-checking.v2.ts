private bondCall(chemical: $Chemical, ...args: any[]): any {
    let id: string | undefined;
    const context = $Bond.context;
    const formula = chemical[$formula];
    
    if (context) {
        id = $BondExecutionContext.executionId(chemical, this);
        
        if (context.actions.has(id)) {
            // Method already called - check state
            if (context.resolved.get(id) && !context.reacted.get(id)) {
                // Promise resolved but hasn't been marked as reacted yet
                // Mark it now - don't schedule another update
                context.react(id);
                console.log("bondCall: marked as reacted");
            }
            // Either way, method was already called - skip (idempotent)
            return;
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
        // When promise completes, mark as resolved and update
        context.resolve(id!);
        formula.update();
    }));
}