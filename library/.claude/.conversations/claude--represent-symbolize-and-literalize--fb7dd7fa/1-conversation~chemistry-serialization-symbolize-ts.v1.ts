import { $Chemical } from './chemistry';

// Symbols and constants
const $cid = Symbol("$Chemical.cid");
const $reactive = Symbol("$Chemical.reactive");
const $chemicalRegistry = new Map<number, $Chemical>();

// Serialization markers
const MARK = '__symbolize__';
const CHEM = '$$';
const REF = '$ref$';

export function symbolize(value: any, mode: 'safe' | 'fast' = 'safe'): string {
    if (mode === 'fast') return JSON.stringify(value, replacer);
    
    const stack: any[] = [];
    const seen = new WeakMap<any, string>();
    const chems = new WeakMap<$Chemical, boolean>();
    let unique: string;
    let refs: Record<string, any>;
    let counter = 0;
    
    const processed = process(value);
    
    // Restore reactivity
    for (const [chem, was] of chems) chem[$reactive] = was;
    
    // Return wrapped if we created refs, otherwise plain
    return refs ? JSON.stringify({ [MARK]: unique, refs }) : JSON.stringify(processed);
    
    function process(val: any): any {
        if (val === null || typeof val !== 'object') 
            return typeof val === 'function' ? undefined : val;
        
        // Chemical reference
        if (val instanceof $Chemical) {
            if (!chems.has(val)) {
                chems.set(val, val[$reactive]);
                val[$reactive] = false;
            }
            return `${CHEM}${val.constructor.name}[${val[$cid]}]`;
        }
        
        if (val?.constructor?.name === 'Proxy') return '[Proxy]';
        
        // Check if seen (for refs)
        if (seen.has(val)) return seen.get(val)!;
        
        // Check if circular
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
                // First circular found - init refs
                if (!refs) {
                    unique = `[${Date.now()},${Math.random()}]`;
                    refs = {};
                }
                const ref = `${REF}${unique}[${counter++}]`;
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
            const ref = `${REF}${unique}[${counter++}]`;
            seen.set(val, ref);
            refs[ref] = result;
            return ref;
        }
        
        return result;
    }
    
    function hasRef(obj: any): boolean {
        if (Array.isArray(obj)) 
            return obj.some(v => typeof v === 'string' && v.startsWith(REF));
        for (const k in obj) 
            if (typeof obj[k] === 'string' && obj[k].startsWith(REF)) return true;
        return false;
    }
}

export function literalize(str: string): any {
    const parsed = JSON.parse(str);
    
    // Check for ref structure
    if (parsed?.[MARK]) {
        const refs = parsed.refs;
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
                    target[i] = resolve(val[i]);
            } else if (typeof val === 'object') {
                for (const k in val)
                    target[k] = resolve(val[k]);
            }
        }
        
        // Return last ref (root)
        return resolved.get(Object.keys(refs).pop()!);
    }
    
    return processLiteral(parsed);
    
    function resolve(val: any): any {
        if (typeof val === 'string') {
            if (val.startsWith(REF)) return resolved.get(val);
            if (val.startsWith(CHEM)) return getChemical(val);
        }
        return processLiteral(val);
    }
}

function processLiteral(val: any): any {
    if (val === null || typeof val !== 'object') {
        if (typeof val === 'string' && val.startsWith(CHEM))
            return getChemical(val);
        return val;
    }
    
    if (Array.isArray(val)) return val.map(processLiteral);
    
    const result: any = {};
    for (const k in val) result[k] = processLiteral(val[k]);
    return result;
}

function getChemical(str: string): $Chemical | undefined {
    const match = str.match(/^\$\$(\w+)\[(\d+)\]$/);
    return match ? $chemicalRegistry.get(parseInt(match[2])) : undefined;
}

function replacer(key: string, val: any): any {
    if (key === '') return val;
    if (val instanceof $Chemical) return `${CHEM}${val.constructor.name}[${val[$cid]}]`;
    if (typeof val === 'function') return undefined;
    if (val?.constructor?.name === 'Proxy') return '[Proxy]';
    return val;
}