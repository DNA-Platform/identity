# React Learning Path for Chemistry Framework

## Progress Tracker

### ✅ Completed Topics
*(none yet)*

### 📚 Core Hooks (Essential)
- [ ] **useState** - Adds state to functional components; returns [value, setter] pair
- [ ] **useEffect** - Runs side effects after render; handles lifecycle events like mount/unmount
- [ ] **useMemo** - Memoizes expensive computations; recalculates only when dependencies change
- [ ] **useCallback** - Memoizes functions to prevent recreation on every render
- [ ] **useRef** - Creates mutable reference that persists across renders without triggering re-renders
- [ ] **useContext** - Accesses React context values without prop drilling

### ✅ Completed Topics
- **Props object** - Immutable object passed from parent; frozen at top level only
- **Children prop** - Special prop containing nested JSX; can be elements, strings, arrays, or undefined
- **React elements** - Plain objects describing what to render; created by JSX or React.createElement
- **React nodes** - Valid render values: elements, strings, numbers, arrays, null, undefined
- **Mount phase** - Component first appears; state initialized, first render, effects run
- **Update phase** - Props/state change triggers re-render; cleanup then re-run effects
- **Unmount phase** - Component removed; cleanup functions run, refs cleared
- **useState** - Adds state to functional components; returns [value, setter] pair
- **useEffect** - Runs side effects after render; handles lifecycle events like mount/unmount
- **useMemo** - Memoizes expensive computations; recalculates only when dependencies change
- **useCallback** - Memoizes functions to prevent recreation on every render
- **useRef** - Creates mutable reference that persists across renders without triggering re-renders
- **useContext** - Accesses React context values without prop drilling
- **State binding** - State is bound to component instance, not globally
- **Re-render triggers** - State changes, prop changes, parent re-renders, context changes
- **Render phase vs commit phase** - Calculate what changed vs actually update DOM
- **Batching** - React groups multiple state updates into single re-render

### 🔄 Component Lifecycle
- [ ] **Mount phase** - Component first appears; state initialized, first render, effects run
- [ ] **Update phase** - Props/state change triggers re-render; cleanup then re-run effects
- [ ] **Unmount phase** - Component removed; cleanup functions run, refs cleared

### 💾 State & Rendering
- [ ] **State binding** - State is bound to component instance, not globally
- [ ] **Re-render triggers** - State changes, prop changes, parent re-renders, context changes
- [ ] **Render phase vs commit phase** - Calculate what changed vs actually update DOM
- [ ] **Batching** - React groups multiple state updates into single re-render

### 🎯 Advanced Patterns
- [ ] **Rules of Hooks** - Only call at top level, only in React functions
- [ ] **Dependency arrays** - Control when effects/memos recalculate
- [ ] **Cleanup functions** - Return from useEffect to clean up subscriptions/timers
- [ ] **Custom hooks** - Extract component logic into reusable functions

### 🆕 Topics to Add
*(Add new topics here as we discover them)*

---

## Study Notes

### Current Topic: Advanced Patterns

### Questions & Answers
*(We'll add Q&A from our discussions here)*

---

## Next Steps
1. Choose a topic to start with (recommend useState or Props object)
2. Work through examples in your Chemistry framework
3. Add new topics as we discover gaps
4. Move completed topics to the ✅ section