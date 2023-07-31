import Counter from "./Counter";

export default function Product() {
	return (
		<div className="product">
			<p className="product__company">Sneaker Company</p>
			<h1>Fall Limited Edition Sneakers</h1>
			<p>
				These low-profile sneakers are your perfect casual wear companion. Featuring a
				durable rubber outer sole, they’ll withstand everything the weather can offer.
			</p>
			<div className="product__price">
				<p>$125.00</p>
				<span>50%</span>
				<p>$250.00</p>
			</div>

			<Counter />
			<button className="btn-add">Add to cart</button>
		</div>
	)
}