import {Button, Divider, Input, Row} from 'antd';
import {useRef, useState} from "react";
import _ from 'lodash';

export default function HomePage() {
    const aRef = useRef(null);
    const bRef = useRef(null);
    const cRef = useRef(null);
    const dRef = useRef(null);
    const mRef = useRef(null);
    const nRef = useRef(null);
    const [result,setResult]=useState<number[]>([])
    const calculate=()=>{
        const a=Number.parseFloat(_.get(aRef,"current.input.value"))
        const b=Number.parseFloat(_.get(bRef,"current.input.value"))
        const c=Number.parseFloat(_.get(cRef,"current.input.value"))
        const d=Number.parseFloat(_.get(dRef,"current.input.value"))
        const m=Number.parseFloat(_.get(mRef,"current.input.value"))
        const n=Number.parseFloat(_.get(nRef,"current.input.value"))

        const newResult=[(b*n-d*m)/(b*c-a*d),(a*n-c*m)/(a*d-b*c)]
        setResult(newResult);
    };
    return (
        <>
            <Row>
                <Input ref={aRef}></Input>x+<Input ref={bRef}></Input>y=<Input ref={mRef}></Input>

            </Row>
            <Row>
                <Input ref={cRef}></Input>x+<Input ref={dRef}></Input>y=<Input ref={nRef}></Input>
            </Row>
            <Button onClick={calculate}>计算</Button>
            <Divider/>
            <Row>
                x=<span>{result[0]}</span>
            </Row>
            <Row>
                y=<span>{result[1]}</span>
            </Row>


        </>

    );
}
