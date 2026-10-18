import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Process Children - Clean Version v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}type $Child = [child: any, dependency: $Dependency, template?: $Chemical];
type $ConstructorArgument = ($Child | $Child[])[];

private __processChildren(props: any, context: React.Context<$Molecule>): { props: any, args: $ConstructorArgument } {
    if (!props.children) return { props, args: [] };
    
    const children = React.Children.toArray(props.children);
    const newChildren: ReactNode[] = [];
    const rawArgs: $Child[] = [];
    
    for (const child of children) {
        if (Array.isArray(child)) 
            rawArgs.push(...child.map(c => this.__processChild(c, newChildren, context)));
        else 
            rawArgs.push(this.__processChild(child, newChildren, context));
    }
    
    const constructorName = this.template.getType().name;
    const constructor = (this as any)[constructorName] || (() => {});
    const { paramCount, hasRest } = this.__parseConstructor(constructor);
    
    const args: $ConstructorArgument = [];
    const regularParams = paramCount - (hasRest ? 1 : 0);
    
    for (let i = 0; i < regularParams; i++) args[i] = rawArgs[i];
    if (hasRest) (args as any)[regularParams] = rawArgs.slice(regularParams);
    while (args.length < paramCount + (hasRest ? 0 : 1)) args.push(undefined as any);
    
    return { props: { ...props, children: newChildren }, args };
}

private __processChild(child: any, newChildren: ReactNode[], context: React.Context<$Molecule>): $Child {
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
    const dependency = new $Dependency(cid, this, context, 'parent', 'one');
    const newChild = React.cloneElement(child, {
        ...(child.props as Record<string, any>),
        [$Chemical.dependencyProp]: dependency
    });
    
    newChildren.push(newChild);
    return [template, dependency, template];
}

private __parseConstructor(fn: Function): { paramCount: number, hasRest: boolean } {
    const match = fn.toString().match(/\\(([^)]*)\\)/);
    if (!match) return { paramCount: 0, hasRest: false };
    
    const params = match[1].split(',').map(p => p.trim()).filter(p => p);
    const hasRest = params.length > 0 && params[params.length - 1].startsWith('...');
    
    return { paramCount: params.length, hasRest };
}`}
        </CodeBox>
    </Chapter>
);
