const origin = ({ text1, text2 = '', height = 400, width = 800 }) => `
<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
			.container {
				font-family:
					system-ui,
					-apple-system,
					'Segoe UI',
					Roboto,
					Helvetica,
					Arial,
					sans-serif,
					'Apple Color Emoji',
					'Segoe UI Emoji';
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0;
				width: 100%;
				height: ${height}px;
				background: #50000B;
				background-size: 600% 400%;
				animation: gradientBackground 10s ease infinite;
				border-radius: 10px;
				color: #FDBD49;
				text-align: center;
				text-shadow: 2px 2px 2px #000000;
			}
			h1 {
				font-size: 50px;
				line-height: 1.3;
				letter-spacing: 5px;
				text-transform: uppercase;
				
			}
			p {
				font-size: 20px;
			}
			</style>
			<div class="container">
				<h1>${text1}</h1>
				<p>${text2}</p>
			</div>
		</div>
	</foreignObject>
</svg>

`;

module.exports = origin;
