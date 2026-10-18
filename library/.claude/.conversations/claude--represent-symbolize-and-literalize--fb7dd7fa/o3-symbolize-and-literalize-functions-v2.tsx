import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Symbolize and Literalize Functions v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export class $Represent {
    static symbolize(value: any, mode: 'safe' | 'fast' = 'safe'): string {
        return mode === 'fast' 
            ? JSON.stringify(value, $Represent.replacer)
            : $Represent.safe(value);
    }
    
    static literalize<T = any>(symbolization: string): T {
        const parsed = JSON.parse(symbolization);
        
        // Check for ref structure [unique, refs]
        if (Array.isArray(parsed) && parsed.length === 2 && typeof parsed[0] === 'string') {
            const [unique, refs] = parsed;
            const resolved = new Map<string, any>();
            
            // Create shells
            for (const [key, val] of Object.entries(refs)) {
                resolved.set(key, Array.isArray(val) ? [] : typeof val === 'object' ? {} : val);
            }
            
            // Fill shells
            for (const [key, val] of Object.entries(refs)) {
                const target = resolved.get(key)!;
                if (Array.isArray(val)) {
                    for (let i = 0; i < val.length; i++)
                        target[i] = $Represent.resolve(val[i], unique, resolved);
                } else if (typeof val === 'object' && val !== null) {
                    for (const k in val)
                        target[k] = $Represent.resolve(val[k], unique, resolved);
                }
            }
            
            // Return last ref (root)
            const keys = Object.keys(refs);
            return resolved.get(keys[keys.length - 1]);
        }
        
        return $Represent.processLiteral(parsed);
    }
    
    private static safe(value: any): string {
        const stack: any[] = [];
        const seen = new Map<any, string>();
        let unique: string | undefined;
        let refs: Record<string, any> | undefined;
        let counter = 0;
        
        const processed = process(value);
        
        return refs ? JSON.stringify([unique, refs]) : JSON.stringify(processed);
        
        function process(val: any): any {
            if (val === null || typeof val !== 'object') 
                return typeof val === 'function' ? undefined : val;
            
            // Chemical reference
            if (val instanceof $Chemical) 
                return \`\${val.__getType().name}[\${val[$cid]}]\`;
            
            if (val?.constructor?.name === 'Proxy') return '[Proxy]';
            
            // Check if seen (already has ref)
            const existing = seen.get(val);
            if (existing) return existing;
            
            // Check if circular
            for (const obj of stack) {
                if (obj === val) {
                    // First circular found - init refs
                    if (!refs) {
                        unique = \`[\${Date.now()},\${Math.random()}]\`;
                        refs = {};
                    }
                    const ref = \`\${unique}[\${counter++}]\`;
                    seen.set(val, ref);
                    refs[ref] = null; // Will be filled later
                    return ref;
                }
            }
            
            stack.push(val);
            
            const result = $Represent.iterate(val, v => process(v));
            
            stack.pop();
            
            // Store ref if contains refs
            if (refs && $Represent.containsRef(result, unique!)) {
                const ref = \`\${unique}[\${counter++}]\`;
                seen.set(val, ref);
                refs[ref] = result;
                return ref;
            }
            
            return result;
        }
    }
    
    private static iterate(val: any, fn: (item: any) => any): any {
        if (Array.isArray(val)) return val.map(fn);
        const res: any = {};
        for (const k in val) {
            const v = fn(val[k]);
            if (v !== undefined) res[k] = v;
        }
        return res;
    }
    
    private static containsRef(obj: any, unique: string): boolean {
        if (typeof obj === 'string' && obj.startsWith(unique)) return true;
        if (Array.isArray(obj)) return obj.some(v => $Represent.containsRef(v, unique));
        if (typeof obj === 'object' && obj !== null) {
            for (const k in obj) 
                if ($Represent.containsRef(obj[k], unique)) return true;
        }
        return false;
    }
    
    private static resolve(val: any, unique: string, resolved: Map<string, any>): any {
        return typeof val === 'string' && val.startsWith(unique) 
            ? resolved.get(val)
            : $Represent.processLiteral(val);
    }
    
    private static processLiteral(val: any): any {
        if (val === null || typeof val !== 'object') 
            return typeof val === 'string' ? $Represent.getChemical(val) : val;
        
        return $Represent.iterate(val, v => $Represent.processLiteral(v));
    }
    
    private static getChemical(str: string): any {
        const match = str.match(/^(\\w+)\\[(\\d+)\\]$/);
        if (!match) return str;
        const cid = parseInt(match[2]);
        return $chemicalRegistry.get(cid) || str;
    }
    
    private static replacer(key: string, val: any): any {
        if (key === '') return val;
        if (val instanceof $Chemical) return \`\${val.__getType().name}[\${val[$cid]}]\`;
        if (typeof val === 'function') return undefined;
        if (val?.constructor?.name === 'Proxy') return '[Proxy]';
        return val;
    }
}`}
        </CodeBox>
    </Chapter>
);
