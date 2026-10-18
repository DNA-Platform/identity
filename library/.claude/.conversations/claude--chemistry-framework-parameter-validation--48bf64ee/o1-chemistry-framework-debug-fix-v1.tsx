import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework Debug Fix v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework Debug Fix at version 1</Heading>
            <Heading>Chemistry Framework Parameter Validation Fix</Heading>
            <Heading>The Issue</Heading>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $check
                </Word> function is not properly handling wrapped function components. When a React functional component is
                passed as a child, Chemistry wraps it in a <Word>
                    <Verbatim />
                    $$Function
                </Word> instance, but the validation is comparing this instance against the original component function.
            </Paragraph>
            <Heading>Root Cause Analysis</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Child Processing
                    </Word>: When Chemistry encounters a functional component in children: ``<Word>
                        <Verbatim />
                        typescript // In $BondOrchestrator.processElement() if (typeof type === 'function') &#123; let component = type.$bind ? type : $(type);  // Wraps in $$Function &#125; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Validation Problem
                    </Word>: The <Word>
                        <Verbatim />
                        $check
                    </Word> function compares:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Expected: <Word>
                            <Verbatim />
                            InfoCard
                        </Word> (the original React.FC)
                    </Line>
                    <Line>
                        Received: <Word>
                            <Verbatim />
                            $$Function
                        </Word> instance (the wrapped component)
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Type Mismatch
                    </Word>: The validation doesn't recognize that <Word>
                        <Verbatim />
                        $$Function
                    </Word> wrapping <Word>
                        <Verbatim />
                        InfoCard
                    </Word> is valid for <Word>
                        <Verbatim />
                        InfoCard
                    </Word> parameter.
                </Line>
            </Paragraph>
            <Heading>Solution</Heading>
            <Paragraph>
                Modify the <Word>
                    <Verbatim />
                    $check
                </Word> function to handle wrapped components:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}// In chemistry.ts, modify the $check function:

export function $check<T>(value: any, type: any, ...allowUndefined: any[]): T {
    const validation = new $ParamValidation(value);
    
    // Handle wrapped function components
    if (validation.value instanceof $$Function) {
        // Extract the original component from $$Function
        const wrappedComponent = (validation.value as any).FunctionComponent;
        if (wrappedComponent === type) {
            return value as T;  // Valid - wrapped version of expected component
        }
    }
    
    // Rest of validation...
    validation.is(type, ...allowUndefined);
    return value as T;
}`}
            </CodeBox>
            <Heading>Alternative Approach - Modify Type Checking</Heading>
            <Paragraph>
                In <Word>
                    <Verbatim />
                    $ParamValidation.isType()
                </Word> method, add special handling:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private isType(type: any): boolean {
    // ... existing checks ...
    
    // Special case: $$Function wrapping a component
    if (this.value instanceof $$Function && typeof type === 'function') {
        const wrapped = (this.value as any).FunctionComponent;
        if (wrapped === type) return true;
    }
    
    // ... rest of checks ...
}`}
            </CodeBox>
            <Heading>Immediate Workaround</Heading>
            <Paragraph>
                In <Word>
                    <Verbatim />
                    arg-tests.tsx
                </Word>, modify the validation to accept either the component or $$Function:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`$MixedContainer(
    label: $Label,
    simpleCard: $Function<typeof SimpleCard>,  
    infoCard: $Function<typeof InfoCard>
) {
    // Instead of:
    // this.infoCard = $check(infoCard, InfoCard);
    
    // Use:
    this.infoCard = infoCard;  // Skip validation for now
    // OR
    this.infoCard = $check(infoCard, $$Function);  // Check for wrapper class
}`}
            </CodeBox>
            <Heading>Proper Long-term Fix</Heading>
            <Paragraph>The framework should provide a unified way to validate both:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Direct $Chemical instances</Line>
                <Line>Wrapped function components ($$Function)</Line>
                <Line>Intrinsic elements ($Html)</Line>
            </Paragraph>
            <Paragraph>Consider creating type guards:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`function isWrappedComponent<T>(value: any, component: React.FC<T>): boolean {
    return value instanceof $$Function && 
           (value as any).FunctionComponent === component;
}

function isChemicalType<T extends $Chemical>(value: any, type: $Type<T>): boolean {
    return value instanceof type;
}`}
            </CodeBox>
            <Heading>Test Validation</Heading>
            <Paragraph>After fix, all these should pass:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $check(label, $Label)
                    </Word> ✓ Chemical instance
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $check(simpleCard, SimpleCard)
                    </Word> ✓ Wrapped function
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $check(infoCard, InfoCard)
                    </Word> ✓ Wrapped function
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $check(divElement, 'div')
                    </Word> ✓ Intrinsic element
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
