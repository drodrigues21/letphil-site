// interface IHeader {
//    siteTitle: string;
// }

export default function Header({ siteTitle }) {
	// : IHeader
	return (
		<div
			style={{
				background: "rebeccapurple",
				marginBottom: "1.45rem",
			}}
		>
			<div
				style={{
					margin: "0 auto",
					maxWidth: 960,
					padding: "1.45rem 1.0875rem",
				}}
			>
				<h1 style={{ margin: 0 }}>
					{siteTitle}
					{/* <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link> */}
				</h1>
			</div>
		</div>
	);
}
