/*************************************************************************
 * 作者: sunny
 * 时间: 09/05/2018
 * 说明: 存储的是[键 值]对, 其中键名是用来查询特定元素
 **************************************************************************/

 export class Dictionary
 {
    private items = {};

    // 检查某个键值是否存在
    public ContainsKey( key ) : boolean
    {
        return key in this.items;
    }

    // 添加元素
    public Add( key , value )
    {
        this.items[ key ] = value;
    }

    // 删除元素
    public Remove( key ) : boolean
    {
        if ( !this.ContainsKey( key ) ) return false;
        delete this.items[ key ];
        return true;
    }

    // 获取值
    public GetItem( key )
    {
        return this.ContainsKey( key ) ? this.items[key] : undefined;
    }

    // 值以数组形式返回
    public GetValuesArray()
    {
        let values = [];
        for ( let key in this.items )
        {
            if ( this.ContainsKey( key ) ) { values.push(this.items[key]); }
        }
        return values;
    }

    // 键以数组形式返回
    public GetKeyArray()
    {
        let keys = [];
        for ( let key in this.items )
        {
            if ( this.ContainsKey(key) ) { keys.push( key ); }
        }
        return keys;
    }

    // 返回元素数量
    public Size() : number
    {
        return Object.keys( this.items ).length;
    }

    // 清空元素
    public Clear()
    {
        this.items = {};
    }
 }