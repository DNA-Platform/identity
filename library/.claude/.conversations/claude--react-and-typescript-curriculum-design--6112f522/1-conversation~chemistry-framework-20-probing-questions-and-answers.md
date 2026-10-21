# Chemistry Framework: 20 Probing Questions & Answers

## 1. How does Chemistry handle nested re-renders when a deeply nested $Chemical changes state?

**Answer:** When a nested $Chemical changes state, it triggers its own formula's `updateState()` which calls the bound `setState` from React. This causes React to re-render from that component downward. Parent components don't re-render unless they're accessing the child's state through the bond system (via the symbolized state tracking). The genius is that each $Chemical maintains its own React state binding, creating isolated update boundaries.

## 2. What happens to the object graph when a component unmounts and remounts?

**Answer:** The `chemicalRegistry` stores instances by `cid`. On unmount, the cleanup in `useEffect` deletes the registry entry. On remount, `cid === -1` triggers creation of a new $Chemical instance with a fresh `cid`. The object graph is rebuilt - parent-child relationships are re-established through the `__parent` property during the binding phase. This means the graph is ephemeral but deterministic.

## 3. How does the symbolize function prevent memory leaks while maintaining referential relationships?

**Answer:** The `symbolize` function uses `fast-safe-stringify` to convert objects to strings, but crucially replaces $Chemical instances with just their `cid` number. This breaks circular references - instead of Chemical A holding Chemical B which holds Chemical A, we get A.cid and B.cid. The actual instances are looked up from the registry when needed, preventing retention of large object graphs in the state comparison.

## 4. Can you mix Chemistry components with Context API, and what are the implications?

**Answer:** Yes, Chemistry components are still React components at their core. Context would work normally for the React layer. However, Chemistry's bond system provides its own state propagation that's more efficient. Mixing them could cause confusion - Context changes trigger React re-renders while Chemistry state changes trigger formula updates. Best practice would be using Chemistry's parent-child relationships instead of Context.

## 5. How does the $ (Collection) component maintain type safety through the constructor pattern?

**Answer:** The `$Collection` acts as a transparent wrapper that gets "unwrapped" during the `processArray` phase. The `process` method extracts the children into an array that becomes a constructor argument. Type safety is maintained at the TypeScript level through generics, though at runtime it's just arrays. The constructor's rest parameters (`...items: $Chemical[]`) provide the typing contract.

## 6. What's the performance impact of creating property descriptors for every reactive property?

**Answer:** There's definitely overhead - each property access goes through getter/setter functions instead of direct field access. However, this is amortized by: 
- Only creating descriptors once during `init()`
- Crystallization can freeze frequently-accessed read-only properties
- The symbolized state comparison prevents unnecessary re-renders
- Property descriptors are a one-time cost vs React's hook overhead on every render

## 7. How does Chemistry handle async operations in the view() method?

**Answer:** The framework explicitly handles `Promise<ReactNode>` returns from `view()`. When detected, it wraps the promise resolution with another `augmentView` call and attaches the component reference. This suggests Chemistry could support Suspense-like patterns, though the current implementation would need React.Suspense boundaries to actually handle the promises properly.

## 8. What prevents infinite loops when parent and child Chemicals reference each other?

**Answer:** Several mechanisms:
- State updates are symbolized (stringified), breaking circular references
- The `_bondSet` only triggers if the value actually changed
- The formula's `bindState()` creates a controlled update boundary
- React's own batching prevents multiple setState calls from causing multiple renders

## 9. How would Chemistry handle server-side rendering (SSR)?

**Answer:** This is a challenge. Chemistry relies heavily on:
- Browser-only APIs (Object.defineProperty, Proxy potentially)
- Stateful class instances tied to React's useState
- The chemicalRegistry which is client-side only
SSR would require serializing the Chemical instances' state and rehydrating on the client, similar to how MobX handles SSR.

## 10. Can you dynamically change a Chemical's prototype chain at runtime?

**Answer:** The code hints at this with `importStructure` concepts. You could use `Object.setPrototypeOf()` to change the prototype chain, but Chemistry's bonds are created during `init()` based on the original prototype. You'd need to call `formula.refresh()` to rebuild bonds, and ensure the new prototype's properties don't conflict with existing ones.

## 11. How does the framework differentiate between user-defined properties and framework properties?

**Answer:** Through naming conventions:
- `$property` (lowercase after $) = props from parent
- `_property` = non-reactive internal
- `__property` = framework internal (truly private)
- Regular properties = reactive state
- Methods starting with $ followed by uppercase = constructors
The `isReactiveProperty` function enforces these rules.

## 12. What happens when you pass a Chemistry component to a third-party React library expecting a regular component?

**Answer:** It works! The Chemistry Component is just a React.FC under the hood. The third-party library would render it normally, passing props which get bound through the `$` prefix convention. The Chemical instance would be created and managed normally through the useState/useEffect lifecycle.

## 13. How does Chemistry handle list reconciliation compared to React's key prop?

**Answer:** Chemistry still uses React's key prop for list reconciliation at the React level. However, the Chemical instances are tracked by `cid` in the registry. The framework uses the `data-chem-bound-tree` marker to avoid re-processing already bound subtrees. For dynamic lists, the `equals()` method could provide custom reconciliation logic.

## 14. What's the memory overhead of maintaining both the prototype chain and instance properties?

**Answer:** Each Chemical instance has:
- Instance properties (from bond descriptors)
- Prototype chain (shared methods/initial values)
- Formula with bonds map
- Registry entry
The overhead is roughly O(n*m) where n=instances and m=properties. Crystallization can help by preventing bond creation for read-only components.

## 15. How would you implement computed properties that depend on multiple Chemicals?

**Answer:** Currently, accessing another Chemical in a getter adds it to the symbolized state through `item[$state] = state`. You could create computed properties that access multiple Chemicals:
```typescript
get combined() {
  return this.childA.value + this.childB.value;
}
```
The bond system would track both dependencies automatically.

## 16. Can Chemistry components be code-split and lazy loaded?

**Answer:** Yes, but carefully. Since Chemistry components are classes, you'd use dynamic imports:
```typescript
const LazyChemical = React.lazy(() => 
  import('./component').then(m => ({ default: m.Chemical.Component }))
);
```
The challenge is ensuring the prototype chain is properly established for inheritance.

## 17. How does the framework handle error boundaries?

**Answer:** Chemistry components could be wrapped in React error boundaries normally. However, errors in the bond system or formula calculations might not be caught. You'd want to add try-catch blocks in critical paths like `_bondGet`, `_bondSet`, and the constructor calling mechanism.

## 18. What happens if a developer forgets to call the parent constructor in the Chemistry pattern?

**Answer:** The framework discussion mentions runtime validation. You could track constructor calls through a Set and validate the chain after construction. The `assertViewConstructors` already validates that constructor methods exist. Adding call tracking would catch missing super calls.

## 19. How would you implement two-way binding between Chemicals?

**Answer:** Currently it's one-way (parent to child through props). For two-way:
- Child could access `this.__parent` and call methods on it
- Or implement an event system where children emit changes
- Or use the bond system to create bidirectional bonds
The framework philosophy seems to prefer unidirectional flow with explicit parent access.

## 20. What are the implications of using Proxies for the Chemical instances?

**Answer:** The code mentions Proxy possibilities but doesn't heavily use them yet. Proxies could:
- Eliminate the need for property descriptors (trap all gets/sets)
- Enable dynamic property addition
- Provide better debugging (log all operations)
- But: Proxies have performance overhead and complicate debugging
The current descriptor-based approach is more explicit and performant for known properties.