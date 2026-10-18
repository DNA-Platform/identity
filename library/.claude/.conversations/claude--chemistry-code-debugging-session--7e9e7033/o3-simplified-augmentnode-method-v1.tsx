import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simplified augmentNode method v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Simplified augmentNode method for $BondOrchestrator class
// Remove the auto-key handling that's causing issues

private augmentNode(node: ReactNode): ReactNode {
    if (!node) return node;
    
    if (React.isValidElement(node)) {
        // Check if we've already rendered this
        const rendered = this._rendered.get(node.type as Function);
        if (rendered) return rendered;
        
        const children = (node.props as any)?.children;
        
        // Only recurse if there are children
        if (children) {
            const augmented = React.Children.map(children, child => this.augmentNode(child));
            if (augmented !== children) {
                return React.cloneElement(node, {}, augmented);
            }
        }
        
        return node;
    }
    
    if (Array.isArray(node)) {
        let changed = false;
        const augmented = node.map(child => {
            const aug = this.augmentNode(child);
            changed ||= aug !== child;
            return aug;
        });
        return changed ? augmented : node;
    }
    
    return node;
}`}
        </CodeBox>
    </Chapter>
);
