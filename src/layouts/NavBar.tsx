export default function NavBar() {
	return (
		<nav>
			<img src="/images/logo.svg" alt="logo" />
         <ul>
				<li>Collections</li>
				<li>Men</li>
				<li>Women</li>
				<li>About</li>
				<li>Contact</li>
         </ul>
			<div className="navUser">
				<img src="/images/icon-cart.svg" alt="cart" />
				<img src="/images/image-avatar.png" alt="avatar" />
			</div>
      </nav>
	)
}