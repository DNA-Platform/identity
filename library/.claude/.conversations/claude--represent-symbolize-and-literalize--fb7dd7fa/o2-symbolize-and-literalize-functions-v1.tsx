import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Symbolize and Literalize Functions v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}function symbolize(value: any, mode: 'safe' | 'fast' = 'safe'): string {
    if (mode === 'fast') return JSON.stringify(value, replacer);
    
    const stack: any[] = [];
    const seen = new WeakMap<any, string>();
    const chems = new WeakMap<$Chemical, boolean>();
    let unique: string | undefined;
    let refs: Record<string, any> | undefined;
    let counter = 0;
    
    const processed = process(value);
    
    // Restore reactivity
    for (const [chem, was] of chems) chem[$reactive] = was;
    
    // Return wrapped if we created refs, otherwise plain
    return refs ? JSON.stringify([unique, refs]) : JSON.stringify(processed);
    
    function process(val: any): any {
        if (val === null || typeof val !== 'object') 
            return typeof val === 'function' ? undefined : val;
        
        // Chemical reference
        if (val instanceof $Chemical) {
            if (!chems.has(val)) {
                chems.set(val, val[$reactive]);
                val[$reactive] = false;
            }
            return \`\${val.__getType().name}[\${val[$cid]}]\`;
        }
        
        if (val?.constructor?.name === 'Proxy') return '[Proxy]';
        
        // Check if seen (for refs)
        if (seen.has(val)) return seen.get(val)!;
        
        // Check if circular
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
                // First circular found - init refs
                if (!refs) {
                    unique = \`[\${Date.now()},\${Math.random()}]\`;
                    refs = {};
                }
                const ref = \`\${unique}[\${counter++}]\`;
                seen.set(val, ref);
                refs[ref] = null; // Placeholder
                return ref;
            }
        }
        
        stack.push(val);
        
        const result: any = Array.isArray(val) ? [] : {};
        
        if (Array.isArray(val)) {
            for (let i = 0; i < val.length; i++) 
                result[i] = process(val[i]);
        } else {
            for (const k in val) {
                const v = process(val[k]);
                if (v !== undefined) result[k] = v;
            }
        }
        
        stack.pop();
        
        // Store ref if contains refs
        if (refs && hasRef(result)) {
            const ref = \`\${unique}[\${counter++}]\`;
            seen.set(val, ref);
            refs[ref] = result;
            return ref;
        }
        
        return result;
    }
    
    function hasRef(obj: any): boolean {
        if (typeof obj === 'string' && unique && obj.startsWith(unique)) return true;
        if (Array.isArray(obj)) return obj.some(hasRef);
        if (typeof obj === 'object' && obj !== null) {
            for (const k in obj) if (hasRef(obj[k])) return true;
        }
        return false;
    }
}

function literalize<T = any>(symbolization: string): T {
    const parsed = JSON.parse(symbolization);
    
    // Check for ref structure [unique, refs]
    if (Array.isArray(parsed) && parsed.length === 2 && typeof parsed[0] === 'string') {
        const [unique, refs] = parsed;
        const resolved = new Map<string, any>();
        
        // Create shells
        for (const [key, val] of Object.entries(refs)) {
            if (val !== null) 
                resolved.set(key, Array.isArray(val) ? [] : typeof val === 'object' ? {} : val);
        }
        
        // Fill shells
        for (const [key, val] of Object.entries(refs)) {
            if (val === null) continue;
            const target = resolved.get(key)!;
            
            if (Array.isArray(val)) {
                for (let i = 0; i < val.length; i++)
                    target[i] = resolve(val[i], unique, resolved);
            } else if (typeof val === 'object') {
                for (const k in val)
                    target[k] = resolve(val[k], unique, resolved);
            }
        }
        
        // Return last ref (root)
        const keys = Object.keys(refs);
        const rootKey = keys[keys.length - 1];
        return resolved.get(rootKey);
    }
    
    return processLiteral(parsed);
    
    function resolve(val: any, unique: string, resolved: Map<string, any>): any {
        if (typeof val === 'string') {
            if (val.startsWith(unique)) return resolved.get(val);
            return getChemicalOrValue(val);
        }
        return processLiteral(val);
    }
}

function processLiteral(val: any): any {
    if (val === null || typeof val !== 'object') {
        if (typeof val === 'string') return getChemicalOrValue(val);
        return val;
    }
    
    if (Array.isArray(val)) return val.map(processLiteral);
    
    const result: any = {};
    for (const k in val) result[k] = processLiteral(val[k]);
    return result;
}

function getChemicalOrValue(str: string): any {
    // Match Chemical pattern: ClassName[123]
    const match = str.match(/^(\\w+)\\[(\\d+)\\]$/);
    if (match) {
        const cid = parseInt(match[2]);
        return $chemicalRegistry.get(cid) || str;
    }
    return str;
}

function replacer(key: string, val: any): any {
    if (key === '') return val;
    if (val instanceof $Chemical) return \`\${val.__getType().name}[\${val[$cid]}]\`;
    if (typeof val === 'function') return undefined;
    if (val?.constructor?.name === 'Proxy') return '[Proxy]';
    return val;
}`}
        </CodeBox>
    </Chapter>
);
