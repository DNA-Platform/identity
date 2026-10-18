import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Process Children - Final Version v4 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}type $Child = [child: any, dependency: $Dependency, template?: $Chemical];
type $ConstructorArgument = ($Child | $Child[])[];

private __processChildren(props: any): { props: any, args: $ConstructorArgument } {
    if (!props.children) return { props, args: [] };
    
    const children = React.Children.toArray(props.children);
    const newChildren: ReactNode[] = [];
    const args: $ConstructorArgument = [];
    
    // Parse constructor signature
    const constructorName = this.getType().name;
    const constructor = (this as any)[constructorName];
    const { paramCount, hasRest } = this.__parseConstructor(constructor);
    
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const isRest = hasRest && i >= paramCount - 1;
        
        if (Array.isArray(child)) {
            const arrayArgs = child.map(c => this.__processChild(c, newChildren));
            if (isRest) {
                if (!args[paramCount - 1]) args[paramCount - 1] = [];
                (args[paramCount - 1] as $Child[]).push(...arrayArgs);
            } else {
                args.push(arrayArgs);
            }
        } else {
            const childArg = this.__processChild(child, newChildren);
            if (isRest) {
                if (!args[paramCount - 1]) args[paramCount - 1] = [];
                (args[paramCount - 1] as $Child[]).push(childArg);
            } else {
                args.push(childArg);
            }
        }
    }
    
    return { props: { ...props, children: newChildren }, args };
}

private __parseConstructor(fn: Function): { paramCount: number, hasRest: boolean } {
    if (!fn) return { paramCount: 0, hasRest: false };
    
    const fnString = fn.toString();
    const match = fnString.match(/\\(([^)]*)\\)/);
    if (!match) return { paramCount: 0, hasRest: false };
    
    const params = match[1].split(',').map(p => p.trim()).filter(p => p);
    const hasRest = params.length > 0 && params[params.length - 1].startsWith('...');
    
    return { paramCount: params.length, hasRest };
}

// Use explicit metadata - set this when defining constructors
// Example: $Book.__constructorMeta = { paramCount: 4, hasRest: true };

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
