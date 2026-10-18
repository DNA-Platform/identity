import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Process Children Method v13 ]]</Title>
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
    
    for (const child of children) {
        if (Array.isArray(child)) {
            const arrayArgs = child.map(c => this.__processChild(c, newChildren));
            args.push(arrayArgs);
        } else {
            args.push(this.__processChild(child, newChildren));
        }
    }
    
    return { props: { ...props, children: newChildren }, args };
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
        ...child.props,
        [$Chemical.dependencyProp]: dependency
    });
    
    newChildren.push(newChild);
    return [template, dependency, template];
}`}
        </CodeBox>
    </Chapter>
);
