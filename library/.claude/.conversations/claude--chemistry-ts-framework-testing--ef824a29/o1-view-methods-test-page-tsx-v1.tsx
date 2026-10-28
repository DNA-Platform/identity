import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ View Methods Test - page..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`'use client'
import { $Chemical } from '@/chemistry';

// Test different ways to construct views
class $SimpleView extends $Chemical {
    $message = 'Hello';
    
    view() {
        return <div>{this.$message}</div>;
    }
}

class $ConditionalView extends $Chemical {
    $showContent = true;
    
    toggleContent() {
        this.$showContent = !this.$showContent;
    }
    
    view() {
        return (
            <div style={{ border: '1px solid #ddd', padding: '15px' }}>
                <button 
                    onClick={() => this.toggleContent()}
                    style={{
                        padding: '5px 15px',
                        marginBottom: '10px',
                        border: '1px solid #ccc',
                        background: '#f5f5f5',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Toggle Content
                </button>
                {this.$showContent ? (`}
        </CodeBox>
    </Chapter>
);
