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

    // 向链表尾部添加元素
    public Push( el : any )
    {
        let node = new DataNode( el ) , current;
        // 列表中第一个节点
        if ( this.head == null ) this.head = node;
        else 
        {
            current = this.head;
            while( current.next ) current = current.next;
            current.next = node;
        }
        this.length++;
    }

    // 移除链表指定位置
    public RemoveAt( pos : number )
    {   
        if ( pos < 0 ) return null; 
        if ( pos >= this.length ) return null;
        let current = this.head , previous , index = 0;
        
        if ( pos === 0 ) this.head = current.next;
        else
        {
            while ( index++ < pos ) 
            {
                previous = current;
                current  = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.element;
    }

    // 删除指定元素
    public Remove( el:any )
    {
        let index = this.IndexOf( el );
        this.RemoveAt( index );
    }

    // 向链表中指定位置插入元素
    public Insert( pos:number , el:any ) : boolean
    {
        if ( pos < 0 ) return false;
        if ( pos >= this.length ) return false;
        let node = new DataNode( el ) , current = this.head , previous , index = 0;
        if ( pos === 0 )
        {
            node.next = current;
            this.head = node;
        }
        else
        {
            while( index++ < pos )
            {
                previous  = current;
                this.head = node;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    // 判断链表是否为空
    public IsEmpty() : boolean
    {
        return this.length === 0;
    }

    // 返回链接长度
    public Size() : number
    {
        return this.length;
    }

    // 查找元素位置
    public IndexOf( el:any ) : number 
    {
        let current = this.head , index = 0;
        while ( current ) 
        {
            if ( el === current ) { return index; }
            index++;
            current = current.next;
        }
        return -1;
    }
}

