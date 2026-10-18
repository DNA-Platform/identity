import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Process Children Method v9 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}type $ConstructorArgument = any | any[];

private __processChildren(props: any): { props: any, args: $ConstructorArgument[] } {
    if (!props.children) return { props, args: [] };
    
    const children = React.Children.toArray(props.children);
    const newChildren: ReactNode[] = [];
    const args: $ConstructorArgument[] = [];
    
    let group: any[] | null = null;
    let groupType: any = null;
    
    const flush = () => {
        if (group) args.push(group.length === 1 ? group[0] : group);
        group = null;
        groupType = null;
    };
    
    for (const child of children) {
        if (typeof child !== 'object' || !React.isValidElement(child)) {
            flush();
            args.push(child);
            newChildren.push(child);
            continue;
        }
        
        const type = child.type as any;
        const template = type?.template;
        const isChemical = template instanceof $Chemical;
        
        if (!isChemical) {
            flush();
            args.push(child.props);
            newChildren.push(child);
            continue;
        }
        
        if (type === groupType) {
            group!.push(template);
        } else {
            flush();
            group = [template];
            groupType = type;
        }
        
        const dependency = new $Dependency(template.cid, this, this.molecule, 'parent', 
            group.length === 1 ? 'one' : 'many', group.length - 1);
        
        newChildren.push(React.cloneElement(child, {
            ...child.props,
            [$Chemical.dependencyProp]: dependency
        }));
    }
    
    flush();
    return { props: { ...props, children: newChildren }, args };
}`}
        </CodeBox>
    </Chapter>
);
