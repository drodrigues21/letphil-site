const TestimonialCard = ({ articleId, iconSrc, title, content }) => {
	return (
		<>
			<label className="absolute inset-0" htmlFor={articleId}>
				<span className="sr-only">Focus on the big picture</span>
			</label>
			<article className="flex flex-col justify-between items-center p-6 min-h-[250px] max-h-[300px] text-center bg-gray-100 rounded-md shadow-md">
				<header className="mb-2">
					<img
						className="inline-flex rounded-full shadow mb-3"
						src={iconSrc}
						width="44"
						height="44"
						alt="Icon"
					/>
					<h1 className="text-xl font-bold text-slate-900">{title}</h1>
				</header>
				<div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
					<p className="text-gray-600 text-sm line-clamp-3">{content}</p>
				</div>
				<footer className="text-right">
					<span className="text-sm font-medium text-indigo-500 hover:underline">
						Start Ratings?
					</span>
				</footer>
			</article>
		</>
	);
};

export default TestimonialCard;
