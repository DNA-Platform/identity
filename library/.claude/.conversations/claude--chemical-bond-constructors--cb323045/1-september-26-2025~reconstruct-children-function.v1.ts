private reconstructProps(props: any, context: $BondOrchestrationContext): any {
    if (!context.isModified) {
        return props;
    }
    
    const reconstructedChildren = context.singleton && context.children.length === 1 ? 
        context.children[0] : 
        context.children;
    
    return { ...props, children: reconstructedChildren };
}