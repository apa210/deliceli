import React from "react";
import { Link } from "react-router-dom";

export const KitchenCardProfile = () => {
	return (
		
		
		<div className="card">
		  <img
			src="https://cdn.winsightmedia.com/platform/files/public/800x420/chef-demo-cooking-saucing-dish.jpg"
			className="card-img-top"
		  />
		  <div className="card-body p-5">
			<h5 className="card-title">Milena Sin Gluten</h5>
			<p className="card-text">
			Milena Sin Gluten es una Gastropub que significa: Comida
			  casera con un toque gourmet. Cocina Sin Gluten, Sin
			  Lactosa, Vegana.
			</p>
			<button type="button" className="btn btn-primary me-2">
			  Leer mas...
			</button>
		  </div>
		</div>
	 
	
	);
};
