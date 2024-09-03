// client component : 해당 파일 내 모든 컴포넌트가 client component가 됨
// html 내 기능 (onclick), useState 등 사용가능
// 로딩속도 느림
// hydration 필요 : html을 유저에게 보낸 후, js로 html를 다시 읽고 분석하는 일
'use client'

import {age} from './data';

const Cart = () => {
    return (
        <>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
                <p>{age}</p>
            </div>
            <CartItem/>
        </>
    )
}


// server component
// 로딩속도가 매우 빠름 > js가 안들어가므로 / 검색엔진 노출에 유리
// 서버 컴포넌트 : html에 js script 기능 넣기 불가능
// 큰 페이지는 서버 컴포넌트
// js 기능이 필요한 곳만 클라이언트 컴포넌트
const CartItem = () => {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

export default Cart;