// In $BondExecutionContext class, fix the react method:

react(id: string) {
    if (!this.resolved.get(id))
        throw new Error("One cannot react to an unresolved action")
    this.reacted.set(id, true);  // ← FIXED: Was setting resolved instead of reacted
}