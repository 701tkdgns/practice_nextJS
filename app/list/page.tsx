import Image from 'next/image'
import logo from '/public/vercel.svg'

export default () => {
    let items: string[] = ['Tomatoes', 'Pasta', 'Coconut']
    let arr = [2, 3, 4]
    // arr.map(() => {})
    return (
        <div className="list">
            <h4>뭘봐</h4>
            {items.map((val: string, idx: number) => {
                return (
                    <div className="food" key={val+idx}>
                        <Image src={logo} alt='list_image' className='food-img'/>
                        <h4>{val}</h4>
                    </div>
                )
            })}
        </div>
    )
}

// 컴포넌트를 만들어서 export default