"use client";
import React, { useEffect, useState } from "react";
import "./PhotographerSpinner.css";

const PhotographerSpinner = () => {
	const [loading, setLoading] = useState(true);
	const [flash, setFlash] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			setFlash(true);
			setTimeout(() => setFlash(false), 400);
		}, 4000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="photographer-spinner-wrapper">
			{loading ? (
				<div className="camera-body">
					<div className="camera-top" />
					<div className="lens">
						<div className="lens-inner" />
					</div>
				</div>
			) : (
				<div className="loaded-text">Gotowe!</div>
			)}
			{flash && <div className="flash-overlay" />}
		</div>
	);
};

export default PhotographerSpinner;
