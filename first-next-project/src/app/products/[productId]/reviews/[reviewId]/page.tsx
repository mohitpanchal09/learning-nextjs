import { notFound } from "next/navigation"

export default function page({params}:{params:{reviewId:string,productId:string}}) {
  if(Number(params.reviewId)>100){
    notFound()
  }
    return (
      <div>Product {params.productId}'s review {params.reviewId}</div>
    )
  }
  
  