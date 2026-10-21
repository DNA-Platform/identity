interface Document {
    XMPString: string;
}

class TaskQueue {
    private xmp: XMPMetaInstance | undefined;
    private static readonly TASKS_NS = "http://ns.adobe.com/tasks/1.0/";
    private static readonly QUEUE_NAME = "Queue";
    
    constructor(private document: Document) {}
    
    peek(): string | undefined {
        if (!XMPMeta) throw new Error("XMPMeta is not defined");
        
        if (!this.xmp) {
            this.xmp = new XMPMeta(this.document.XMPString);
        }
        
        try {
            var item = this.xmp.getArrayItem(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME, 1);
            return item.value;
        } catch (e) {
            return undefined;
        }
    }
    
    dequeue(): string | undefined {
        if (!XMPMeta || !XMPConst) throw new Error("XMP APIs are not defined");
        
        var task = this.peek();
        if (!task || !this.xmp) return undefined;
        
        this.xmp.deleteProperty(TaskQueue.TASKS_NS, TaskQueue.QUEUE_NAME + "[1]");
        this.document.XMPString = this.xmp.serialize();
        return task;
    }
    
    enqueue(task: string): void {
        if (!XMPMeta || !XMPConst) throw new Error("XMP APIs are not defined");
        
        if (!this.xmp) {
            this.xmp = new XMPMeta(this.document.XMPString);
        }
        
        this.xmp.appendArrayItem(
            TaskQueue.TASKS_NS, 
            TaskQueue.QUEUE_NAME, 
            XMPConst.ARRAY_IS_ORDERED, 
            task, 
            ""
        );
        
        this.document.XMPString = this.xmp.serialize();
    }
}
