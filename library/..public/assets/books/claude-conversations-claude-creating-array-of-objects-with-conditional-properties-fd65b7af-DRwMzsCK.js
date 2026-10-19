var R=Object.defineProperty;var m=(E,C)=>R(E,"name",{value:C,configurable:!0});import{jsxs as r,jsx as e}from"react/jsx-runtime";import{$ as T}from"@dna-platform/chemistry";import{$ as S,B as q,V as v,S as B,a as L,b as j,W as k,P as O,c as I,d as N,M as P,j as M,A as D,O as o,I as U,e as Z,D as $,f as c,g as i,i as a,C as s,h as l}from"./.cover-pkMxAWhU.js";import{Chapter as y,Title as g,Author as z,Subject as W,Paragraph as t,Svg as H,Synopsis as G,Parenthetical as b,TableOfContents as Y,Section as J,Heading as x,Content as h,Word as n,Date as A,Bold as d,List as f,Line as u,Append as p}from"@dna-platform/public";import"styled-components";const w=class w extends S{};m(w,"$ClaudeCreatingArrayOfObjectsWithConditionalProperties");let F=w;const _=m(()=>r(y,{children:[e(q,{}),e(v,{children:B()}),e(v,{children:L()}),e(j,{ground:"#f6f0ea",band:"#e0c6ad",bandInk:"#5a3a1e",foot:"#c89a72",footInk:"#4a2c12",ink:"#5a3a1e"}),e(k,{x:"-32",y:"-26"}),r(O,{children:[e(I,{children:"[Doug](/dougs-story/)"}),e(I,{children:"[Claude](/dougs-claude/)"})]}),e(N,{from:"2025-11-05T16:12:12.467600Z",to:"2025-11-06T12:19:14.896377Z"}),e(P,{shown:"26",all:"26"}),e(g,{children:"[Creating array of objects with conditional properties](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/)"}),e(z,{children:"[Doug](/dougs-story/)"}),e(W,{children:"[Conversations](/our-conversations/)"}),e(M,{children:"[Chemistry](/claude-chemistry/)"}),e(D,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),e(o,{children:"fd65b7af-c807-4b0c-b8c7-60950d198d57"}),r(t,{children:[e(U,{}),e(H,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),V=m(()=>r(y,{children:[e(G,{}),r(g,{children:[e(b,{}),"[Synopsis](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/)"]}),e(t,{children:"The user worked on debugging and improving a TypeScript function called parseFunctionInfo that analyzes JavaScript functions to extract metadata including form (lambda, function, method, etc.), name, async/generator flags, and parameter information. The conversation focused heavily on implementing and testing a parameter analysis feature that creates an array of objects with spread: boolean properties, where only rest parameters should have spread: true."})]}),"Synopsis"),K=m(()=>r(y,{children:[e(Y,{}),e(Z,{}),r(g,{children:[e(b,{}),"[Table of Contents](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#table-of-contents)"]}),r(J,{children:[e(x,{children:"November 2025"}),e(t,{children:e(h,{children:"[5 November 2025](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#5-november-2025)"})}),e(t,{children:e(h,{children:"[6 November 2025](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#6-november-2025)"})}),r(t,{children:[e(b,{}),e(n,{children:e(h,{children:"[Creating array of objects with conditional properties](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/)"})}),e(n,{children:e(h,{children:"[Synopsis](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#synopsis)"})}),e(n,{children:e(h,{children:"[Table of Contents](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#table-of-contents)"})})]})]})]}),"Table"),Q=m(()=>r(y,{children:[e($,{children:e(A,{children:"[5 November 2025](2025-11-05)"})}),e(g,{children:"[5 November 2025](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#5-november-2025)"}),r(c,{at:"2025-11-05T16:12:12.467600Z",children:[e(o,{children:"019a54ca-4126-7253-9601-0699b704c7d0"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"What's a simple way to create an array of N elements. I want to duplicate an object that looks like:"}),e(t,{children:"{ spread: boolean }"}),e(t,{children:"I have the count of the number of those. Only the last one can be spread, and I know that. What's the simplest most elegant way to go from the count and boolean to the array"})]}),r(c,{at:"2025-11-05T16:12:25.069910Z",children:[e(o,{children:"019a54ca-4126-7253-9601-069abc09ef5f"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Looking at this problem, the most elegant approach is using ",r(n,{children:[e(a,{}),"Array.from()"]})," with a mapping function:"]}),e(s,{language:"typescript",children:`Array.from({ length: count }, (_, i) => ({ 
  spread: i === count - 1 && canSpread 
}))`}),e(t,{children:"Or if the last one should always match a specific boolean value:"}),e(s,{language:"typescript",children:`Array.from({ length: count }, (_, i) => ({ 
  spread: i === count - 1 ? spreadValue : false 
}))`}),r(t,{children:[r(n,{children:[e(d,{}),"Even simpler"]})," if you know only the last one can be true:"]}),e(s,{language:"typescript",children:`Array.from({ length: count }, (_, i) => ({ 
  spread: i === count - 1 
}))`}),e(t,{children:"This creates an array where:"}),r(t,{children:[e(f,{}),r(u,{children:["All elements have ",r(n,{children:[e(a,{}),"{ spread: false }"]})]}),r(u,{children:["Except the last which has ",r(n,{children:[e(a,{}),"{ spread: true }"]})]})]}),e(t,{children:"Would you like me to look at the project files to see the specific context where you need this? That way I can suggest the best approach for your use case."})]}),r(c,{at:"2025-11-05T16:14:07.590290Z",children:[e(o,{children:"019a54cc-02cc-75c1-aa2a-69f4b3818563"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Can't you first just create the { spread: false } array N-1 times and then push the last element with the spread?"})]}),r(c,{at:"2025-11-05T16:14:17.283401Z",children:[e(o,{children:"019a54cc-02cc-75c1-aa2a-69f5ef6a2fdd"}),e(i,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"Yes, absolutely! That's cleaner:"}),e(s,{language:"typescript",children:`const arr = Array.from({ length: count - 1 }, () => ({ spread: false }));
arr.push({ spread: true });`}),e(t,{children:"Or if you want it in a single expression:"}),e(s,{language:"typescript",children:`[
  ...Array.from({ length: count - 1 }, () => ({ spread: false })),
  { spread: true }
]`}),r(t,{children:[r(n,{children:[e(d,{}),"Important note"]}),": Don't use ",r(n,{children:[e(a,{}),"Array(count - 1).fill({ spread: false })"]})," because ",r(n,{children:[e(a,{}),".fill()"]})," uses the same object reference for all elements - they'd all point to the same object in memory!"]}),e(t,{children:'Your approach is definitely more readable - "make N-1 false ones, then add the true one" is very clear intent. My suggestion was more compact but less obvious.'}),e(t,{children:"Which style do you prefer for your codebase?"})]}),r(c,{at:"2025-11-05T16:19:34.997944Z",children:[e(o,{children:"019a54d1-00fd-717f-97eb-d902d562fd40"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"See these tests:"}),e(t,{children:"And this function:"}),e(s,{language:"typescript",children:`export interface $FunctionInfo {
    form: 'lambda' | 'function' | 'method' | 'getter' | 'setter' | 'class' | 'unknown';
    name?: string;
    async?: boolean;
    generator?: boolean;
    native?: boolean;
    params?: { spread: boolean }[];
}

export function parseFunctionInfo(func: Function): $FunctionInfo {
    const str = func.toString();
    let name = func.name || '';

    // Check for native code (but don't early return!)
    const hasNativeCode = str.includes('[native code]');

    // Single main pattern match
    const pattern = getFunctionPattern();
    const match = pattern.exec(str);

    if (!match?.groups) {
        // Can't parse - return unknown with undefined properties
        return {
            form: 'unknown',
            name,
            async: undefined,
            generator: undefined,
            native: hasNativeCode ? true : undefined,  // Only set true if we found [native code], otherwise undefined
            params: undefined
        };
    }

    const g = match.groups;

    // Check ALL async groups
    const async = !!g.async || !!g.asyncArrow || !!g.async2;
    const generator = !!g.funcStar || !!g.methodStar;

    let form: $FunctionInfo['form'];
    if (g.arrow) {
        form = 'lambda';
        // Clear computed names for anonymous arrows (like '0' from array wrapping)
        if (name && /^\\d+$/.test(name)) name = '';
    }
    else if (g.class) form = 'class';
    else if (g.get) {
        form = 'getter';
        name = name.replace(/^get /, '');
    }
    else if (g.set) {
        form = 'setter';
        name = name.replace(/^set /, '');
    }
    else if (g.function) form = 'function';
    else if (g.methodName) form = 'method';
    else form = 'unknown';

    // Extract ALL parameter groups
    const paramStr = g.arrowParams || g.arrowSingle || g.params || g.params2 || '';

    if (!paramStr && form !== 'lambda') {
        return { form, name, async, generator, native: hasNativeCode, params: [] };
    }

    // For single arrow param without parens
    if (g.arrowSingle) {
        return { form, name, async, generator, native: hasNativeCode, params: createParams(1, false) };
    }

    // Parse parameter list
    const trimmed = paramStr.trim();
    if (!trimmed) {
        return { form, name, async, generator, native: hasNativeCode, params: [] };
    }

    // Simple comma split (fast, handles 99% of cases correctly)
    const parts = trimmed.split(',').map(p => p.trim());
    const last = parts[parts.length - 1];
    const spread = last.startsWith('...');
    const count = spread ? parts.length - 1 : parts.length;

    return { form, name, async, generator, native: hasNativeCode, params: createParams(count, spread) };
}`}),e(t,{children:"It doesn't seem that param number and the presence or absense of spread is tested. Is anything else missing? Can you write me a few tests to add in the same format that address this?"}),e(l,{identifier:"untitled",type:".txt",children:"Attached a file without a name"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(c,{at:"2025-11-05T16:21:16.356105Z",children:[e(o,{children:"019a54d1-00fd-717f-97eb-d903132d95fa"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Looking at the tests, I see they're checking ",r(n,{children:[e(a,{}),"result.params"]})," against ",r(n,{children:[e(a,{}),"{ count, rest }"]}),", but your interface shows ",r(n,{children:[e(a,{}),"params"]})," should be an array: ",r(n,{children:[e(a,{}),"params?: { spread: boolean }[]"]}),"."]}),r(t,{children:["The tests are currently missing verification of the ",r(n,{children:[e(d,{}),"actual array structure"]})," that ",r(n,{children:[e(a,{}),"createParams()"]})," should return. Here are tests to add that verify the array structure matches the interface:"]}),e(s,{language:"typescript",children:`describe('parameter array structure', () => {
    it('no params - empty array', () => {
        const result = parseFunctionInfo([() => { }][0]);
        expect(result.params).toEqual([]);
    });

    it('single param - one element, no spread', () => {
        const result = parseFunctionInfo([(x: any) => { }][0]);
        expect(result.params).toEqual([{ spread: false }]);
    });

    it('multiple params - all false except none spread', () => {
        const result = parseFunctionInfo([(x: any, y: any, z: any) => { }][0]);
        expect(result.params).toEqual([
            { spread: false },
            { spread: false },
            { spread: false }
        ]);
    });

    it('rest only - single element with spread true', () => {
        const result = parseFunctionInfo([(...args: any[]) => { }][0]);
        expect(result.params).toEqual([{ spread: true }]);
    });

    it('params + rest - last element has spread true', () => {
        const result = parseFunctionInfo([(a: any, b: any, ...rest: any[]) => { }][0]);
        expect(result.params).toEqual([
            { spread: false },
            { spread: false },
            { spread: true }
        ]);
    });

    it('single param + rest', () => {
        const result = parseFunctionInfo([(x: any, ...rest: any[]) => { }][0]);
        expect(result.params).toEqual([
            { spread: false },
            { spread: true }
        ]);
    });
});`}),e(t,{children:"These tests verify that:"}),r(t,{children:[e(f,{ordered:!0}),e(u,{children:"The array length matches the total parameter count"}),r(u,{children:["All non-rest parameters have ",r(n,{children:[e(a,{}),"spread: false"]})]}),r(u,{children:["Only the rest parameter (if present) has ",r(n,{children:[e(a,{}),"spread: true"]})," and is always last"]})]}),e(t,{children:"This is the actual array structure your interface promises, which the current tests don't verify!"})]}),r(c,{at:"2025-11-05T16:30:18.755678Z",children:[e(o,{children:"019a54da-d31d-70a4-bb94-735f32d2e8d9"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"That doesn't seem to have the structure of teh current tests where it uses a format to test all the different functions. Right? Why not do it like the tests do it"})]}),r(c,{at:"2025-11-05T16:31:17.399353Z",children:[e(o,{children:"019a54da-d31d-70a4-bb94-73605be23e9d"}),e(i,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"You're absolutely right! Here it is in the same format as the existing tests:"}),e(s,{language:"typescript",children:`describe('parameter array structure', () => {
    const testCases: Array<{
        name: string,
        func: Function,
        expected: Array<{ spread: boolean }>
    }> = [
        { name: 'no params - empty array', func: [() => { }][0], expected: [] },
        { name: 'single param - one element, no spread', func: [(x: any) => { }][0], expected: [{ spread: false }] },
        { name: 'two params - no spread', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },
        { name: 'three params - no spread', func: [(x: any, y: any, z: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
        { name: 'rest only - single spread element', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },
        { name: 'single param + rest', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },
        { name: 'two params + rest', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
        { name: 'three params + rest', func: [(a: any, b: any, c: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
    ];

    testCases.forEach(({ name, func, expected }) => {
        it(name, () => {
            const result = parseFunctionInfo(func);
            expect(result.params).toEqual(expected);
        });
    });
});`}),e(t,{children:"Much better - now it follows the exact same pattern as your existing tests!"})]}),r(c,{at:"2025-11-05T17:27:07.934565Z",children:[e(o,{children:"019a550e-d998-71a3-ab55-aac466679eca"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Does typescript have a name for the enumeration where you do typeof x === 'function' - what is that string enum called that function is a member"})]}),r(c,{at:"2025-11-05T17:27:22.440753Z",children:[e(o,{children:"019a550e-d998-71a3-ab55-aac54f8a4ddf"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["TypeScript doesn't have a built-in named type for the ",r(n,{children:[e(a,{}),"typeof"]})," operator's return values, but you can define it yourself:"]}),e(s,{language:"typescript",children:'type TypeofResult = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"'}),e(t,{children:"Or you can extract it using a utility:"}),e(s,{language:"typescript",children:"type TypeofResult = ReturnType<(x: any) => typeof x>"}),e(t,{children:"Though that second approach doesn't actually work directly. The cleanest way is just the explicit union."}),e(t,{children:`Some people call this the "typeof discriminant" or "typeof guard" type, but there's no official TypeScript name for it. You'll often see it defined in codebases as:`}),e(s,{language:"typescript",children:'type Typeof = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";'}),e(t,{children:"Is this for type guards in your $Chemistry reflection system?"})]}),r(c,{at:"2025-11-05T18:18:21.765012Z",children:[e(o,{children:"019a553d-c09a-7079-9463-b12f14cb2ab0"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"What are the primitives? The ones where I would need to get the boxed version if I want to enumerate the members?"})]}),r(c,{at:"2025-11-05T18:18:36.259434Z",children:[e(o,{children:"019a553d-c09a-7079-9463-b13064bef33a"}),e(i,{children:"[Claude](/dougs-claude/)"}),e(t,{children:"The JavaScript primitives that have boxed wrapper versions are:"}),e(s,{language:"typescript",children:'type BoxedPrimitive = "string" | "number" | "boolean" | "symbol" | "bigint"'}),e(t,{children:"Each has a corresponding constructor/wrapper:"}),r(t,{children:[e(f,{}),r(u,{children:[r(n,{children:[e(a,{}),"string"]})," → ",r(n,{children:[e(a,{}),"String"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"number"]})," → ",r(n,{children:[e(a,{}),"Number"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"boolean"]})," → ",r(n,{children:[e(a,{}),"Boolean"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"symbol"]})," → ",r(n,{children:[e(a,{}),"Symbol"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"bigint"]})," → ",r(n,{children:[e(a,{}),"BigInt"]})]})]}),r(t,{children:["The primitives that do ",r(n,{children:[e(d,{}),"NOT"]})," have boxed versions:"]}),r(t,{children:[e(f,{}),r(u,{children:[r(n,{children:[e(a,{}),"undefined"]})," - no wrapper"]}),r(u,{children:[r(n,{children:[e(a,{}),"null"]})," - no wrapper (though ",r(n,{children:[e(a,{}),"typeof null === 'object'"]})," is a famous JS quirk)"]})]}),r(t,{children:["When you do something like ",r(n,{children:[e(a,{}),'"hello".charAt(0)']}),", JavaScript automatically boxes the string primitive into a ",r(n,{children:[e(a,{}),"String"]})," object temporarily, then unboxes it. If you're enumerating members in your reflection system, you'd need to use:"]}),e(s,{language:"typescript",children:`Object.getOwnPropertyNames(String.prototype)
Object.getOwnPropertyNames(Number.prototype)
// etc.`}),r(t,{children:["Is this for your ",r(n,{children:[e(a,{}),"$ObjectRep"]})," system where you're building the property/method catalog?"]})]}),r(c,{at:"2025-11-05T18:20:32.914400Z",children:[e(o,{children:"019a553f-c107-764a-afac-181edd494485"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Let's say I have a value of any. Can you write me a function called getPrototype that returns the prototype of each?"}),e(t,{children:"And wait - if typeof null === object... should we use the object prototype for null? Or does it not support . syntax with them?"})]}),r(c,{at:"2025-11-05T18:20:49.404239Z",children:[e(o,{children:"019a553f-c107-764a-afac-181f9464d41e"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Great question about ",r(n,{children:[e(a,{}),"null"]}),"! No, you ",r(n,{children:[e(d,{}),"cannot"]})," use the dot syntax with ",r(n,{children:[e(a,{}),"null"]})," - it throws a ",r(n,{children:[e(a,{}),"TypeError"]}),". Even though ",r(n,{children:[e(a,{}),"typeof null === 'object'"]})," (a famous JavaScript bug), null has no prototype."]}),e(s,{language:"typescript",children:`null.toString()  // TypeError: Cannot read properties of null
undefined.toString()  // TypeError: Cannot read properties of undefined`}),e(t,{children:"Here's the function:"}),e(s,{language:"typescript",children:`function getPrototype(value: any): object | null {
    // null and undefined have no prototype
    if (value === null || value === undefined) {
        return null;
    }
    
    const t = typeof value;
    
    switch (t) {
        case 'string': return String.prototype;
        case 'number': return Number.prototype;
        case 'boolean': return Boolean.prototype;
        case 'symbol': return Symbol.prototype;
        case 'bigint': return BigInt.prototype;
        case 'object':
        case 'function':
            return Object.getPrototypeOf(value);
        default:
            return null;
    }
}`}),e(t,{children:"Key points:"}),r(t,{children:[e(f,{}),r(u,{children:[r(n,{children:[e(d,{}),"null and undefined"]}),": Return ",r(n,{children:[e(a,{}),"null"]})," (they have no prototype and don't support property access)"]}),r(u,{children:[r(n,{children:[e(d,{}),"Boxed primitives"]}),": Return their wrapper's prototype"]}),r(u,{children:[r(n,{children:[e(d,{}),"Objects/functions"]}),": Use ",r(n,{children:[e(a,{}),"Object.getPrototypeOf()"]})," to get the actual prototype"]}),r(u,{children:["The ",r(n,{children:[e(a,{}),"typeof null === 'object'"]})," quirk is just a bug - null is NOT an object and has no prototype"]})]})]}),e(p,{identifier:"untitled",type:".txt",children:`import { parseFunctionInfo, $FunctionInfo } from '@/reflection';\r
import { describe, it, expect } from 'vitest';\r
\r
class Test {\r
    get prop() { return 0; }\r
    set prop(value: number) { }\r
}\r
\r
describe('$Reflection', () => {\r
    describe('parseFunctionInfo', () => {\r
        describe('parameter variations', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expected: { count: number, rest: boolean }\r
            }> = [\r
                    { name: 'no parameters - lambda', func: [() => { }][0], expected: { count: 0, rest: false } },\r
                    { name: 'no parameters - function', func: [function () { }][0], expected: { count: 0, rest: false } },\r
                    { name: 'no parameters - method', func: [({ m() { } }).m][0], expected: { count: 0, rest: false } },\r
                    { name: 'single parameter - lambda parens', func: [(x: any) => x][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - lambda no parens', func: [(x: any) => x][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - function', func: [function (x: any) { }][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - method', func: [({ m(x: any) { } }).m][0], expected: { count: 1, rest: false } },\r
                    { name: 'multiple parameters - lambda', func: [(x: any, y: any, z: any) => { }][0], expected: { count: 3, rest: false } },\r
                    { name: 'multiple parameters - function', func: [function (a: any, b: any, c: any) { }][0], expected: { count: 3, rest: false } },\r
                    { name: 'multiple parameters - method', func: [({ m(x: any, y: any) { } }).m][0], expected: { count: 2, rest: false } },\r
                    { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: { count: 0, rest: true } },\r
                    { name: 'rest only - function', func: [function (...args: any[]) { }][0], expected: { count: 0, rest: true } },\r
                    { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: { count: 0, rest: true } },\r
                    { name: 'params + rest - lambda', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: { count: 2, rest: true } },\r
                    { name: 'params + rest - function', func: [function (x: any, ...rest: any[]) { }][0], expected: { count: 1, rest: true } },\r
                    { name: 'params + rest - method', func: [({ m(a: any, ...rest: any[]) { } }).m][0], expected: { count: 1, rest: true } },\r
                ];\r
\r
            testCases.forEach(({ name, func, expected }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.params).toEqual(expected);\r
                });\r
            });\r
        });\r
\r
        describe('async modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'async lambda', func: [async () => { }][0] },\r
                { name: 'async lambda with params', func: [async (x: any, y: any) => { }][0] },\r
                { name: 'async function', func: [async function () { }][0] },\r
                { name: 'async function named', func: [async function fetch() { }][0] },\r
                { name: 'async method', func: [({ async m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.async).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('generator modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'generator function', func: [function* () { }][0] },\r
                { name: 'generator function named', func: [function* gen() { }][0] },\r
                { name: 'generator method', func: [({ *m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.generator).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('function forms', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expectedForm: $FunctionInfo['form']\r
            }> = [\r
                    { name: 'lambda no params', func: [() => { }][0], expectedForm: 'lambda' },\r
                    { name: 'lambda single param no parens', func: [(x: any) => x][0], expectedForm: 'lambda' },\r
                    { name: 'lambda multiple params', func: [(x: any, y: any) => { }][0], expectedForm: 'lambda' },\r
                    { name: 'async lambda', func: [async () => { }][0], expectedForm: 'lambda' },\r
                    { name: 'function anonymous', func: [function () { }][0], expectedForm: 'function' },\r
                    { name: 'function named', func: [function foo() { }][0], expectedForm: 'function' },\r
                    { name: 'async function', func: [async function () { }][0], expectedForm: 'function' },\r
                    { name: 'generator function', func: [function* () { }][0], expectedForm: 'function' },\r
                    { name: 'method', func: [({ m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'async method', func: [({ async m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'generator method', func: [({ *m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedForm: 'getter' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedForm: 'setter' },\r
                    { name: 'class named', func: [class Foo { }][0], expectedForm: 'class' },\r
                    { name: 'class anonymous', func: [class { }][0], expectedForm: 'class' },\r
                ];\r
\r
            testCases.forEach(({ name, func, expectedForm }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.form).toBe(expectedForm);\r
                });\r
            });\r
        });\r
\r
        describe('naming', () => {\r
            describe('named functions', () => {\r
                const testCases: Array<{ name: string, func: Function, expectedName: string }> = [\r
                    { name: 'function', func: [function myFunc() { }][0], expectedName: 'myFunc' },\r
                    { name: 'method', func: [({ myMethod() { } }).myMethod][0], expectedName: 'myMethod' },\r
                    { name: 'generator', func: [function* myGen() { }][0], expectedName: 'myGen' },\r
                    { name: 'class', func: [class MyClass { }][0], expectedName: 'MyClass' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedName: 'prop' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedName: 'prop' },\r
                ];\r
\r
                testCases.forEach(({ name, func, expectedName }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe(expectedName);\r
                    });\r
                });\r
            });\r
\r
            describe('anonymous functions', () => {\r
                const testCases: Array<{ name: string, func: Function }> = [\r
                    { name: 'lambda', func: [() => { }][0] },\r
                    { name: 'function', func: [function () { }][0] },\r
                    { name: 'generator', func: [function* () { }][0] },\r
                    { name: 'class', func: [class { }][0] },\r
                ];\r
\r
                testCases.forEach(({ name, func }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe('');\r
                    });\r
                });\r
            });\r
        });\r
\r
        describe('native functions', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'String constructor', func: [String][0] },\r
                { name: 'Array constructor', func: [Array][0] },\r
                { name: 'Object constructor', func: [Object][0] },\r
                { name: 'Array.prototype.map', func: [Array.prototype.map][0] },\r
                { name: 'String.prototype.slice', func: [String.prototype.slice][0] },\r
                { name: 'Math.pow', func: [Math.pow][0] },\r
                { name: 'bound function', func: [[function () { }][0].bind(null)][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.native).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('unknown/unparseable', () => {\r
            const testCases: Array<{ name: string, setup: () => Function }> = [\r
                {\r
                    name: 'custom toString - gibberish',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => 'completely unparseable';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - empty',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - unicode',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '∂ƒ∆ø˙©ƒ';\r
                        return f;\r
                    }\r
                },\r
            ];\r
\r
            testCases.forEach(({ name, setup }) => {\r
                it(name, () => {\r
                    const func = setup();\r
                    const result = parseFunctionInfo(func);\r
\r
                    expect(result.form).toBe('unknown');\r
                    expect(result.async).toBeUndefined();\r
                    expect(result.generator).toBeUndefined();\r
                    expect(result.native).toBeUndefined();\r
                    expect(result.params).toEqual({ count: undefined, rest: undefined });\r
                });\r
            });\r
        });\r
\r
        describe('comprehensive combinations', () => {\r
            it('async lambda with rest params', () => {\r
                const result = parseFunctionInfo([async (...args: any[]) => { }][0]);\r
                expect(result.form).toBe('lambda');\r
                expect(result.async).toBe(true);\r
                expect(result.params).toEqual({ count: 0, rest: true });\r
            });\r
\r
            it('async generator with params and rest', () => {\r
                const result = parseFunctionInfo([async function* (a: any, b: any, ...rest: any[]) { }][0]);\r
                expect(result.form).toBe('function');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 2, rest: true });\r
            });\r
\r
            it('async generator method with rest', () => {\r
                const result = parseFunctionInfo([({ async *method(...args: any[]) { } }).method][0]);\r
                expect(result.form).toBe('method');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 0, rest: true });\r
            });\r
        });\r
    });\r
});`})]}),"November520251"),X=m(()=>r(y,{children:[e($,{children:e(A,{children:"[6 November 2025](2025-11-06)"})}),e(g,{children:"[6 November 2025](/claude-creating-array-of-objects-with-conditional-properties-fd65b7af/#6-november-2025)"}),r(c,{at:"2025-11-06T12:02:39.360952Z",children:[e(o,{children:"019a590c-2404-766c-b1d6-5e14e0120174"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Can you clean up these tests to test things other than just arrow functions? And right now they are failing:"}),e(s,{language:"typescript",children:`describe('parameter array structure', () => {
            const testCases: Array<{
                name: string,
                func: Function,
                expected: Array<{ spread: boolean }>
            }> = [
                { name: 'no params - empty array', func: [() => { }][0], expected: [] },
                { name: 'single param - one element, no spread', func: [(x: any) => { }][0], expected: [{ spread: false }] },
                { name: 'two params - no spread', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },
                { name: 'three params - no spread', func: [(x: any, y: any, z: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
                { name: 'rest only - single spread element', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },
                { name: 'single param + rest', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },
                { name: 'two params + rest', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
                { name: 'three params + rest', func: [(a: any, b: any, c: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
            ];

            testCases.forEach(({ name, func, expected }) => {
                it(name, () => {
                    const result = parseFunctionInfo(func);
                    expect(result.params).toEqual(expected);
                });
            });
        });`}),e(t,{children:"This is the code so you can look for bugs. The spread stuff is new:"}),e(t,{children:"Here are all the tests. The rest of them pass:"}),e(l,{identifier:"untitled",type:".txt",children:"Attached a file without a name"}),e(l,{identifier:"untitled-2",type:".txt",children:"Attached a file without a name"}),e(l,{identifier:"untitled-3",type:".txt",children:"Attached a file without a name"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(c,{at:"2025-11-06T12:03:06.985830Z",children:[e(o,{children:"019a590c-2404-766c-b1d6-5e15a321f1e4"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Looking at the bug - the issue is in ",r(n,{children:[e(a,{}),"createParams"]}),". When ",r(n,{children:[e(a,{}),"spread"]})," is true, it should ",r(n,{children:[e(d,{}),"add"]})," a new element rather than modify the last one:"]}),e(s,{language:"typescript",children:`function createParams(count: number, spread: boolean): { spread: boolean }[] {
    const result = Array.from({ length: count }, () => ({ spread: false }));
    if (spread) result.push({ spread: true });  // Add, don't modify!
    return result;
}`}),e(t,{children:"This matches your earlier suggestion - create N-1 false elements, then push the true one!"}),r(t,{children:["The bug was that it was creating ",r(n,{children:[e(a,{}),"count"]})," elements then modifying the last one, instead of creating ",r(n,{children:[e(a,{}),"count"]})," elements then ",r(n,{children:[e(d,{}),"adding"]})," the spread element."]}),e(t,{children:"Here are the tests cleaned up to include functions, methods, and lambdas:"}),e(s,{language:"typescript",children:`describe('parameter array structure', () => {
    const testCases: Array<{
        name: string,
        func: Function,
        expected: Array<{ spread: boolean }>
    }> = [
        { name: 'no params - lambda', func: [() => { }][0], expected: [] },
        { name: 'no params - function', func: [function() { }][0], expected: [] },
        { name: 'no params - method', func: [({ m() { } }).m][0], expected: [] },
        
        { name: 'single param - lambda', func: [(x: any) => { }][0], expected: [{ spread: false }] },
        { name: 'single param - function', func: [function(x: any) { }][0], expected: [{ spread: false }] },
        
        { name: 'two params - lambda', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },
        { name: 'two params - method', func: [({ m(x: any, y: any) { } }).m][0], expected: [{ spread: false }, { spread: false }] },
        
        { name: 'three params - function', func: [function(x: any, y: any, z: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
        
        { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },
        { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: [{ spread: true }] },
        
        { name: 'single param + rest - lambda', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },
        { name: 'single param + rest - function', func: [function(x: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: true }] },
        
        { name: 'two params + rest - method', func: [({ m(a: any, b: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
        
        { name: 'three params + rest - function', func: [function(a: any, b: any, c: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
    ];

    testCases.forEach(({ name, func, expected }) => {
        it(name, () => {
            const result = parseFunctionInfo(func);
            expect(result.params).toEqual(expected);
        });
    });
});`})]}),r(c,{at:"2025-11-06T12:06:16.730374Z",children:[e(o,{children:"019a590f-753c-7002-a06f-d2cfe1f381a5"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"There are a LOT of test failures. Why would that work unless the count is wrong? If it has count params then you edit the last element"}),e(l,{identifier:"untitled-4",type:".txt",children:"Attached a file without a name"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(c,{at:"2025-11-06T12:07:01.700310Z",children:[e(o,{children:"019a590f-753c-7002-a06f-d2d0a97fd1e8"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["Ah! There are ",r(n,{children:[e(d,{}),"two separate issues"]}),":"]}),r(t,{children:[e(f,{ordered:!0}),r(u,{children:[r(n,{children:[e(d,{}),"The \x000\0 bug"]}),": When ",r(n,{children:[e(a,{}),"count = 0"]})," and ",r(n,{children:[e(a,{}),"spread = true"]})," (rest-only params), we create an empty array then try to access ",r(n,{children:[e(a,{}),"result[-1]"]})," which is ",r(n,{children:[e(a,{}),"undefined"]}),". Fix with push:"]})]}),e(s,{language:"typescript",children:`function createParams(count: number, spread: boolean): { spread: boolean }[] {
    const result = Array.from({ length: count }, () => ({ spread: false }));
    if (spread) result.push({ spread: true });  // Add, don't modify
    return result;
}`}),r(t,{children:[e(f,{ordered:!0}),r(u,{children:[r(n,{children:[e(d,{}),"The old tests are still using the OLD format"]}),': The "parameter variations" tests expect ',r(n,{children:[e(a,{}),"{ count: number, rest: boolean }"]})," but your interface now returns ",r(n,{children:[e(a,{}),"Array<{ spread: boolean }>"]}),". You need to ",r(n,{children:[e(d,{}),"delete or update"]})," those old tests since you changed the interface."]})]}),e(t,{children:'The old "parameter variations" tests are now redundant - your new "parameter array structure" tests cover the same ground but test the actual array format. Just remove the old test section entirely:'}),e(s,{language:"typescript",children:`// DELETE THIS ENTIRE SECTION - it's testing the old interface format
describe('parameter variations', () => {
    const testCases: Array<{
        name: string,
        func: Function,
        expected: { count: number, rest: boolean }  // OLD FORMAT
    }> = [
    // ... delete all of this`}),r(t,{children:['Your "parameter array structure" tests are correct and will pass once ',r(n,{children:[e(a,{}),"createParams"]})," uses ",r(n,{children:[e(a,{}),"push"]})," instead of modifying ",r(n,{children:[e(a,{}),"result[result.length - 1]"]}),"."]})]}),r(c,{at:"2025-11-06T12:07:21.886901Z",children:[e(o,{children:"019a5910-740c-712b-a785-6cf8b3cd8545"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Then count is wrong. The count should be the number of params"})]}),r(c,{at:"2025-11-06T12:08:07.476358Z",children:[e(o,{children:"019a5910-740c-712b-a785-6cf9ec8c6a58"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["You're absolutely right! The ",r(n,{children:[e(a,{}),"count"]})," should be the ",r(n,{children:[e(d,{}),"total number of parameters"]})," including the rest parameter."]}),e(t,{children:"The bug is here in the parsing:"}),e(s,{language:"typescript",children:`const spread = last.startsWith('...');
const count = spread ? parts.length - 1 : parts.length;  // BUG!`}),e(t,{children:"Should be:"}),e(s,{language:"typescript",children:`const spread = last.startsWith('...');
const count = parts.length;  // Total count including rest param`}),r(t,{children:["Then fix ",r(n,{children:[e(a,{}),"createParams"]})," to handle it properly:"]}),e(s,{language:"typescript",children:`function createParams(count: number, spread: boolean): { spread: boolean }[] {
    if (count === 0) return [];
    
    const result = Array.from({ length: count - 1 }, () => ({ spread: false }));
    result.push({ spread });
    return result;
}`}),e(t,{children:"This way:"}),r(t,{children:[e(f,{}),r(u,{children:[r(n,{children:[e(a,{}),"(x, ...rest)"]})," → count=2 → ",r(n,{children:[e(a,{}),"[{ spread: false }, { spread: true }]"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"(...rest)"]})," → count=1 → ",r(n,{children:[e(a,{}),"[{ spread: true }]"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"(x, y)"]})," → count=2 → ",r(n,{children:[e(a,{}),"[{ spread: false }, { spread: false }]"]})]}),r(u,{children:[r(n,{children:[e(a,{}),"()"]})," → count=0 → ",r(n,{children:[e(a,{}),"[]"]})]})]}),e(t,{children:"Perfect!"})]}),r(c,{at:"2025-11-06T12:09:32.211475Z",children:[e(o,{children:"019a5912-712a-77e2-8e31-9fb33ef3e962"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"I fixed it so the count is the total number of params. Can you write this tests again making sure to use lots of different functions like yo uare. Put no spaces between teh examples:"}),e(t,{children:"describe('parameter array structure', () => { const testCases: Array<{ name: string, func: Function, expected: Array<{ spread: boolean }> }> = [ { name: 'no params - lambda', func: [() => { }][0], expected: [] }, { name: 'no params - function', func: [function() { }][0], expected: [] }, { name: 'no params - method', func: [({ m() { } }).m][0], expected: [] }, { name: 'single param - lambda', func: [(x: any) => { }][0], expected: [{ spread: false }] }, { name: 'single param - function', func: [function(x: any) { }][0], expected: [{ spread: false }] }, { name: 'two params - lambda', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] }, { name: 'two params - method', func: [({ m(x: any, y: any) { } }).m][0], expected: [{ spread: false }, { spread: false }] }, { name: 'three params - function', func: [function(x: any, y: any, z: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] }, { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] }, { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: [{ spread: true }] }, { name: 'single param + rest - lambda', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] }, { name: 'single param + rest - function', func: [function(x: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: true }] }, { name: 'two params + rest - method', func: [({ m(a: any, b: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: true }] }, { name: 'three params + rest - function', func: [function(a: any, b: any, c: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] }, ]; testCases.forEach(({ name, func, expected }) => { it(name, () => { const result = parseFunctionInfo(func); expect(result.params).toEqual(expected); }); }); });"})]}),r(c,{at:"2025-11-06T12:10:22.275946Z",children:[e(o,{children:"019a5912-712a-77e2-8e31-9fb461c3b95d"}),e(i,{children:"[Claude](/dougs-claude/)"}),e(s,{language:"typescript",children:`describe('parameter array structure', () => {
    const testCases: Array<{
        name: string,
        func: Function,
        expected: Array<{ spread: boolean }>
    }> = [
        { name: 'no params - lambda', func: [() => { }][0], expected: [] },
        { name: 'no params - function', func: [function() { }][0], expected: [] },
        { name: 'no params - method', func: [({ m() { } }).m][0], expected: [] },
        { name: 'single param - lambda', func: [(x: any) => { }][0], expected: [{ spread: false }] },
        { name: 'single param - function', func: [function(x: any) { }][0], expected: [{ spread: false }] },
        { name: 'single param - method', func: [({ m(x: any) { } }).m][0], expected: [{ spread: false }] },
        { name: 'two params - lambda', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },
        { name: 'two params - function', func: [function(x: any, y: any) { }][0], expected: [{ spread: false }, { spread: false }] },
        { name: 'two params - method', func: [({ m(x: any, y: any) { } }).m][0], expected: [{ spread: false }, { spread: false }] },
        { name: 'three params - lambda', func: [(x: any, y: any, z: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
        { name: 'three params - function', func: [function(x: any, y: any, z: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
        { name: 'three params - method', func: [({ m(x: any, y: any, z: any) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },
        { name: 'four params - lambda', func: [(a: any, b: any, c: any, d: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },
        { name: 'four params - function', func: [function(a: any, b: any, c: any, d: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },
        { name: 'four params - method', func: [({ m(a: any, b: any, c: any, d: any) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },
        { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },
        { name: 'rest only - function', func: [function(...args: any[]) { }][0], expected: [{ spread: true }] },
        { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: [{ spread: true }] },
        { name: 'single param + rest - lambda', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },
        { name: 'single param + rest - function', func: [function(x: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: true }] },
        { name: 'single param + rest - method', func: [({ m(x: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: true }] },
        { name: 'two params + rest - lambda', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
        { name: 'two params + rest - function', func: [function(a: any, b: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
        { name: 'two params + rest - method', func: [({ m(a: any, b: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },
        { name: 'three params + rest - lambda', func: [(a: any, b: any, c: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
        { name: 'three params + rest - function', func: [function(a: any, b: any, c: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
        { name: 'three params + rest - method', func: [({ m(a: any, b: any, c: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },
        { name: 'four params + rest - lambda', func: [(a: any, b: any, c: any, d: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },
        { name: 'four params + rest - function', func: [function(a: any, b: any, c: any, d: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },
        { name: 'four params + rest - method', func: [({ m(a: any, b: any, c: any, d: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },
    ];

    testCases.forEach(({ name, func, expected }) => {
        it(name, () => {
            const result = parseFunctionInfo(func);
            expect(result.params).toEqual(expected);
        });
    });
});`})]}),r(c,{at:"2025-11-06T12:14:51.662661Z",children:[e(o,{children:"019a5917-5097-7161-afdc-f38c2f44fcf2"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Got all these errors onm this code: These tests"}),e(l,{identifier:"untitled-5",type:".txt",children:"Attached a file without a name"}),e(l,{identifier:"untitled-6",type:".txt",children:"Attached a file without a name"}),e(l,{identifier:"untitled-7",type:".txt",children:"Attached a file without a name"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(c,{at:"2025-11-06T12:15:08.972001Z",children:[e(o,{children:"019a5917-5097-7161-afdc-f38d61afe949"}),e(i,{children:"[Claude](/dougs-claude/)"}),r(t,{children:["You still have ",r(n,{children:[e(d,{}),"OLD tests using the OLD format"]}),". You need to delete or update them:"]}),e(x,{children:"1. DELETE this entire test section (it's redundant):"}),e(s,{language:"typescript",children:`describe('parameter variations', () => {
    // DELETE ALL OF THIS - it's testing the old { count, spread } format`}),e(t,{children:'Your new "parameter array structure" tests already cover this!'}),e(x,{children:'2. UPDATE the "unknown/unparseable" tests:'}),e(t,{children:"Change this line:"}),e(s,{language:"typescript",children:"expect(result.params).toEqual({ count: undefined, spread: undefined });"}),e(t,{children:"To:"}),e(s,{language:"typescript",children:"expect(result.params).toBeUndefined();"}),e(x,{children:'3. UPDATE the "comprehensive combinations" tests:'}),e(t,{children:"Change:"}),e(s,{language:"typescript",children:"expect(result.params).toEqual({ count: 1, spread: true });"}),e(t,{children:"To:"}),e(s,{language:"typescript",children:"expect(result.params).toEqual([{ spread: true }]);"}),e(t,{children:"Change:"}),e(s,{language:"typescript",children:"expect(result.params).toEqual({ count: 3, spread: true });"}),e(t,{children:"To:"}),e(s,{language:"typescript",children:"expect(result.params).toEqual([{ spread: false }, { spread: false }, { spread: true }]);"}),r(t,{children:["The issue is ",r(n,{children:[e(d,{}),"your interface changed"]})," from ",r(n,{children:[e(a,{}),"{ count, spread }"]})," to ",r(n,{children:[e(a,{}),"Array<{ spread: boolean }>"]}),", but some tests are still expecting the old format!"]})]}),r(c,{at:"2025-11-06T12:19:05.522249Z",children:[e(o,{children:"019a591b-3051-76d9-b51f-acf498559312"}),e(i,{children:"[Doug](/dougs-story/)"}),e(t,{children:"Two more failures:"}),e(l,{identifier:"untitled-8",type:".txt",children:"Attached a file without a name"}),e(l,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(c,{at:"2025-11-06T12:19:14.896377Z",children:[e(o,{children:"019a591b-3052-7653-8dd7-42161393e7f6"}),e(i,{children:"[Claude](/dougs-claude/)"}),e(t,{children:'Two more tests still using the old format! Fix these in the "comprehensive combinations" section:'}),e(t,{children:r(n,{children:[e(d,{}),"Change line 180:"]})}),e(s,{language:"typescript",children:"expect(result.params).toEqual({ spread: true });"}),e(t,{children:r(n,{children:[e(d,{}),"To:"]})}),e(s,{language:"typescript",children:"expect(result.params).toEqual([{ spread: true }]);"}),e(t,{children:r(n,{children:[e(d,{}),"Change line 196:"]})}),e(s,{language:"typescript",children:"expect(result.params).toEqual({ spread: true });"}),e(t,{children:r(n,{children:[e(d,{}),"To:"]})}),e(s,{language:"typescript",children:"expect(result.params).toEqual([{ spread: true }]);"}),r(t,{children:["These are expecting the old ",r(n,{children:[e(a,{}),"{ spread: true }"]})," format when they should expect the array format ",r(n,{children:[e(a,{}),"[{ spread: true }]"]}),"."]})]}),e(p,{identifier:"untitled",type:".txt",children:`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > single param + rest\r
AssertionError: expected [ { spread: true } ] to deeply equal [ { spread: false }, { spread: true } ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > two params + rest\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal [ { spread: false }, …(2) ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[14/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > three params + rest\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal [ { spread: false }, …(3) ]\r
\r
- Expected\r
+ Received\r
\r
@@ -4,11 +4,8 @@\r
    },\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[15/26]⎯\r
\r
 Test Files  2 failed (2)\r
      Tests  34 failed | 71 passed (105)\r
   Start at  14:58:09\r
   Duration  81ms\r
\r
 FAIL  Tests failed. Watching for file changes...\r
       press h to show help, press q to quit`}),e(p,{identifier:"untitled-2",type:".txt",children:`export function parseFunctionInfo(func: Function): $FunctionInfo {\r
    const str = func.toString();\r
    let name = func.name || '';\r
\r
    // Check for native code (but don't early return!)\r
    const hasNativeCode = str.includes('[native code]');\r
\r
    // Single main pattern match\r
    const pattern = getFunctionPattern();\r
    const match = pattern.exec(str);\r
\r
    if (!match?.groups) {\r
        // Can't parse - return unknown with undefined properties\r
        return {\r
            form: 'unknown',\r
            name,\r
            async: undefined,\r
            generator: undefined,\r
            native: hasNativeCode ? true : undefined,  // Only set true if we found [native code], otherwise undefined\r
            params: undefined\r
        };\r
    }\r
\r
    const g = match.groups;\r
\r
    // Check ALL async groups\r
    const async = !!g.async || !!g.asyncArrow || !!g.async2;\r
    const generator = !!g.funcStar || !!g.methodStar;\r
\r
    let form: $FunctionInfo['form'];\r
    if (g.arrow) {\r
        form = 'lambda';\r
        // Clear computed names for anonymous arrows (like '0' from array wrapping)\r
        if (name && /^\\d+$/.test(name)) name = '';\r
    }\r
    else if (g.class) form = 'class';\r
    else if (g.get) {\r
        form = 'getter';\r
        name = name.replace(/^get /, '');\r
    }\r
    else if (g.set) {\r
        form = 'setter';\r
        name = name.replace(/^set /, '');\r
    }\r
    else if (g.function) form = 'function';\r
    else if (g.methodName) form = 'method';\r
    else form = 'unknown';\r
\r
    // Extract ALL parameter groups\r
    const paramStr = g.arrowParams || g.arrowSingle || g.params || g.params2 || '';\r
\r
    if (!paramStr && form !== 'lambda') {\r
        return { form, name, async, generator, native: hasNativeCode, params: [] };\r
    }\r
\r
    // For single arrow param without parens\r
    if (g.arrowSingle) {\r
        return { form, name, async, generator, native: hasNativeCode, params: createParams(1, false) };\r
    }\r
\r
    // Parse parameter list\r
    const trimmed = paramStr.trim();\r
    if (!trimmed) {\r
        return { form, name, async, generator, native: hasNativeCode, params: [] };\r
    }\r
\r
    // Simple comma split (fast, handles 99% of cases correctly)\r
    const parts = trimmed.split(',').map(p => p.trim());\r
    const last = parts[parts.length - 1];\r
    const spread = last.startsWith('...');\r
    const count = spread ? parts.length - 1 : parts.length;\r
\r
    return { form, name, async, generator, native: hasNativeCode, params: createParams(count, spread) };\r
}\r
\r
let $pattern: RegExp | undefined;\r
function getFunctionPattern(): RegExp {\r
    if ($pattern) return $pattern;\r
\r
    const ws = '\\\\s+';\r
    const ws0 = '\\\\s*';\r
    const id = '[a-zA-Z_$][a-zA-Z0-9_$]*';\r
    const paramContent = '[^)]*';\r
\r
    // Build pattern with arrow functions FIRST in the alternation\r
\r
    // Arrow function patterns (must come before method pattern!)\r
    const arrowBranch =\r
        \`(?:\` +\r
        \`(?<asyncArrow>async\${ws})?\` +\r
        \`(?:\` +\r
        \`\\\\((?<arrowParams>\${paramContent})\\\\)\${ws0}(?<arrow>=>)|\` +  // Parens arrow\r
        \`(?<arrowSingle>\${id})\${ws0}=>\` +  // Single param arrow\r
        \`)\` +\r
        \`)\`;\r
\r
    // Traditional patterns\r
    const traditionalBranch =\r
        \`(?:\` +\r
        \`(?<async>async\${ws})?\` +\r
        \`(?:\` +\r
        \`(?<class>class)|\` +\r
        \`(?<get>get)|\` +\r
        \`(?<set>set)|\` +\r
        \`(?<function>function)\${ws0}(?<funcStar>\\\\*)?\` +\r
        \`)\${ws0}(?:\${id}\${ws0})?\` +\r
        \`(?:\\\\((?<params>\${paramContent})\\\\))?\` +  // Optional params for class\r
        \`)\`;\r
\r
    // Method pattern (must come AFTER arrow check!)\r
    const methodBranch =\r
        \`(?:\` +\r
        \`(?<async2>async\${ws})?\` +\r
        \`(?<methodStar>\\\\*)?\` +\r
        \`(?<methodName>\${id})\${ws0}\` +\r
        \`\\\\((?<params2>\${paramContent})\\\\)\` +\r
        \`)\`;\r
\r
    // Combine all branches - arrows first!\r
    $pattern = new RegExp(\r
        \`^(?:\${arrowBranch}|\${traditionalBranch}|\${methodBranch})\`\r
    );\r
\r
    return $pattern;\r
}\r
\r
function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    const result = Array.from({ length: count }, () => ({ spread: false }));\r
    if (spread) result[result.length - 1].spread = true;\r
    return result;\r
}`}),e(p,{identifier:"untitled-3",type:".txt",children:`import { parseFunctionInfo, $FunctionInfo } from '@/reflection';\r
import { describe, it, expect } from 'vitest';\r
\r
class Test {\r
    get prop() { return 0; }\r
    set prop(value: number) { }\r
}\r
\r
describe('$Reflection', () => {\r
    describe('parseFunctionInfo', () => {\r
        describe('parameter variations', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expected: { count: number, rest: boolean }\r
            }> = [\r
                    { name: 'no parameters - lambda', func: [() => { }][0], expected: { count: 0, rest: false } },\r
                    { name: 'no parameters - function', func: [function () { }][0], expected: { count: 0, rest: false } },\r
                    { name: 'no parameters - method', func: [({ m() { } }).m][0], expected: { count: 0, rest: false } },\r
                    { name: 'single parameter - lambda parens', func: [(x: any) => x][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - lambda no parens', func: [(x: any) => x][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - function', func: [function (x: any) { }][0], expected: { count: 1, rest: false } },\r
                    { name: 'single parameter - method', func: [({ m(x: any) { } }).m][0], expected: { count: 1, rest: false } },\r
                    { name: 'multiple parameters - lambda', func: [(x: any, y: any, z: any) => { }][0], expected: { count: 3, rest: false } },\r
                    { name: 'multiple parameters - function', func: [function (a: any, b: any, c: any) { }][0], expected: { count: 3, rest: false } },\r
                    { name: 'multiple parameters - method', func: [({ m(x: any, y: any) { } }).m][0], expected: { count: 2, rest: false } },\r
                    { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: { count: 0, rest: true } },\r
                    { name: 'rest only - function', func: [function (...args: any[]) { }][0], expected: { count: 0, rest: true } },\r
                    { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: { count: 0, rest: true } },\r
                    { name: 'params + rest - lambda', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: { count: 2, rest: true } },\r
                    { name: 'params + rest - function', func: [function (x: any, ...rest: any[]) { }][0], expected: { count: 1, rest: true } },\r
                    { name: 'params + rest - method', func: [({ m(a: any, ...rest: any[]) { } }).m][0], expected: { count: 1, rest: true } },\r
                ];\r
\r
            testCases.forEach(({ name, func, expected }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.params).toEqual(expected);\r
                });\r
            });\r
        });\r
\r
        describe('async modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'async lambda', func: [async () => { }][0] },\r
                { name: 'async lambda with params', func: [async (x: any, y: any) => { }][0] },\r
                { name: 'async function', func: [async function () { }][0] },\r
                { name: 'async function named', func: [async function fetch() { }][0] },\r
                { name: 'async method', func: [({ async m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.async).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('generator modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'generator function', func: [function* () { }][0] },\r
                { name: 'generator function named', func: [function* gen() { }][0] },\r
                { name: 'generator method', func: [({ *m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.generator).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('function forms', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expectedForm: $FunctionInfo['form']\r
            }> = [\r
                    { name: 'lambda no params', func: [() => { }][0], expectedForm: 'lambda' },\r
                    { name: 'lambda single param no parens', func: [(x: any) => x][0], expectedForm: 'lambda' },\r
                    { name: 'lambda multiple params', func: [(x: any, y: any) => { }][0], expectedForm: 'lambda' },\r
                    { name: 'async lambda', func: [async () => { }][0], expectedForm: 'lambda' },\r
                    { name: 'function anonymous', func: [function () { }][0], expectedForm: 'function' },\r
                    { name: 'function named', func: [function foo() { }][0], expectedForm: 'function' },\r
                    { name: 'async function', func: [async function () { }][0], expectedForm: 'function' },\r
                    { name: 'generator function', func: [function* () { }][0], expectedForm: 'function' },\r
                    { name: 'method', func: [({ m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'async method', func: [({ async m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'generator method', func: [({ *m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedForm: 'getter' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedForm: 'setter' },\r
                    { name: 'class named', func: [class Foo { }][0], expectedForm: 'class' },\r
                    { name: 'class anonymous', func: [class { }][0], expectedForm: 'class' },\r
                ];\r
\r
            testCases.forEach(({ name, func, expectedForm }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.form).toBe(expectedForm);\r
                });\r
            });\r
        });\r
\r
        describe('naming', () => {\r
            describe('named functions', () => {\r
                const testCases: Array<{ name: string, func: Function, expectedName: string }> = [\r
                    { name: 'function', func: [function myFunc() { }][0], expectedName: 'myFunc' },\r
                    { name: 'method', func: [({ myMethod() { } }).myMethod][0], expectedName: 'myMethod' },\r
                    { name: 'generator', func: [function* myGen() { }][0], expectedName: 'myGen' },\r
                    { name: 'class', func: [class MyClass { }][0], expectedName: 'MyClass' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedName: 'prop' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedName: 'prop' },\r
                ];\r
\r
                testCases.forEach(({ name, func, expectedName }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe(expectedName);\r
                    });\r
                });\r
            });\r
\r
            describe('anonymous functions', () => {\r
                const testCases: Array<{ name: string, func: Function }> = [\r
                    { name: 'lambda', func: [() => { }][0] },\r
                    { name: 'function', func: [function () { }][0] },\r
                    { name: 'generator', func: [function* () { }][0] },\r
                    { name: 'class', func: [class { }][0] },\r
                ];\r
\r
                testCases.forEach(({ name, func }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe('');\r
                    });\r
                });\r
            });\r
        });\r
\r
        describe('native functions', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'String constructor', func: [String][0] },\r
                { name: 'Array constructor', func: [Array][0] },\r
                { name: 'Object constructor', func: [Object][0] },\r
                { name: 'Array.prototype.map', func: [Array.prototype.map][0] },\r
                { name: 'String.prototype.slice', func: [String.prototype.slice][0] },\r
                { name: 'Math.pow', func: [Math.pow][0] },\r
                { name: 'bound function', func: [[function () { }][0].bind(null)][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.native).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('unknown/unparseable', () => {\r
            const testCases: Array<{ name: string, setup: () => Function }> = [\r
                {\r
                    name: 'custom toString - gibberish',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => 'completely unparseable';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - empty',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - unicode',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '∂ƒ∆ø˙©ƒ';\r
                        return f;\r
                    }\r
                },\r
            ];\r
\r
            testCases.forEach(({ name, setup }) => {\r
                it(name, () => {\r
                    const func = setup();\r
                    const result = parseFunctionInfo(func);\r
\r
                    expect(result.form).toBe('unknown');\r
                    expect(result.async).toBeUndefined();\r
                    expect(result.generator).toBeUndefined();\r
                    expect(result.native).toBeUndefined();\r
                    expect(result.params).toEqual({ count: undefined, rest: undefined });\r
                });\r
            });\r
        });\r
\r
        describe('comprehensive combinations', () => {\r
            it('async lambda with rest params', () => {\r
                const result = parseFunctionInfo([async (...args: any[]) => { }][0]);\r
                expect(result.form).toBe('lambda');\r
                expect(result.async).toBe(true);\r
                expect(result.params).toEqual({ count: 0, rest: true });\r
            });\r
\r
            it('async generator with params and rest', () => {\r
                const result = parseFunctionInfo([async function* (a: any, b: any, ...rest: any[]) { }][0]);\r
                expect(result.form).toBe('function');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 2, rest: true });\r
            });\r
\r
            it('async generator method with rest', () => {\r
                const result = parseFunctionInfo([({ async *method(...args: any[]) { } }).method][0]);\r
                expect(result.form).toBe('method');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 0, rest: true });\r
            });\r
        });\r
\r
        describe('parameter array structure', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expected: Array<{ spread: boolean }>\r
            }> = [\r
                { name: 'no params - empty array', func: [() => { }][0], expected: [] },\r
                { name: 'single param - one element, no spread', func: [(x: any) => { }][0], expected: [{ spread: false }] },\r
                { name: 'two params - no spread', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },\r
                { name: 'three params - no spread', func: [(x: any, y: any, z: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'rest only - single spread element', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },\r
                { name: 'single param + rest', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },\r
                { name: 'two params + rest', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'three params + rest', func: [(a: any, b: any, c: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
            ];\r
\r
            testCases.forEach(({ name, func, expected }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.params).toEqual(expected);\r
                });\r
            });\r
        });\r
    });\r
});`}),e(p,{identifier:"untitled-4",type:".txt",children:` ❯ tests/reflection.test.ts:250:36\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > single param + rest\r
AssertionError: expected [ { spread: true } ] to deeply equal [ { spread: false }, { spread: true } ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > two params + rest\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal [ { spread: false }, …(2) ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[14/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > three params + rest\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal [ { spread: false }, …(3) ]\r
\r
- Expected\r
+ Received\r
\r
@@ -4,11 +4,8 @@\r
    },\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
 RERUN  src/reflection.ts x7 \r
\r
 ❯ tests/catalogue.test.ts (31 tests | 8 failed) 28ms\r
   ❯ $Catalogue (31)\r
     ✓ The Elegant Self-Reference (3)\r
       ✓ should have itself as its own subject 2ms\r
       ✓ should allow self-delegation through $subject 0ms\r
       ✓ should treat $subject as opaque from outside perspective 0ms\r
     ❯ Core Literature & References (4)\r
       ✓ should index and find with canonical representations 1ms    \r
       ✓ should overwrite on re-index 0ms\r
       × should handle different value types 8ms\r
       ✓ should return undefined for missing representations 0ms     \r
     ✓ $empty() - Isolated Catalogues (2)\r
       ✓ should create catalogue with no inheritance 0ms\r
       ✓ should be completely isolated from root 0ms\r
     ❯ $new() - Inheritance Through Topics (3)\r
       ✓ should create child that inherits from parent 0ms\r
       ✓ should allow child to shadow parent values 0ms\r
       × should create inheritance chains 3ms\r
     ❯ $including() - Multiple Topics (4)\r
       × should inherit from multiple catalogues in order 2ms\r
       ✓ should respect topic order for shadowing 0ms\r
       × should include parent as last topic 1ms\r
       ✓ should filter non-catalogue topics silently 0ms\r
     ✓ Subject Delegation (4)\r
       ✓ should delegate to known subjects 0ms\r
       ✓ should ignore unknown subjects 0ms\r
       ✓ should allow indexing to known subjects 0ms\r
       ✓ should ignore indexing to unknown subjects 0ms\r
     ❯ $deref() - Memory Management (5)\r
       ✓ should clear entire catalogue when called empty 0ms\r
       × should remove specific reference 1ms\r
       × should remove subject from topics 1ms\r
       ✓ should delegate deref with rep and subject 0ms\r
       ✓ should make catalogue non-responsive after deref 0ms\r
     ❯ Privacy Guarantees (3)\r
       ✓ should not expose parent internals to child 0ms\r
       × should maintain isolation through export boundaries 1ms\r
       ✓ should use $subject as opaque capability token 0ms\r
     ❯ Complex Scenarios (3)\r
       × should handle deep inheritance with multiple branches 1ms\r
       ✓ should handle re-referencing after deref 0ms\r
       ✓ should maintain separate namespaces per catalogue 0ms\r
 ❯ tests/reflection.test.ts (74 tests | 22 failed) 33ms\r
   ❯ $Reflection (74)\r
     ❯ parseFunctionInfo (74)\r
       ❯ parameter variations (16)\r
         × no parameters - lambda 10ms\r
         × no parameters - function 1ms\r
         × no parameters - method 1ms\r
         × single parameter - lambda parens 1ms\r
         × single parameter - lambda no parens 1ms\r
         × single parameter - function 1ms\r
         × single parameter - method 1ms\r
         × multiple parameters - lambda 1ms\r
         × multiple parameters - function 1ms\r
         × multiple parameters - method 1ms\r
         × rest only - lambda 1ms\r
         × rest only - function 1ms\r
         × rest only - method 1ms\r
         × params + rest - lambda 1ms\r
         × params + rest - function 1ms\r
         × params + rest - method 1ms\r
       ✓ async modifier (7)\r
         ✓ async lambda 0ms\r
         ✓ async lambda with params 0ms\r
         ✓ async function 0ms\r
         ✓ async function named 0ms\r
         ✓ async method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
       ✓ generator modifier (5)\r
         ✓ generator function 0ms\r
         ✓ generator function named 0ms\r
         ✓ generator method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
       ✓ function forms (15)\r
         ✓ lambda no params 0ms\r
         ✓ lambda single param no parens 0ms\r
         ✓ lambda multiple params 0ms\r
         ✓ async lambda 0ms\r
         ✓ function anonymous 0ms\r
         ✓ function named 0ms\r
         ✓ async function 0ms\r
         ✓ generator function 0ms\r
         ✓ method 0ms\r
         ✓ async method 0ms\r
         ✓ generator method 0ms\r
         ✓ getter 0ms\r
         ✓ setter 0ms\r
         ✓ class named 0ms\r
         ✓ class anonymous 0ms\r
       ✓ naming (10)\r
         ✓ named functions (6)\r
           ✓ function 0ms\r
           ✓ method 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
           ✓ getter 0ms\r
           ✓ setter 0ms\r
         ✓ anonymous functions (4)\r
           ✓ lambda 0ms\r
           ✓ function 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
       ✓ native functions (7)\r
         ✓ String constructor 0ms\r
         ✓ Array constructor 0ms\r
         ✓ Object constructor 0ms\r
         ✓ Array.prototype.map 0ms\r
         ✓ String.prototype.slice 0ms\r
         ✓ Math.pow 0ms\r
         ✓ bound function 0ms\r
       ❯ unknown/unparseable (3)\r
         × custom toString - gibberish 1ms\r
         × custom toString - empty 1ms\r
         × custom toString - unicode 1ms\r
       ❯ comprehensive combinations (3)\r
         × async lambda with rest params 1ms\r
         × async generator with params and rest 1ms\r
         × async generator method with rest 1ms\r
       ✓ parameter array structure (8)\r
         ✓ no params - empty array 0ms\r
         ✓ single param - one element, no spread 0ms\r
         ✓ two params - no spread 0ms\r
         ✓ three params - no spread 0ms\r
         ✓ rest only - single spread element 0ms\r
         ✓ single param + rest 0ms\r
         ✓ two params + rest 0ms\r
         ✓ three params + rest 0ms\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 22 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - method\r
AssertionError: expected [] to deeply equal { count: +0, rest: false }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda no parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - method\r
AssertionError: expected [ { spread: false } ] to deeply equal { count: 1, rest: false }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - function\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 3, rest: false }\r
\r
- Expected:\r
{\r
  "count": 3,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - method\r
AssertionError: expected [ Array(2) ] to deeply equal { count: 2, rest: false }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - method\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: +0, rest: true }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - lambda\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 2, rest: true }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - method\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal { count: 1, rest: true }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - gibberish\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - empty\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - unicode\r
AssertionError: expected undefined to deeply equal { count: undefined, rest: undefined }\r
\r
- Expected:\r
{\r
  "count": undefined,\r
  "rest": undefined,\r
}\r
\r
+ Received:\r
undefined\r
\r
 ❯ tests/reflection.test.ts:202:43\r
    200|                     expect(result.generator).toBeUndefined();\r
    201|                     expect(result.native).toBeUndefined();\r
    202|                     expect(result.params).toEqual({ count: undefined, rest: undefined });\r
       |                                           ^\r
    203|                 });\r
    204|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async lambda with rest params\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: +0, rest: true }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:212:39\r
    210|                 expect(result.form).toBe('lambda');\r
    211|                 expect(result.async).toBe(true);\r
    212|                 expect(result.params).toEqual({ count: 0, rest: true });\r
       |                                       ^\r
    213|             });\r
    214| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator with params and rest\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 2, rest: true }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:220:39\r
    218|                 expect(result.async).toBe(true);\r
    219|                 expect(result.generator).toBe(true);\r
    220|                 expect(result.params).toEqual({ count: 2, rest: true });\r
       |                                       ^\r
    221|             });\r
    222| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/22]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator method with rest\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: +0, rest: true }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
 RERUN  src/reflection.ts x8 \r
\r
 ❯ tests/catalogue.test.ts (31 tests | 8 failed) 28ms\r
   ❯ $Catalogue (31)\r
     ✓ The Elegant Self-Reference (3)\r
       ✓ should have itself as its own subject 2ms\r
       ✓ should allow self-delegation through $subject 0ms\r
       ✓ should treat $subject as opaque from outside perspective 0ms\r
     ❯ Core Literature & References (4)\r
       ✓ should index and find with canonical representations 1ms    \r
       ✓ should overwrite on re-index 0ms\r
       × should handle different value types 8ms\r
       ✓ should return undefined for missing representations 0ms     \r
     ✓ $empty() - Isolated Catalogues (2)\r
       ✓ should create catalogue with no inheritance 0ms\r
       ✓ should be completely isolated from root 0ms\r
     ❯ $new() - Inheritance Through Topics (3)\r
       ✓ should create child that inherits from parent 0ms\r
       ✓ should allow child to shadow parent values 0ms\r
       × should create inheritance chains 3ms\r
     ❯ $including() - Multiple Topics (4)\r
       × should inherit from multiple catalogues in order 2ms\r
       ✓ should respect topic order for shadowing 0ms\r
       × should include parent as last topic 1ms\r
       ✓ should filter non-catalogue topics silently 0ms\r
     ✓ Subject Delegation (4)\r
       ✓ should delegate to known subjects 0ms\r
       ✓ should ignore unknown subjects 0ms\r
       ✓ should allow indexing to known subjects 0ms\r
       ✓ should ignore indexing to unknown subjects 0ms\r
     ❯ $deref() - Memory Management (5)\r
       ✓ should clear entire catalogue when called empty 0ms\r
       × should remove specific reference 1ms\r
       × should remove subject from topics 1ms\r
       ✓ should delegate deref with rep and subject 0ms\r
       ✓ should make catalogue non-responsive after deref 0ms\r
     ❯ Privacy Guarantees (3)\r
       ✓ should not expose parent internals to child 0ms\r
       × should maintain isolation through export boundaries 1ms\r
       ✓ should use $subject as opaque capability token 0ms\r
     ❯ Complex Scenarios (3)\r
       × should handle deep inheritance with multiple branches 1ms\r
       ✓ should handle re-referencing after deref 0ms\r
       ✓ should maintain separate namespaces per catalogue 0ms\r
 ❯ tests/reflection.test.ts (74 tests | 26 failed) 39ms\r
   ❯ $Reflection (74)\r
     ❯ parseFunctionInfo (74)\r
       ❯ parameter variations (16)\r
         × no parameters - lambda 10ms\r
         × no parameters - function 2ms\r
         × no parameters - method 1ms\r
         × single parameter - lambda parens 1ms\r
         × single parameter - lambda no parens 1ms\r
         × single parameter - function 1ms\r
         × single parameter - method 1ms\r
         × multiple parameters - lambda 1ms\r
         × multiple parameters - function 1ms\r
         × multiple parameters - method 1ms\r
         × rest only - lambda 1ms\r
         × rest only - function 1ms\r
         × rest only - method 0ms\r
         × params + rest - lambda 1ms\r
         × params + rest - function 1ms\r
         × params + rest - method 1ms\r
       ✓ async modifier (7)\r
         ✓ async lambda 0ms\r
         ✓ async lambda with params 0ms\r
         ✓ async function 0ms\r
         ✓ async function named 0ms\r
         ✓ async method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
       ✓ generator modifier (5)\r
         ✓ generator function 0ms\r
         ✓ generator function named 0ms\r
         ✓ generator method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
       ✓ function forms (15)\r
         ✓ lambda no params 0ms\r
         ✓ lambda single param no parens 0ms\r
         ✓ lambda multiple params 0ms\r
         ✓ async lambda 0ms\r
         ✓ function anonymous 0ms\r
         ✓ function named 0ms\r
         ✓ async function 0ms\r
         ✓ generator function 0ms\r
         ✓ method 0ms\r
         ✓ async method 0ms\r
         ✓ generator method 0ms\r
         ✓ getter 0ms\r
         ✓ setter 0ms\r
         ✓ class named 0ms\r
         ✓ class anonymous 0ms\r
       ✓ naming (10)\r
         ✓ named functions (6)\r
           ✓ function 0ms\r
           ✓ method 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
           ✓ getter 0ms\r
           ✓ setter 0ms\r
         ✓ anonymous functions (4)\r
           ✓ lambda 0ms\r
           ✓ function 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
       ✓ native functions (7)\r
         ✓ String constructor 0ms\r
         ✓ Array constructor 0ms\r
         ✓ Object constructor 0ms\r
         ✓ Array.prototype.map 0ms\r
         ✓ String.prototype.slice 0ms\r
         ✓ Math.pow 0ms\r
         ✓ bound function 0ms\r
       ❯ unknown/unparseable (3)\r
         × custom toString - gibberish 1ms\r
         × custom toString - empty 1ms\r
         × custom toString - unicode 1ms\r
       ❯ comprehensive combinations (3)\r
         × async lambda with rest params 0ms\r
         × async generator with params and rest 1ms\r
         × async generator method with rest 1ms\r
       ❯ parameter array structure (8)\r
         ✓ no params - empty array 0ms\r
         ✓ single param - one element, no spread 0ms\r
         ✓ two params - no spread 0ms\r
         ✓ three params - no spread 0ms\r
         × rest only - single spread element 0ms\r
         × single param + rest 2ms\r
         × two params + rest 1ms\r
         × three params + rest 1ms\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 26 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - method\r
AssertionError: expected [] to deeply equal { count: +0, rest: false }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda no parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - method\r
AssertionError: expected [ { spread: false } ] to deeply equal { count: 1, rest: false }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - function\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 3, rest: false }\r
\r
- Expected:\r
{\r
  "count": 3,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - method\r
AssertionError: expected [ Array(2) ] to deeply equal { count: 2, rest: false }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - method\r
TypeError: Cannot set properties of undefined (setting 'spread')\r
 ❯ createParams src/reflection.ts:982:43\r
    980| function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    981|     const result = Array.from({ length: count }, () => ({ spread: false }));\r
    982|     if (spread) result[result.length - 1].spread = true;\r
       |                                           ^\r
    983|     return result;\r
    984| }\r
 ❯ parseFunctionInfo src/reflection.ts:926:75\r
 ❯ tests/reflection.test.ts:37:36\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - lambda\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal { count: 2, rest: true }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - method\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: 1, rest: true }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - gibberish\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - empty\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - unicode\r
AssertionError: expected undefined to deeply equal { count: undefined, rest: undefined }\r
\r
- Expected:\r
{\r
  "count": undefined,\r
  "rest": undefined,\r
}\r
\r
+ Received:\r
undefined\r
\r
 ❯ tests/reflection.test.ts:202:43\r
    200|                     expect(result.generator).toBeUndefined();\r
    201|                     expect(result.native).toBeUndefined();\r
    202|                     expect(result.params).toEqual({ count: undefined, rest: undefined });\r
       |                                           ^\r
    203|                 });\r
    204|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async lambda with rest params\r
TypeError: Cannot set properties of undefined (setting 'spread')\r
 ❯ createParams src/reflection.ts:982:43\r
    980| function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    981|     const result = Array.from({ length: count }, () => ({ spread: false }));\r
    982|     if (spread) result[result.length - 1].spread = true;\r
       |                                           ^\r
    983|     return result;\r
    984| }\r
 ❯ parseFunctionInfo src/reflection.ts:926:75\r
 ❯ tests/reflection.test.ts:209:32\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator with params and rest\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal { count: 2, rest: true }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "rest": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:220:39\r
    218|                 expect(result.async).toBe(true);\r
    219|                 expect(result.generator).toBe(true);\r
    220|                 expect(result.params).toEqual({ count: 2, rest: true });\r
       |                                       ^\r
    221|             });\r
    222| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator method with rest\r
TypeError: Cannot set properties of undefined (setting 'spread')\r
 ❯ createParams src/reflection.ts:982:43\r
    980| function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    981|     const result = Array.from({ length: count }, () => ({ spread: false }));\r
    982|     if (spread) result[result.length - 1].spread = true;\r
       |                                           ^\r
    983|     return result;\r
    984| }\r
 ❯ parseFunctionInfo src/reflection.ts:926:75\r
 ❯ tests/reflection.test.ts:224:32\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > rest only - single spread element\r
TypeError: Cannot set properties of undefined (setting 'spread')\r
 ❯ createParams src/reflection.ts:982:43\r
    980| function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    981|     const result = Array.from({ length: count }, () => ({ spread: false }));\r
    982|     if (spread) result[result.length - 1].spread = true;\r
       |                                           ^\r
    983|     return result;\r
    984| }\r
 ❯ parseFunctionInfo src/reflection.ts:926:75\r
 ❯ tests/reflection.test.ts:250:36\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > single param + rest\r
AssertionError: expected [ { spread: true } ] to deeply equal [ { spread: false }, { spread: true } ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > two params + rest\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal [ { spread: false }, …(2) ]\r
\r
- Expected\r
+ Received\r
\r
  [\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[14/26]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter array structure > three params + rest\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal [ { spread: false }, …(3) ]\r
\r
- Expected\r
+ Received\r
\r
@@ -4,11 +4,8 @@\r
    },\r
    {\r
      "spread": false,\r
    },\r
    {\r
-     "spread": false,\r
-   },\r
-   {\r
      "spread": true,\r
    },\r
  ]\r
\r
 ❯ tests/reflection.test.ts:251:43\r
    249|                 it(name, () => {\r
    250|                     const result = parseFunctionInfo(func);\r
    251|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
    252|                 });\r
    253|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[15/26]⎯\r
\r
 Test Files  2 failed (2)\r
      Tests  34 failed | 71 passed (105)\r
   Start at  15:05:18\r
   Duration  85ms\r
\r
 FAIL  Tests failed. Watching for file changes...\r
       press h to show help, press q to quit\r
`}),e(p,{identifier:"untitled-5",type:".txt",children:`PS C:\\Users\\dougl\\OneDrive\\Source\\DNA Platform\\chemistry> npm run tests\r
\r
> chemistry@0.1.0 tests\r
> vitest\r
\r
\r
 DEV  v4.0.6 C:/Users/dougl/OneDrive/Source/DNA Platform/chemistry\r
\r
 ❯ tests/catalogue.test.ts (31 tests | 8 failed) 25ms\r
       ✓ should have itself as its own subject 2ms\r
       ✓ should allow self-delegation through $subject 0ms\r
       ✓ should treat $subject as opaque from outside perspective 0ms\r
       ✓ should index and find with canonical representations 1ms\r
       ✓ should overwrite on re-index 0ms\r
       × should handle different value types 8ms\r
       ✓ should return undefined for missing representations 0ms\r
       ✓ should create catalogue with no inheritance 0ms\r
       ✓ should be completely isolated from root 0ms\r
       ✓ should create child that inherits from parent 0ms\r
       ✓ should allow child to shadow parent values 0ms\r
       × should create inheritance chains 2ms\r
       × should inherit from multiple catalogues in order 2ms\r
       ✓ should respect topic order for shadowing 0ms\r
       × should include parent as last topic 1ms\r
       ✓ should filter non-catalogue topics silently 0ms\r
       ✓ should delegate to known subjects 0ms\r
       ✓ should ignore unknown subjects 0ms\r
       ✓ should allow indexing to known subjects 0ms\r
       ✓ should ignore indexing to unknown subjects 0ms\r
       ✓ should clear entire catalogue when called empty 0ms\r
       × should remove specific reference 1ms\r
       × should remove subject from topics 1ms\r
       ✓ should delegate deref with rep and subject 0ms\r
       ✓ should make catalogue non-responsive after deref 0ms\r
       ✓ should not expose parent internals to child 0ms\r
       × should maintain isolation through export boundaries 1ms\r
       ✓ should use $subject as opaque capability token 0ms\r
       × should handle deep inheritance with multiple branches 1ms\r
       ✓ should handle re-referencing after deref 0ms\r
       ✓ should maintain separate namespaces per catalogue 0ms\r
 ✓ tests/particle.test.ts (17 tests) 18ms\r
 ❯ tests/reflection.test.ts (96 tests | 22 failed) 39ms\r
         × no parameters - lambda 12ms\r
         × no parameters - function 1ms\r
         × no parameters - method 1ms\r
         × single parameter - lambda parens 1ms\r
         × single parameter - lambda no parens 1ms\r
         × single parameter - function 1ms\r
         × single parameter - method 1ms\r
         × multiple parameters - lambda 1ms\r
         × multiple parameters - function 1ms\r
         × multiple parameters - method 1ms\r
         × rest only - lambda 1ms\r
         × rest only - function 1ms\r
         × rest only - method 1ms\r
         × params + rest - lambda 1ms\r
         × params + rest - function 1ms\r
         × params + rest - method 1ms\r
         ✓ async lambda 0ms\r
         ✓ async lambda with params 0ms\r
         ✓ async function 0ms\r
         ✓ async function named 0ms\r
         ✓ async method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
         ✓ generator function 0ms\r
         ✓ generator function named 0ms\r
         ✓ generator method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
         ✓ lambda no params 0ms\r
         ✓ lambda single param no parens 0ms\r
         ✓ lambda multiple params 0ms\r
         ✓ async lambda 0ms\r
         ✓ function anonymous 0ms\r
         ✓ function named 0ms\r
         ✓ async function 0ms\r
         ✓ generator function 0ms\r
         ✓ method 0ms\r
         ✓ async method 0ms\r
         ✓ generator method 0ms\r
         ✓ getter 0ms\r
         ✓ setter 0ms\r
         ✓ class named 0ms\r
         ✓ class anonymous 0ms\r
           ✓ function 0ms\r
           ✓ method 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
           ✓ getter 0ms\r
           ✓ setter 0ms\r
           ✓ lambda 0ms\r
           ✓ function 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
         ✓ String constructor 0ms\r
         ✓ Array constructor 0ms\r
         ✓ Object constructor 0ms\r
         ✓ Array.prototype.map 0ms\r
         ✓ String.prototype.slice 0ms\r
         ✓ Math.pow 0ms\r
         ✓ bound function 0ms\r
         × custom toString - gibberish 1ms\r
         × custom toString - empty 1ms\r
         × custom toString - unicode 1ms\r
         × async lambda with rest params 1ms\r
         × async generator with params and rest 1ms\r
         × async generator method with rest 1ms\r
         ✓ no params - lambda 0ms\r
         ✓ no params - function 0ms\r
         ✓ no params - method 0ms\r
         ✓ single param - lambda 0ms\r
         ✓ single param - function 0ms\r
         ✓ single param - method 0ms\r
         ✓ two params - lambda 0ms\r
         ✓ two params - function 0ms\r
         ✓ two params - method 0ms\r
         ✓ three params - lambda 0ms\r
         ✓ three params - function 0ms\r
         ✓ three params - method 0ms\r
         ✓ four params - lambda 0ms\r
         ✓ four params - function 0ms\r
         ✓ four params - method 0ms\r
         ✓ rest only - lambda 0ms\r
         ✓ rest only - function 0ms\r
         ✓ rest only - method 0ms\r
         ✓ single param + rest - lambda 0ms\r
         ✓ single param + rest - function 0ms\r
         ✓ single param + rest - method 0ms\r
         ✓ two params + rest - lambda 0ms\r
         ✓ two params + rest - function 0ms\r
         ✓ two params + rest - method 0ms\r
         ✓ three params + rest - lambda 0ms\r
         ✓ three params + rest - function 0ms\r
         ✓ three params + rest - method 0ms\r
         ✓ four params + rest - lambda 0ms\r
         ✓ four params + rest - function 0ms\r
         ✓ four params + rest - method 0ms\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 30 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Core Literature & References > should handle different value types\r
AssertionError: expected null to be [Function handler] // Object.is equality\r
\r
- Expected:\r
[Function handler]\r
\r
+ Received:\r
null\r
\r
 ❯ tests/catalogue.test.ts:65:36\r
     63|             $lib.$index(nil, null);\r
     64| \r
     65|             expect($lib.$find(fn)).toBe(handler);\r
       |                                    ^\r
     66|             expect($lib.$find(num)).toBe(42);\r
     67|             expect($lib.$find(nil)).toBe(null);\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $new() - Inheritance Through Topics > should create inheritance chains\r
AssertionError: expected 3 to be 1 // Object.is equality\r
\r
- Expected\r
+ Received\r
\r
- 1\r
+ 3\r
\r
 ❯ tests/catalogue.test.ts:130:37\r
    128| \r
    129|             // Bottom sees all\r
    130|             expect(bottom.$find(a)).toBe(1);\r
       |                                     ^\r
    131|             expect(bottom.$find(b)).toBe(2);\r
    132|             expect(bottom.$find(c)).toBe(3);\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $including() - Multiple Topics > should inherit from multiple catalogues in order\r
AssertionError: expected 'from-1' to be 'from-2' // Object.is equality\r
\r
Expected: "from-2"\r
Received: "from-1"\r
\r
 ❯ tests/catalogue.test.ts:154:47\r
    152| \r
    153|             expect(combined.$find($rep('a'))).toBe('from-1');\r
    154|             expect(combined.$find($rep('b'))).toBe('from-2');\r
       |                                               ^\r
    155|         });\r
    156| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $including() - Multiple Topics > should include parent as last topic\r
AssertionError: expected 'other-value' to be 'parent-value' // Object.is equality\r
\r
Expected: "parent-value"\r
Received: "other-value"\r
\r
 ❯ tests/catalogue.test.ts:177:49\r
    175| \r
    176|             expect(child.$find($rep('other'))).toBe('other-value');\r
    177|             expect(child.$find($rep('parent'))).toBe('parent-value');\r
       |                                                 ^\r
    178|         });\r
    179| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $deref() - Memory Management > should remove specific reference\r
AssertionError: expected undefined to be 'staying' // Object.is equality\r
\r
- Expected:\r
"staying"\r
\r
+ Received:\r
undefined\r
\r
 ❯ tests/catalogue.test.ts:257:38\r
    255|             $lib.$deref(remove);\r
    256| \r
    257|             expect($lib.$find(keep)).toBe('staying');\r
       |                                      ^\r
    258|             expect($lib.$find(remove)).toBeUndefined();\r
    259|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $deref() - Memory Management > should remove subject from topics\r
AssertionError: expected 'value2' to be undefined\r
\r
- Expected:\r
undefined\r
\r
+ Received:\r
"value2"\r
\r
 ❯ tests/catalogue.test.ts:273:45\r
    271|             child.$deref(topic1);\r
    272| \r
    273|             expect(child.$find($rep('t1'))).toBeUndefined();\r
       |                                             ^\r
    274|             expect(child.$find($rep('t2'))).toBe('value2');\r
    275|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Privacy Guarantees > should maintain isolation through export boundaries\r
AssertionError: expected 'visible' to be 'hidden' // Object.is equality\r
\r
Expected: "hidden"\r
Received: "visible"\r
\r
 ❯ tests/catalogue.test.ts:329:53\r
    327| \r
    328|             // Can see inherited data\r
    329|             expect(catalogue.$find($rep('secret'))).toBe('hidden');\r
       |                                                     ^\r
    330|             expect(catalogue.$find($rep('public'))).toBe('visible');\r
    331| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/30]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Complex Scenarios > should handle deep inheritance with multiple branches\r
AssertionError: expected 'l' to be 'r' // Object.is equality\r
\r
Expected: "r"\r
Received: "l"\r
\r
 ❯ tests/catalogue.test.ts:366:50\r
    364| \r
    365|             // Combined sees left, right, and root\r
    366|             expect(combined.$find($rep('root'))).toBe('r');\r
       |                                                  ^\r
    367|             expect(combined.$find($rep('left'))).toBe('l');\r
    368|             expect(combined.$find($rep('right'))).toBe('r');\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > no parameters - method\r
AssertionError: expected [] to deeply equal { count: +0, spread: false }\r
\r
- Expected:\r
{\r
  "count": 0,\r
  "spread": false,\r
}\r
\r
+ Received:\r
[]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - lambda no parens\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > single parameter - method\r
AssertionError: expected [ { spread: false } ] to deeply equal { count: 1, spread: false }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "spread": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - function\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 3, spread: false }\r
\r
- Expected:\r
{\r
  "count": 3,\r
  "spread": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > multiple parameters - method\r
AssertionError: expected [ Array(2) ] to deeply equal { count: 2, spread: false }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "spread": false,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - lambda\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > rest only - method\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: 1, spread: true }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - lambda\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 3, spread: true }\r
\r
- Expected:\r
{\r
  "count": 3,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[14/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - function\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > parameter variations > params + rest - method\r
AssertionError: expected [ { spread: false }, { spread: true } ] to deeply equal { count: 2, spread: true }\r
\r
- Expected:\r
{\r
  "count": 2,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:38:43\r
     36|                 it(name, () => {\r
     37|                     const result = parseFunctionInfo(func);\r
     38|                     expect(result.params).toEqual(expected);\r
       |                                           ^\r
     39|                 });\r
     40|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[15/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - gibberish\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - empty\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > unknown/unparseable > custom toString - unicode\r
AssertionError: expected undefined to deeply equal { count: undefined, spread: undefined }\r
\r
- Expected:\r
{\r
  "count": undefined,\r
  "spread": undefined,\r
}\r
\r
+ Received:\r
undefined\r
\r
 ❯ tests/reflection.test.ts:202:43\r
    200|                     expect(result.generator).toBeUndefined();\r
    201|                     expect(result.native).toBeUndefined();\r
    202|                     expect(result.params).toEqual({ count: undefined, spread: undefined });\r
       |                                           ^\r
    203|                 });\r
    204|             });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[16/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async lambda with rest params\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: 1, spread: true }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:212:39\r
    210|                 expect(result.form).toBe('lambda');\r
    211|                 expect(result.async).toBe(true);\r
    212|                 expect(result.params).toEqual({ count: 1, spread: true });\r
       |                                       ^\r
    213|             });\r
    214| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[17/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator with params and rest\r
AssertionError: expected [ { spread: false }, …(2) ] to deeply equal { count: 3, spread: true }\r
\r
- Expected:\r
{\r
  "count": 3,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": false,\r
  },\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:220:39\r
    218|                 expect(result.async).toBe(true);\r
    219|                 expect(result.generator).toBe(true);\r
    220|                 expect(result.params).toEqual({ count: 3, spread: true });\r
       |                                       ^\r
    221|             });\r
    222| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[18/30]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator method with rest\r
AssertionError: expected [ { spread: true } ] to deeply equal { count: 1, spread: true }\r
\r
- Expected:\r
{\r
  "count": 1,\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:228:39\r
    226|                 expect(result.async).toBe(true);\r
    227|                 expect(result.generator).toBe(true);\r
    228|                 expect(result.params).toEqual({ count: 1, spread: true });\r
       |                                       ^\r
    229|             });\r
    230|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[19/30]⎯\r
\r
 Test Files  2 failed | 1 passed (3)\r
      Tests  30 failed | 114 passed (144)\r
   Start at  15:13:43\r
   Duration  963ms (transform 359ms, setup 0ms, collect 502ms, tests 82ms, environment 1.38s, prepare 58ms)\r
\r
 FAIL  Tests failed. Watching for file changes...\r
       press h to show help, press q to quit`}),e(p,{identifier:"untitled-6",type:".txt",children:`export function parseFunctionInfo(func: Function): $FunctionInfo {\r
    const str = func.toString();\r
    let name = func.name || '';\r
\r
    // Check for native code (but don't early return!)\r
    const hasNativeCode = str.includes('[native code]');\r
\r
    // Single main pattern match\r
    const pattern = getFunctionPattern();\r
    const match = pattern.exec(str);\r
\r
    if (!match?.groups) {\r
        // Can't parse - return unknown with undefined properties\r
        return {\r
            form: 'unknown',\r
            name,\r
            async: undefined,\r
            generator: undefined,\r
            native: hasNativeCode ? true : undefined,  // Only set true if we found [native code], otherwise undefined\r
            params: undefined\r
        };\r
    }\r
\r
    const g = match.groups;\r
\r
    // Check ALL async groups\r
    const async = !!g.async || !!g.asyncArrow || !!g.async2;\r
    const generator = !!g.funcStar || !!g.methodStar;\r
\r
    let form: $FunctionInfo['form'];\r
    if (g.arrow) {\r
        form = 'lambda';\r
        // Clear computed names for anonymous arrows (like '0' from array wrapping)\r
        if (name && /^\\d+$/.test(name)) name = '';\r
    }\r
    else if (g.class) form = 'class';\r
    else if (g.get) {\r
        form = 'getter';\r
        name = name.replace(/^get /, '');\r
    }\r
    else if (g.set) {\r
        form = 'setter';\r
        name = name.replace(/^set /, '');\r
    }\r
    else if (g.function) form = 'function';\r
    else if (g.methodName) form = 'method';\r
    else form = 'unknown';\r
\r
    // Extract ALL parameter groups\r
    const paramStr = g.arrowParams || g.arrowSingle || g.params || g.params2 || '';\r
\r
    if (!paramStr && form !== 'lambda') {\r
        return { form, name, async, generator, native: hasNativeCode, params: [] };\r
    }\r
\r
    // For single arrow param without parens\r
    if (g.arrowSingle) {\r
        return { form, name, async, generator, native: hasNativeCode, params: createParams(1, false) };\r
    }\r
\r
    // Parse parameter list\r
    const trimmed = paramStr.trim();\r
    if (!trimmed) {\r
        return { form, name, async, generator, native: hasNativeCode, params: [] };\r
    }\r
\r
    // Simple comma split (fast, handles 99% of cases correctly)\r
    const parts = trimmed.split(',').map(p => p.trim());\r
    const last = parts[parts.length - 1];\r
    const spread = last.startsWith('...');\r
    const count = parts.length;\r
\r
    return { form, name, async, generator, native: hasNativeCode, params: createParams(count, spread) };\r
}\r
\r
let $pattern: RegExp | undefined;\r
function getFunctionPattern(): RegExp {\r
    if ($pattern) return $pattern;\r
\r
    const ws = '\\\\s+';\r
    const ws0 = '\\\\s*';\r
    const id = '[a-zA-Z_$][a-zA-Z0-9_$]*';\r
    const paramContent = '[^)]*';\r
\r
    // Build pattern with arrow functions FIRST in the alternation\r
\r
    // Arrow function patterns (must come before method pattern!)\r
    const arrowBranch =\r
        \`(?:\` +\r
        \`(?<asyncArrow>async\${ws})?\` +\r
        \`(?:\` +\r
        \`\\\\((?<arrowParams>\${paramContent})\\\\)\${ws0}(?<arrow>=>)|\` +  // Parens arrow\r
        \`(?<arrowSingle>\${id})\${ws0}=>\` +  // Single param arrow\r
        \`)\` +\r
        \`)\`;\r
\r
    // Traditional patterns\r
    const traditionalBranch =\r
        \`(?:\` +\r
        \`(?<async>async\${ws})?\` +\r
        \`(?:\` +\r
        \`(?<class>class)|\` +\r
        \`(?<get>get)|\` +\r
        \`(?<set>set)|\` +\r
        \`(?<function>function)\${ws0}(?<funcStar>\\\\*)?\` +\r
        \`)\${ws0}(?:\${id}\${ws0})?\` +\r
        \`(?:\\\\((?<params>\${paramContent})\\\\))?\` +  // Optional params for class\r
        \`)\`;\r
\r
    // Method pattern (must come AFTER arrow check!)\r
    const methodBranch =\r
        \`(?:\` +\r
        \`(?<async2>async\${ws})?\` +\r
        \`(?<methodStar>\\\\*)?\` +\r
        \`(?<methodName>\${id})\${ws0}\` +\r
        \`\\\\((?<params2>\${paramContent})\\\\)\` +\r
        \`)\`;\r
\r
    // Combine all branches - arrows first!\r
    $pattern = new RegExp(\r
        \`^(?:\${arrowBranch}|\${traditionalBranch}|\${methodBranch})\`\r
    );\r
\r
    return $pattern;\r
}\r
\r
function createParams(count: number, spread: boolean): { spread: boolean }[] {\r
    const result = Array.from({ length: count }, () => ({ spread: false }));\r
    if (spread) result[result.length - 1].spread = true;\r
    return result;\r
}`}),e(p,{identifier:"untitled-7",type:".txt",children:`import { parseFunctionInfo, $FunctionInfo } from '@/reflection';\r
import { describe, it, expect } from 'vitest';\r
\r
class Test {\r
    get prop() { return 0; }\r
    set prop(value: number) { }\r
}\r
\r
describe('$Reflection', () => {\r
    describe('parseFunctionInfo', () => {\r
        describe('parameter variations', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expected: { count: number, spread: boolean }\r
            }> = [\r
                    { name: 'no parameters - lambda', func: [() => { }][0], expected: { count: 0, spread: false } },\r
                    { name: 'no parameters - function', func: [function () { }][0], expected: { count: 0, spread: false } },\r
                    { name: 'no parameters - method', func: [({ m() { } }).m][0], expected: { count: 0, spread: false } },\r
                    { name: 'single parameter - lambda parens', func: [(x: any) => x][0], expected: { count: 1, spread: false } },\r
                    { name: 'single parameter - lambda no parens', func: [(x: any) => x][0], expected: { count: 1, spread: false } },\r
                    { name: 'single parameter - function', func: [function (x: any) { }][0], expected: { count: 1, spread: false } },\r
                    { name: 'single parameter - method', func: [({ m(x: any) { } }).m][0], expected: { count: 1, spread: false } },\r
                    { name: 'multiple parameters - lambda', func: [(x: any, y: any, z: any) => { }][0], expected: { count: 3, spread: false } },\r
                    { name: 'multiple parameters - function', func: [function (a: any, b: any, c: any) { }][0], expected: { count: 3, spread: false } },\r
                    { name: 'multiple parameters - method', func: [({ m(x: any, y: any) { } }).m][0], expected: { count: 2, spread: false } },\r
                    { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: { count: 1, spread: true } },\r
                    { name: 'rest only - function', func: [function (...args: any[]) { }][0], expected: { count: 1, spread: true } },\r
                    { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: { count: 1, spread: true } },\r
                    { name: 'params + rest - lambda', func: [(a: any, b: any, ...spread: any[]) => { }][0], expected: { count: 3, spread: true } },\r
                    { name: 'params + rest - function', func: [function (x: any, ...spread: any[]) { }][0], expected: { count: 2, spread: true } },\r
                    { name: 'params + rest - method', func: [({ m(a: any, ...spread: any[]) { } }).m][0], expected: { count: 2, spread: true } },\r
                ];\r
\r
            testCases.forEach(({ name, func, expected }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.params).toEqual(expected);\r
                });\r
            });\r
        });\r
\r
        describe('async modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'async lambda', func: [async () => { }][0] },\r
                { name: 'async lambda with params', func: [async (x: any, y: any) => { }][0] },\r
                { name: 'async function', func: [async function () { }][0] },\r
                { name: 'async function named', func: [async function fetch() { }][0] },\r
                { name: 'async method', func: [({ async m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.async).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('generator modifier', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'generator function', func: [function* () { }][0] },\r
                { name: 'generator function named', func: [function* gen() { }][0] },\r
                { name: 'generator method', func: [({ *m() { } }).m][0] },\r
                { name: 'async generator function', func: [async function* () { }][0] },\r
                { name: 'async generator method', func: [({ async *m() { } }).m][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.generator).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('function forms', () => {\r
            const testCases: Array<{\r
                name: string,\r
                func: Function,\r
                expectedForm: $FunctionInfo['form']\r
            }> = [\r
                    { name: 'lambda no params', func: [() => { }][0], expectedForm: 'lambda' },\r
                    { name: 'lambda single param no parens', func: [(x: any) => x][0], expectedForm: 'lambda' },\r
                    { name: 'lambda multiple params', func: [(x: any, y: any) => { }][0], expectedForm: 'lambda' },\r
                    { name: 'async lambda', func: [async () => { }][0], expectedForm: 'lambda' },\r
                    { name: 'function anonymous', func: [function () { }][0], expectedForm: 'function' },\r
                    { name: 'function named', func: [function foo() { }][0], expectedForm: 'function' },\r
                    { name: 'async function', func: [async function () { }][0], expectedForm: 'function' },\r
                    { name: 'generator function', func: [function* () { }][0], expectedForm: 'function' },\r
                    { name: 'method', func: [({ m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'async method', func: [({ async m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'generator method', func: [({ *m() { } }).m][0], expectedForm: 'method' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedForm: 'getter' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedForm: 'setter' },\r
                    { name: 'class named', func: [class Foo { }][0], expectedForm: 'class' },\r
                    { name: 'class anonymous', func: [class { }][0], expectedForm: 'class' },\r
                ];\r
\r
            testCases.forEach(({ name, func, expectedForm }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.form).toBe(expectedForm);\r
                });\r
            });\r
        });\r
\r
        describe('naming', () => {\r
            describe('named functions', () => {\r
                const testCases: Array<{ name: string, func: Function, expectedName: string }> = [\r
                    { name: 'function', func: [function myFunc() { }][0], expectedName: 'myFunc' },\r
                    { name: 'method', func: [({ myMethod() { } }).myMethod][0], expectedName: 'myMethod' },\r
                    { name: 'generator', func: [function* myGen() { }][0], expectedName: 'myGen' },\r
                    { name: 'class', func: [class MyClass { }][0], expectedName: 'MyClass' },\r
                    { name: 'getter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.get!][0], expectedName: 'prop' },\r
                    { name: 'setter', func: [Object.getOwnPropertyDescriptor(Test.prototype, 'prop')!.set!][0], expectedName: 'prop' },\r
                ];\r
\r
                testCases.forEach(({ name, func, expectedName }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe(expectedName);\r
                    });\r
                });\r
            });\r
\r
            describe('anonymous functions', () => {\r
                const testCases: Array<{ name: string, func: Function }> = [\r
                    { name: 'lambda', func: [() => { }][0] },\r
                    { name: 'function', func: [function () { }][0] },\r
                    { name: 'generator', func: [function* () { }][0] },\r
                    { name: 'class', func: [class { }][0] },\r
                ];\r
\r
                testCases.forEach(({ name, func }) => {\r
                    it(name, () => {\r
                        const result = parseFunctionInfo(func);\r
                        expect(result.name).toBe('');\r
                    });\r
                });\r
            });\r
        });\r
\r
        describe('native functions', () => {\r
            const testCases: Array<{ name: string, func: Function }> = [\r
                { name: 'String constructor', func: [String][0] },\r
                { name: 'Array constructor', func: [Array][0] },\r
                { name: 'Object constructor', func: [Object][0] },\r
                { name: 'Array.prototype.map', func: [Array.prototype.map][0] },\r
                { name: 'String.prototype.slice', func: [String.prototype.slice][0] },\r
                { name: 'Math.pow', func: [Math.pow][0] },\r
                { name: 'bound function', func: [[function () { }][0].bind(null)][0] },\r
            ];\r
\r
            testCases.forEach(({ name, func }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.native).toBe(true);\r
                });\r
            });\r
        });\r
\r
        describe('unknown/unparseable', () => {\r
            const testCases: Array<{ name: string, setup: () => Function }> = [\r
                {\r
                    name: 'custom toString - gibberish',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => 'completely unparseable';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - empty',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '';\r
                        return f;\r
                    }\r
                },\r
                {\r
                    name: 'custom toString - unicode',\r
                    setup: () => {\r
                        const f = [function () { }][0];\r
                        f.toString = () => '∂ƒ∆ø˙©ƒ';\r
                        return f;\r
                    }\r
                },\r
            ];\r
\r
            testCases.forEach(({ name, setup }) => {\r
                it(name, () => {\r
                    const func = setup();\r
                    const result = parseFunctionInfo(func);\r
\r
                    expect(result.form).toBe('unknown');\r
                    expect(result.async).toBeUndefined();\r
                    expect(result.generator).toBeUndefined();\r
                    expect(result.native).toBeUndefined();\r
                    expect(result.params).toEqual({ count: undefined, spread: undefined });\r
                });\r
            });\r
        });\r
\r
        describe('comprehensive combinations', () => {\r
            it('async lambda with rest params', () => {\r
                const result = parseFunctionInfo([async (...args: any[]) => { }][0]);\r
                expect(result.form).toBe('lambda');\r
                expect(result.async).toBe(true);\r
                expect(result.params).toEqual({ count: 1, spread: true });\r
            });\r
\r
            it('async generator with params and rest', () => {\r
                const result = parseFunctionInfo([async function* (a: any, b: any, ...spread: any[]) { }][0]);\r
                expect(result.form).toBe('function');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 3, spread: true });\r
            });\r
\r
            it('async generator method with rest', () => {\r
                const result = parseFunctionInfo([({ async *method(...args: any[]) { } }).method][0]);\r
                expect(result.form).toBe('method');\r
                expect(result.async).toBe(true);\r
                expect(result.generator).toBe(true);\r
                expect(result.params).toEqual({ count: 1, spread: true });\r
            });\r
        });\r
\r
        describe('parameter array structure', () => {\r
            const testCases: Array<{name: string, func: Function, expected: Array<{ spread: boolean }>}> = [\r
                { name: 'no params - lambda', func: [() => { }][0], expected: [] },\r
                { name: 'no params - function', func: [function() { }][0], expected: [] },\r
                { name: 'no params - method', func: [({ m() { } }).m][0], expected: [] },\r
                { name: 'single param - lambda', func: [(x: any) => { }][0], expected: [{ spread: false }] },\r
                { name: 'single param - function', func: [function(x: any) { }][0], expected: [{ spread: false }] },\r
                { name: 'single param - method', func: [({ m(x: any) { } }).m][0], expected: [{ spread: false }] },\r
                { name: 'two params - lambda', func: [(x: any, y: any) => { }][0], expected: [{ spread: false }, { spread: false }] },\r
                { name: 'two params - function', func: [function(x: any, y: any) { }][0], expected: [{ spread: false }, { spread: false }] },\r
                { name: 'two params - method', func: [({ m(x: any, y: any) { } }).m][0], expected: [{ spread: false }, { spread: false }] },\r
                { name: 'three params - lambda', func: [(x: any, y: any, z: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'three params - function', func: [function(x: any, y: any, z: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'three params - method', func: [({ m(x: any, y: any, z: any) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'four params - lambda', func: [(a: any, b: any, c: any, d: any) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'four params - function', func: [function(a: any, b: any, c: any, d: any) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'four params - method', func: [({ m(a: any, b: any, c: any, d: any) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }] },\r
                { name: 'rest only - lambda', func: [(...args: any[]) => { }][0], expected: [{ spread: true }] },\r
                { name: 'rest only - function', func: [function(...args: any[]) { }][0], expected: [{ spread: true }] },\r
                { name: 'rest only - method', func: [({ m(...args: any[]) { } }).m][0], expected: [{ spread: true }] },\r
                { name: 'single param + rest - lambda', func: [(x: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: true }] },\r
                { name: 'single param + rest - function', func: [function(x: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: true }] },\r
                { name: 'single param + rest - method', func: [({ m(x: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: true }] },\r
                { name: 'two params + rest - lambda', func: [(a: any, b: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'two params + rest - function', func: [function(a: any, b: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'two params + rest - method', func: [({ m(a: any, b: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'three params + rest - lambda', func: [(a: any, b: any, c: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'three params + rest - function', func: [function(a: any, b: any, c: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'three params + rest - method', func: [({ m(a: any, b: any, c: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'four params + rest - lambda', func: [(a: any, b: any, c: any, d: any, ...rest: any[]) => { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'four params + rest - function', func: [function(a: any, b: any, c: any, d: any, ...rest: any[]) { }][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
                { name: 'four params + rest - method', func: [({ m(a: any, b: any, c: any, d: any, ...rest: any[]) { } }).m][0], expected: [{ spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: true }] },\r
            ];\r
\r
            testCases.forEach(({ name, func, expected }) => {\r
                it(name, () => {\r
                    const result = parseFunctionInfo(func);\r
                    expect(result.params).toEqual(expected);\r
                });\r
            });\r
        });\r
    });\r
});`}),e(p,{identifier:"untitled-8",type:".txt",children:` ❯ tests/reflection.test.ts (80 tests | 2 failed) 27ms\r
         ✓ async lambda 2ms\r
         ✓ async lambda with params 0ms\r
         ✓ async function 0ms\r
         ✓ async function named 0ms\r
         ✓ async method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
         ✓ generator function 0ms\r
         ✓ generator function named 0ms\r
         ✓ generator method 0ms\r
         ✓ async generator function 0ms\r
         ✓ async generator method 0ms\r
         ✓ lambda no params 0ms\r
         ✓ lambda single param no parens 0ms\r
         ✓ lambda multiple params 0ms\r
         ✓ async lambda 0ms\r
         ✓ function anonymous 0ms\r
         ✓ function named 0ms\r
         ✓ async function 0ms\r
         ✓ generator function 0ms\r
         ✓ method 0ms\r
         ✓ async method 0ms\r
         ✓ generator method 0ms\r
         ✓ getter 0ms\r
         ✓ setter 0ms\r
         ✓ class named 0ms\r
         ✓ class anonymous 0ms\r
           ✓ function 0ms\r
           ✓ method 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
           ✓ getter 0ms\r
           ✓ setter 0ms\r
           ✓ lambda 0ms\r
           ✓ function 0ms\r
           ✓ generator 0ms\r
           ✓ class 0ms\r
         ✓ String constructor 0ms\r
         ✓ Array constructor 0ms\r
         ✓ Object constructor 0ms\r
         ✓ Array.prototype.map 0ms\r
         ✓ String.prototype.slice 0ms\r
         ✓ Math.pow 0ms\r
         ✓ bound function 0ms\r
         ✓ custom toString - gibberish 2ms\r
         ✓ custom toString - empty 0ms\r
         ✓ custom toString - unicode 0ms\r
         × async lambda with rest params 8ms\r
         ✓ async generator with params and rest 1ms\r
         × async generator method with rest 1ms\r
         ✓ no params - lambda 0ms\r
         ✓ no params - function 0ms\r
         ✓ no params - method 0ms\r
         ✓ single param - lambda 0ms\r
         ✓ single param - function 0ms\r
         ✓ single param - method 0ms\r
         ✓ two params - lambda 0ms\r
         ✓ two params - function 0ms\r
         ✓ two params - method 0ms\r
         ✓ three params - lambda 0ms\r
         ✓ three params - function 0ms\r
         ✓ three params - method 0ms\r
         ✓ four params - lambda 0ms\r
         ✓ four params - function 0ms\r
         ✓ four params - method 0ms\r
         ✓ rest only - lambda 0ms\r
         ✓ rest only - function 0ms\r
         ✓ rest only - method 0ms\r
         ✓ single param + rest - lambda 0ms\r
         ✓ single param + rest - function 0ms\r
         ✓ single param + rest - method 0ms\r
         ✓ two params + rest - lambda 0ms\r
         ✓ two params + rest - function 0ms\r
         ✓ two params + rest - method 0ms\r
         ✓ three params + rest - lambda 0ms\r
         ✓ three params + rest - function 0ms\r
         ✓ three params + rest - method 0ms\r
         ✓ four params + rest - lambda 0ms\r
         ✓ four params + rest - function 0ms\r
         ✓ four params + rest - method 0ms\r
 ✓ tests/particle.test.ts (17 tests) 12ms\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 10 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Core Literature & References > should handle different value types\r
AssertionError: expected null to be [Function handler] // Object.is equality\r
\r
- Expected:\r
[Function handler]\r
\r
+ Received:\r
null\r
\r
 ❯ tests/catalogue.test.ts:65:36\r
     63|             $lib.$index(nil, null);\r
     64| \r
     65|             expect($lib.$find(fn)).toBe(handler);\r
       |                                    ^\r
     66|             expect($lib.$find(num)).toBe(42);\r
     67|             expect($lib.$find(nil)).toBe(null);\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $new() - Inheritance Through Topics > should create inheritance chains\r
AssertionError: expected 3 to be 1 // Object.is equality\r
\r
- Expected\r
+ Received\r
\r
- 1\r
+ 3\r
\r
 ❯ tests/catalogue.test.ts:130:37\r
    128| \r
    129|             // Bottom sees all\r
    130|             expect(bottom.$find(a)).toBe(1);\r
       |                                     ^\r
    131|             expect(bottom.$find(b)).toBe(2);\r
    132|             expect(bottom.$find(c)).toBe(3);\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $including() - Multiple Topics > should inherit from multiple catalogues in order\r
AssertionError: expected 'from-1' to be 'from-2' // Object.is equality\r
\r
Expected: "from-2"\r
Received: "from-1"\r
\r
 ❯ tests/catalogue.test.ts:154:47\r
    152| \r
    153|             expect(combined.$find($rep('a'))).toBe('from-1');\r
    154|             expect(combined.$find($rep('b'))).toBe('from-2');\r
       |                                               ^\r
    155|         });\r
    156| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $including() - Multiple Topics > should include parent as last topic\r
AssertionError: expected 'other-value' to be 'parent-value' // Object.is equality\r
\r
Expected: "parent-value"\r
Received: "other-value"\r
\r
 ❯ tests/catalogue.test.ts:177:49\r
    175| \r
    176|             expect(child.$find($rep('other'))).toBe('other-value');\r
    177|             expect(child.$find($rep('parent'))).toBe('parent-value');\r
       |                                                 ^\r
    178|         });\r
    179| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $deref() - Memory Management > should remove specific reference\r
AssertionError: expected undefined to be 'staying' // Object.is equality\r
\r
- Expected:\r
"staying"\r
\r
+ Received:\r
undefined\r
\r
 ❯ tests/catalogue.test.ts:257:38\r
    255|             $lib.$deref(remove);\r
    256| \r
    257|             expect($lib.$find(keep)).toBe('staying');\r
       |                                      ^\r
    258|             expect($lib.$find(remove)).toBeUndefined();\r
    259|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > $deref() - Memory Management > should remove subject from topics\r
AssertionError: expected 'value2' to be undefined\r
\r
- Expected:\r
undefined\r
\r
+ Received:\r
"value2"\r
\r
 ❯ tests/catalogue.test.ts:273:45\r
    271|             child.$deref(topic1);\r
    272| \r
    273|             expect(child.$find($rep('t1'))).toBeUndefined();\r
       |                                             ^\r
    274|             expect(child.$find($rep('t2'))).toBe('value2');\r
    275|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Privacy Guarantees > should maintain isolation through export boundaries\r
AssertionError: expected 'visible' to be 'hidden' // Object.is equality\r
\r
Expected: "hidden"\r
Received: "visible"\r
\r
 ❯ tests/catalogue.test.ts:329:53\r
    327| \r
    328|             // Can see inherited data\r
    329|             expect(catalogue.$find($rep('secret'))).toBe('hidden');\r
       |                                                     ^\r
    330|             expect(catalogue.$find($rep('public'))).toBe('visible');\r
    331| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/10]⎯\r
 FAIL  tests/catalogue.test.ts > $Catalogue > Complex Scenarios > should handle deep inheritance with multiple branches\r
AssertionError: expected 'l' to be 'r' // Object.is equality\r
\r
Expected: "r"\r
Received: "l"\r
\r
 ❯ tests/catalogue.test.ts:366:50\r
    364| \r
    365|             // Combined sees left, right, and root\r
    366|             expect(combined.$find($rep('root'))).toBe('r');\r
       |                                                  ^\r
    367|             expect(combined.$find($rep('left'))).toBe('l');\r
    368|             expect(combined.$find($rep('right'))).toBe('r');\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/10]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async lambda with rest params\r
AssertionError: expected [ { spread: true } ] to deeply equal { spread: true }\r
\r
- Expected:\r
{\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:180:39\r
    178|                 expect(result.form).toBe('lambda');\r
    179|                 expect(result.async).toBe(true);\r
    180|                 expect(result.params).toEqual({ spread: true });\r
       |                                       ^\r
    181|             });\r
    182| \r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/10]⎯\r
 FAIL  tests/reflection.test.ts > $Reflection > parseFunctionInfo > comprehensive combinations > async generator method with rest\r
AssertionError: expected [ { spread: true } ] to deeply equal { spread: true }\r
\r
- Expected:\r
{\r
  "spread": true,\r
}\r
\r
+ Received:\r
[\r
  {\r
    "spread": true,\r
  },\r
]\r
\r
 ❯ tests/reflection.test.ts:196:39\r
    194|                 expect(result.async).toBe(true);\r
    195|                 expect(result.generator).toBe(true);\r
    196|                 expect(result.params).toEqual({ spread: true });\r
       |                                       ^\r
    197|             });\r
    198|         });\r
\r
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/10]⎯\r
\r
 Test Files  2 failed | 1 passed (3)\r
      Tests  10 failed | 118 passed (128)\r
   Start at  15:18:25\r
   Duration  967ms (transform 334ms, setup 0ms, collect 459ms, tests 65ms, environment 1.44s, prepare 56ms)\r
\r
 FAIL  Tests failed. Watching for file changes...\r
       press h to show help, press q to quit`})]}),"November620252"),ee=T(F),ce=m(()=>r(ee,{children:[_(),V(),K(),Q(),X()]}),"book");export{ce as book};
