import React from 'react';
import '../stylesheets/CardStyle.css';

const SearchBar=()=>{
    return(
        <div className="row">
				<div className="col-lg-8 mx-auto">
					<form className="form">
						<div className="input-group mb-2">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Type here to search"
							/>
							<div className="input-group-append">
								<i
									className="input-group-text btn fas fa-search py-3"
								></i>
							</div>
						</div>
					</form>
				</div>
			</div>
    );
}

export default SearchBar;