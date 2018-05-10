/*************************************************************************
 * 作者: sunny
 * 时间: 05/05/2018
 * 说明: 队列遵循FIFO 先进先出 原则的一组有序的项, 队列在尾部添加新元素,并从顶部
 * 移除元素，新添加的元素必须排在队列的末尾
 **************************************************************************/

 export class Queue <T>
 {
    private items: Array< T > = []

    // 入列
    public Enqueue( element ) : void 
    {
        this.items.push( element );
    }

    // 移除队列的第一项,并返回移除的元素
    public Dequeue() : T
    {
        return this.items.shift();
    }

    // 返回队列的最前项
    public Front() : T
    {
        return this.items[0];
    }

    // 队列是否为空
    public IsEmpty() : boolean
    {
        return this.items.length === 0;
    }

    // 返回队列大小
    public Size() : number
    {
        return this.items.length;
    }

    // 清空队列
    public Clear() : void 
    {
        this.items = [];
    }
 }