import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  let name = 'park'
  let _link= 'http://google.com'

  return (
    <div>
      {/* <div className="navbar">
        <Link href="/" >홈</Link>
        <Link href="/list" >상품</Link>
        <Link href="/list/def" >숙제</Link>
      </div> */}
      <h1 className="title">test</h1>
      <p className='title-sub'>bay dev {name}</p>
      <a href={_link}>test</a>
    </div>
  )
}
