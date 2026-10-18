import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Process Children - Elegant Version v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}type $Child = [child: any, dependency: $Dependency, template?: $Chemical];
type $ConstructorArgument = ($Child | $Child[])[];

private __processChildren(props: any): { props: any, args: $ConstructorArgument } {
    if (!props.children) return { props, args: [] };
    
    const children = React.Children.toArray(props.children);
    const newChildren: ReactNode[] = [];
    const rawArgs: $Child[] = [];
    
    // Process all children into raw args
    for (const child of children) {
        if (Array.isArray(child)) {
            rawArgs.push(...child.map(c => this.__processChild(c, newChildren)));
        } else {
            rawArgs.push(this.__processChild(child, newChildren));
        }
    }
    
    // Parse constructor and arrange args
    const constructorName = this.template.getType().name;
    const constructor = (this as any)[constructorName] || (() => {});
    const { paramCount, hasRest } = this.__parseConstructor(constructor);
    
    const args: $ConstructorArgument = [];
    
    // Fill regular parameters
    for (let i = 0; i < paramCount - (hasRest ? 1 : 0); i++) {
        args[i] = rawArgs[i];
    }
    
    // Handle rest parameter
    if (hasRest) {
        const restStart = paramCount - 1;
        args[restStart] = rawArgs.slice(restStart);
    }
    
    // Ensure we have the right number of slots
    while (args.length < paramCount + (hasRest ? 0 : 1)) {
        args.push(undefined as any);
    }
    
    return { props: { ...props, children: newChildren }, args };
}

private __parseConstructor(fn: Function): { paramCount: number, hasRest: boolean } {
    const fnString = fn.toString();
    const match = fnString.match(/\\(([^)]*)\\)/);
    if (!match) return { paramCount: 0, hasRest: false };
    
    const params = match[1].split(',').map(p => p.trim()).filter(p => p);
    const hasRest = params.length > 0 && params[params.length - 1].startsWith('...');
    
    return { paramCount: params.length, hasRest };
}

private __processChild(child: any, newChildren: ReactNode[]): $Child {
    if (typeof child !== 'object' || !React.isValidElement(child)) {
        newChildren.push(child);
        return [child, null as any];
    }
    
    const type = child.type as any;
    const template = type?.template;
    
    if (!(template instanceof $Chemical)) {
        newChildren.push(child);
        return [child.props, null as any];
    }
    
    const cid = $Chemical.getNextCid();
    const dependency = new $Dependency(cid, this, this.molecule, 'parent', 'one');
    const newChild = React.cloneElement(child, {
        ...(child.props as Record<string, any>),
        [$Chemical.dependencyProp]: dependency
    });
    
    newChildren.push(newChild);
    return [template, dependency, template];
}`}
        </CodeBox>
    </Chapter>
);
