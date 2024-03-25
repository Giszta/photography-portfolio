import AlbumCover from "./AlbumCover";

export default function AlbumItem() {
	return (
		<div className="">
			<h1 className="text-center pb-5">Nazwa Albumu</h1>
			<div className="border-8 border-solid border-black">
				<div className="border-8 border-solid border-white">
					<AlbumCover />
				</div>
			</div>
		</div>
	);
}
