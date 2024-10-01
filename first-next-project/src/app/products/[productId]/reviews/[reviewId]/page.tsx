
export default function page({params}:{params:{reviewId:string,productId:string}}) {
    return (
      <div>Product {params.productId}'s review {params.reviewId}</div>
    )
  }
  
  