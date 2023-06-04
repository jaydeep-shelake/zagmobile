import ProductCard from './home/ProductCard'

const Product = () => {
    const products  =[
        {
            title:'The Marc Jacobs',
            subTitle:' Traveler Tote',
            price:' 195.00',
            img:'/public/bag.png'
        },
        {
            title:'Axel Arigato',
            subTitle:' Clean 90 Triple Sneakerse',
            price:' 245.00',
            img:'/public/shoe.png'
        }
    ]
  return (
    <div className='px-[25px] mt-[28px]'>
      <div className='w-full flex items-center justify-between'>
        <p className='font-bold text-[18px] leading-[150%] text-[#000000]'>New Arrivals</p>
        <p className='font-semibold text-[11px] leading-[150%] text-[#666666]'>View All</p>
      </div>

      <div className='flex  items-center justify-between flex-wrap mt-[15px]'>
       {
        products.map((product)=>(
            <ProductCard title={product.title} subTitle={product.subTitle} img={product.img} key={product.price} price={product.price}/>
        ))
       }
      </div>
    </div>
  )
}

export default Product