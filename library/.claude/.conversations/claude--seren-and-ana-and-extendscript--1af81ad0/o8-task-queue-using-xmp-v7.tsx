import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Task Queue using XMP v7 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}interface Document {
    XMPString: string;
}

class TaskQueue {
    private xmpInstance: XMPMetaInstance | undefined;
    private readonly queueName = "TaskQueue";
    
    constructor(private document: Document) {}
    
    private xmp(): XMPMetaInstance {
        if (!XMPMeta) throw new Error("XMPMeta is not defined");
        if (!this.xmpInstance) {
            this.xmpInstance = new XMPMeta(this.document.XMPString);
        }
        return this.xmpInstance;
    }
    
    peek(): string | undefined {
        try {
            var item = this.xmp().getArrayItem("", this.queueName, 1);
            return item.value;
        } catch (e) {
            return undefined;
        }
    }
    
    dequeue(): string | undefined {
        var task = this.peek();
        if (task === undefined) 
            return undefined;
        
        this.xmp().deleteProperty("", this.queueName + "[1]");
        this.document.XMPString = this.xmp().serialize();
        return task;
    }
    
    enqueue(task: string): void {
        if (!XMPConst) throw new Error("XMPConst is not defined");
        
        this.xmp().appendArrayItem(
            "", 
            this.queueName, 
            XMPConst.ARRAY_IS_ORDERED, 
            task, 
            ""
        );
        
        this.document.XMPString = this.xmp().serialize();
    }
}
`}
        </CodeBox>
    </Chapter>
);
