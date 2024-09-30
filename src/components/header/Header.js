import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="logo">MyWebsite</div>
				<nav>
					<ul className="nav-list">
						<li>
							<Link to="/">HomePage</Link>
						</li>
						<li>
							<Link to="/Photos">Photos</Link>
						</li>
						<li>
							<Link to="/Comments">Comments</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
