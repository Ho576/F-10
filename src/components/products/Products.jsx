import React from 'react'
import Product from './Product';

export default function Products({addToCart}) {

    const products = [
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Fancy Product',
          price: '$40.00 - $80.00',
          option : 'View options',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Special Item',
          price: '$18.00',
          saleBadge: 'Sale',
          rating: 5,
          originalPrice: '$20.00',
          discountedPrice: '$18.00',
          option : 'Add to cart',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Sale Item',
          price: '$25.00',
          saleBadge: 'Sale',
          originalPrice: '$50.00',
          option : 'Add to cart',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Popular Item',
          price: '$40.00',
          rating: 5,
          option : 'Add to cart',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Sale Item',
          price: '$25.00',
          saleBadge: 'Sale',
          originalPrice: '$50.00',
          option : 'Add to cart',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Fancy Product',
          price: '$120.00 - $280.00',
          option : 'View options',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Special Item',
          price: '$18.00',
          saleBadge: 'Sale',
          rating: 5,
          originalPrice: '$20.00',
          discountedPrice: '$18.00',
          option : 'Add to cart',
        },
        {
          imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
          title: 'Popular Item',
          price: '$40.00',
          rating: 5,
          option : 'Add to cart',
        },
        // Add more products as needed
      ];
  return (
    <Product products={products} addToCart={addToCart}/>

    


//     <section className="py-5">

//     <div className="container px-4 px-lg-5 mt-5">
//       <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


//         <div className="col mb-5">
//           <div className="card h-100">
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Fancy Product</h5>
//                 $40.00 - $80.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Special Item</h5>
//                 <div className="d-flex justify-content-center small text-warning mb-2">
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                 </div>
//                 <span className="text-muted text-decoration-line-through">$20.00</span>
//                 $18.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart}>Add to cart</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Sale Item</h5>
//                 <span className="text-muted text-decoration-line-through">$50.00</span>
//                 $25.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart} >Add to cart</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Popular Item</h5>
//                 <div className="d-flex justify-content-center small text-warning mb-2">
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                 </div>
//                 $40.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart} >Add to cart</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Sale Item</h5>
//                 <span className="text-muted text-decoration-line-through">$50.00</span>
//                 $25.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart} >Add to cart</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Fancy Product</h5>
//                 $120.00 - $280.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Special Item</h5>
//                 <div className="d-flex justify-content-center small text-warning mb-2">
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                 </div>
//                 <span className="text-muted text-decoration-line-through">$20.00</span>
//                 $18.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart} >Add to cart</a></div>
//             </div>
//           </div>
//         </div>


//         <div className="col mb-5">
//           <div className="card h-100">
//             <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">Popular Item</h5>
//                 <div className="d-flex justify-content-center small text-warning mb-2">
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                   <div className="bi-star-fill" />
//                 </div>
//                 $40.00
//               </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//               <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={addToCart} >Add to cart</a></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
  )
}