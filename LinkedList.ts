/*************************************************************************
 * 作者: sunny
 * 时间: 07/05/2018
 * 说明: 链表存储有序的元素集合 链表中的元素在内存中并不是连续放置的,每个元素由一个
 * 元素本身的节点和一个指向下一个元素的引用
 **************************************************************************/

class DataNode
{
    element : any;
    next    : any;
    constructor( el:any )
    {
        this.element    = el;
        this.next       = null;
    }
}

export class LinkedList
{
    private head    : any;
    private length  : number;

    constructor()
    {
        this.head   = null;
        this.length = 0;
    }

    public push( el : any )
    {
        let node = new DataNode( el );
        
    }
}

