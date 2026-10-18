import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Task Queue using XMP v4 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`interface Document {
    XMPString: string;
}

declare var XMPMeta: any;
declare var XMPConst: any;
declare function setDefaultXMLNamespace(ns: string): void;

class TaskQueue {
    private xmp: any;
    private static TASKS_NS = "http://ns.adobe.com/tasks/1.0/";
    private static QUEUE_NAME = "Queue";
    
    constructor(private document: Document) {}
    
    peek(): string | undefined {
        if (!this.xmp) {
            setDefaultXMLNamespace(TaskQueue.TASKS_NS);
            this.xmp = new XMPMeta(this.document.XMPString);
        }
        
        try {
            return this.xmp.getArrayItem(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, 1);
        } catch (e) {
            return undefined;
        }
    }
    
    dequeue(): string | undefined {
        var task = this.peek();
        if (!task) return undefined;
        
        this.xmp.deleteArrayItem(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, 1);
        this.document.XMPString = this.xmp.serialize();
        return task;
    }
    
    enqueue(task: string): void {
        if (!this.xmp) {
            setDefaultXMLNamespace(TaskQueue.TASKS_NS);
            this.xmp = new XMPMeta(this.document.XMPString);
        }
        
        try {
            this.xmp.getArrayItem(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, 1);
        } catch (e) {
            this.xmp.setProperty(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, null, XMPConst.ARRAY);
        }
        
        this.xmp.appendArrayItem(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, task, 0, XMPConst.STRING);
        this.document.XMPString = this.xmp.serialize();
    }
}
`}
        </CodeBox>
    </Chapter>
);
