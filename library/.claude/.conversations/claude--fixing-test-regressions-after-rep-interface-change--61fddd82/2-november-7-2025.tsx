import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 November 2025](2025-11-07)</Date>
        </Dated>
        <Title>[[ 7 November 2025 ]]</Title>
        <Message
            at="2025-11-07T11:51:34.220271Z"
        >
            <Origin>019a5e28-5a41-77c1-a470-74bec6d16e6c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Where do I need to set this in the test? If I put it at the top does it operate on all tests or just at
                thjat level?
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`describe('$Reflection', () => {
    describe('$ObjectiveRep', () => {
        describe('$type function', () => {
            beforeEach(() => {
                $lib.$reset();
            });`}
            </CodeBox>
        </Message>
        <Message
            at="2025-11-07T11:51:53.354751Z"
        >
            <Origin>019a5e28-5a41-77c1-a470-74bfe68a5ec1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Verbatim />
                    beforeEach()
                </Word> runs for <Word>
                    <Bold />
                    all tests within its scope and all nested describe blocks
                </Word>.
            </Paragraph>
            <Paragraph>So if you put it where you have it:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`describe('$Reflection', () => {
    describe('$ObjectiveRep', () => {
        describe('$type function', () => {
            beforeEach(() => {
                $lib.$reset();
            });
            // Only runs for tests inside '$type function'`}
            </CodeBox>
            <Paragraph>
                It will <Word>
                    <Bold />
                    only
                </Word> run for <Word>
                    <Verbatim />
                    it()
                </Word> blocks inside <Word>
                    <Verbatim />
                    '$type function'
                </Word>.
            </Paragraph>
            <Paragraph>
                If you want it to run for <Word>
                    <Bold />
                    all tests in the file
                </Word>, move it to the top:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`describe('$Reflection', () => {
    beforeEach(() => {
        $lib.$reset();  // ✅ Runs before EVERY test in $Reflection
    });
    
    describe('$ObjectiveRep', () => {
        describe('$type function', () => {
            // beforeEach from parent runs here too`}
            </CodeBox>
            <Paragraph>
                If you want it for all <Word>
                    <Verbatim />
                    $ObjectiveRep
                </Word> tests but not <Word>
                    <Verbatim />
                    parseFunctionInfo
                </Word> tests:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`describe('$Reflection', () => {
    describe('$ObjectiveRep', () => {
        beforeEach(() => {
            $lib.$reset();  // ✅ Runs for all $ObjectiveRep tests
        });
        
        describe('$type function', () => { ... }
        describe('other tests', () => { ... }
    });
    
    describe('parseFunctionInfo', () => {
        // beforeEach doesn't run here
    });`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Rule of thumb
                </Word>: Put <Word>
                    <Verbatim />
                    beforeEach()
                </Word> at the <Word>
                    <Bold />
                    highest level
                </Word> where you need it to apply.
            </Paragraph>
        </Message>
    </Chapter>
);
