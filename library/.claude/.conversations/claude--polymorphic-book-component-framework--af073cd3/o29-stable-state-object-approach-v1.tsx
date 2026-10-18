import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Stable State Object Approach v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// In $Formula class
export class $Formula {
    state: $State = {};
    
    resetState(reactState: $State) { 
        // Clear existing properties but keep the same object reference
        Object.keys(this.state).forEach(key => delete this.state[key]);
        
        // Copy React state into formula state
        Object.assign(this.state, reactState);
        
        // Always include the chemical ID
        this.state["cid"] = symbolize(this._chemical.cid);
    }
    
    // Alternative: separate intrinsic state from accessed state
    clearAccessedState() {
        // Keep intrinsic properties like "cid" but clear accessed properties
        const intrinsic = { cid: this.state.cid };
        Object.keys(this.state).forEach(key => delete this.state[key]);
        Object.assign(this.state, intrinsic);
    }
}

// In Component creation
const Component: $Component<this> = props => {
    const [, update] = useState({});
    const [reactState, setReactState] = useState<$State>({});
    
    // Get/create chemical
    let chemical = this.__getOrCreateChemical(props);
    
    // Reset formula state BEFORE rendering (clear but keep same object)
    chemical.formula.resetState(reactState);
    
    // Process props and children
    chemical.__bindProps(props);
    const result = chemical.__processChildren(props, context);
    
    // Call constructor
    this.__callConstructor(chemical, result.args);
    
    // Render view (this will populate formula.state via property getters)
    let view = chemical.view();
    
    // useEffect runs AFTER render with populated formula.state
    useEffect(() => {
        // Formula state is now populated with accessed properties
        console.log('Accessed properties:', Object.keys(chemical.formula.state));
        
        // Do something with the state tracking...
        // Maybe propagate to children, cache for performance, etc.
        
        // Setup update mechanism
        (chemical as any)[updateSymbol] = () => update({});
        
        return () => {
            // Cleanup
            delete (chemical as any)[updateSymbol];
        };
    }); // No dependencies - runs after every render
    
    return view;
};

// In property getter (Bond class)
get computed() {
    const value = this.getValue();
    
    // Track that this property was accessed during render
    this._chemical.formula.state[this.bid] = symbolize(value);
    
    return value;
}`}
        </CodeBox>
    </Chapter>
);
