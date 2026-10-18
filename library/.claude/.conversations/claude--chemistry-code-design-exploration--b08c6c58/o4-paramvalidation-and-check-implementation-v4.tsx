import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ $ParamValidation and $check Implementation v4 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $ParamValidation {
    paramIndex = 0;
    paramCount = -1;
    paramTypes: string[] = [];
    paramErrors: string[] = [];
    chemical: $Chemical | null = null;
    validated = false;

    reset() {
        this.paramIndex = 0;
        this.paramCount = -1;
        this.paramTypes = [];
        this.paramErrors = [];
        this.chemical = null;
        this.validated = false;
    }

    eval() {
        if (this.validated) return;
        this.validated = true;
        
        if (this.paramErrors.length === 0) {
            this.reset();
            return;
        }
        
        const className = this.chemical ? this.chemical.constructor.name : 'Unknown';
        
        let message = \`\\n$Chemistry Constructor Validation Failed: \${className}\\n\\n\`;
        message += \`Expected signature:\\n\`;
        message += \`  \${className}(\\n\`;
        this.paramTypes.forEach((type, i) => {
            message += \`    \${type}\${i < this.paramTypes.length - 1 ? ',' : ''}\\n\`;
        });
        message += \`  )\\n\\n\`;
        message += this.paramErrors.join('\\n');
        
        this.reset();
        throw new Error(message);
    }

    static describeType(type: any): string {
        if (type === 'any') return 'any';
        if (type === undefined) return 'undefined';
        if (type === null) return 'null';
        if (type === String) return 'string';
        if (type === Number) return 'number';
        if (type === Boolean) return 'boolean';
        if (type === Function) return 'function';
        if (type === Object) return 'object';
        if (typeof type === 'string') return type;
        if (type === $Function) return 'Function';
        if (type?.prototype instanceof $Chemical) return type.name;
        if (typeof type === 'function') return type.name;
        return 'unknown';
    }

    static describeActual(arg: any): string {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (Array.isArray(arg)) return \`array(\${arg.length})\`;
        if (arg instanceof $Chemical) return arg.constructor.name;
        if (arg instanceof $$Function) return \`Function<\${arg.Function?.name || 'unknown'}>\`;
        if (React.isValidElement(arg)) return 'ReactElement';
        return typeof arg;
    }

    static isPrimitiveType(type: string): boolean {
        return ['string', 'number', 'boolean', 'object', 'function', 'undefined', 'bigint', 'symbol'].includes(type);
    }

    static isValidReactNode(arg: any): boolean {
        if (arg === null || arg === undefined) return true;
        if (typeof arg === 'string' || typeof arg === 'number') return true;
        if (typeof arg === 'boolean' || typeof arg === 'bigint') return true;
        if (arg instanceof $Chemical) return true;
        if (arg instanceof $$Function) return true;
        if (React.isValidElement(arg)) {
            // We accept most React elements, but the processElement method 
            // in BondOrchestrator will handle specific rejections
            return true;
        }
        if (Array.isArray(arg)) return arg.every($ParamValidation.isValidReactNode);
        return false;
    }

    static validateArgument(arg: any, type: any): boolean {
        if (Array.isArray(type)) {
            if (!Array.isArray(arg)) return false;
            
            const elementType = type[0];
            if (elementType === 'any') {
                return arg.every(el => $ParamValidation.isValidReactNode(el));
            } else if (elementType === String || elementType === Number || elementType === Boolean || 
                      elementType === Function || elementType === Object) {
                return arg.every(el => $ParamValidation.validatePrimitive(el, elementType));
            } else if (typeof elementType === 'string') {
                if ($ParamValidation.isPrimitiveType(elementType)) {
                    return arg.every(el => typeof el === elementType);
                } else {
                    return arg.every(el => typeof el === 'object' && el !== null);
                }
            } else if (elementType === $Function) {
                return arg.every(el => el instanceof $Function);
            } else if (elementType?.prototype instanceof $Chemical) {
                return arg.every(el => el instanceof elementType);
            } else if (typeof elementType === 'function') {
                return arg.every(el => el instanceof $Function && el.Function === elementType);
            }
        } else if (type === 'any') {
            return $ParamValidation.isValidReactNode(arg);
        } else if (type === undefined) {
            return arg === undefined;
        } else if (type === null) {
            return arg === null;
        } else if (type === String || type === Number || type === Boolean || 
                   type === Function || type === Object) {
            return $ParamValidation.validatePrimitive(arg, type);
        } else if (typeof type === 'string') {
            if ($ParamValidation.isPrimitiveType(type)) {
                return typeof arg === type;
            } else {
                return typeof arg === 'object' && arg !== null;
            }
        } else if (type === $Function) {
            return arg instanceof $Function;
        } else if (type?.prototype instanceof $Chemical) {
            return arg instanceof type;
        } else if (typeof type === 'function') {
            return arg instanceof $Function && arg.Function === type;
        }
        return false;
    }
    
    static validatePrimitive(arg: any, type: any): boolean {
        if (type === String) return typeof arg === 'string';
        if (type === Number) return typeof arg === 'number';
        if (type === Boolean) return typeof arg === 'boolean';
        if (type === Function) return typeof arg === 'function';
        if (type === Object) return typeof arg === 'object' && arg !== null;
        return false;
    }
}

export function $check(arg: any, ...types: ($Constructor<$Chemical> | React.FC | string | 'any' | [$Constructor<$Chemical> | React.FC | string | 'any'])[]): void {
    const paramNumber = paramValidation.paramIndex++;
    const typeDescription = types.map(type => {
        if (Array.isArray(type))
            return \`\${$ParamValidation.describeType(type[0])}[]\`;
        return $ParamValidation.describeType(type);
    }).join(' | ');
    
    paramValidation.paramTypes[paramNumber] = typeDescription;
    let valid = false;
    
    for (const type of types) {
        if ($ParamValidation.validateArgument(arg, type)) {
            valid = true;
            break;
        }
    }
    
    if (!valid)
        paramValidation.paramErrors.push(
            \`Parameter \${paramNumber + 1}: expected \${typeDescription}, received \${$ParamValidation.describeActual(arg)}\`
        );
    
    // Auto-evaluate on last parameter
    if (paramValidation.paramCount !== -1 && 
        paramValidation.paramIndex === paramValidation.paramCount)
        paramValidation.eval();
}`}
        </CodeBox>
    </Chapter>
);
