import * as React from 'react';

// 型定義
interface IColor {
    red?: boolean;
    blue?: boolean;
}
 
interface ISize {
    small: string;
    big?: string;
}

type ValueProps = IColor & ISize;

// クラス定義
class Value extends React.Component<ValueProps> {
    public render() {
        return <div>{this.props.small}</div>;
    }
}

export {
    Value as default,
}
