import AlbumCover from "./AlbumCover";

export default function AlbumItem() {
	return (
		<div className="">
			<h1 className="text-center pb-5">Nazwa Albumu</h1>
			<div>
				<div className="frames">
					<div className="frame">
						<AlbumCover />
					</div>
				</div>
			</div>
		</div>
	);
}
