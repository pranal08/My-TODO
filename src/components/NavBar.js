import React from 'react';


const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">YOUR TODO</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#"
							>Item 1 <span className="sr-only">(current)</span></a
						>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Item 2</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Item 3</a>
					</li>
				
					
				</ul>
			</div>
		</nav>
    );
}

export default NavBar;