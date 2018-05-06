/*************************************************************************
 * 作者: sunny
 * 时间: 05/05/2018
 * 说明: 栈遵从后进先出有序集合,新添加或待删除元素保存在栈的末尾,称为栈顶另一端
 * 叫栈低新元素都靠近栈顶旧元素都接近栈底。
 **************************************************************************/

export class Stack < T >
{
    private items:Array< T > = [];

    // 压栈
    public push( element ) : void
    {
        this.items.push( element );
    }

    // 移除栈顶的元素,同时返回被移除的元素
    public pop() : T
    {
        if ( this.is_empty() ) return null;
        return this.items.pop();
    }

    // 返回栈顶元素
    public peek() : T
    {
        if ( this.is_empty() ) return null;
        return this.items[this.items.length-1];
    }

    // 栈是否为空
    public is_empty() : boolean
    {
        return this.items.length === 0;
    }

    // 移除栈所有元素
    public clear()
    {
        this.items = [];
    }

    // 返回栈元素
    public size() : number
    {
        return this.items.length;
    }
}

