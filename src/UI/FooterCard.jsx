function FooterCard({ children, className }) {
	return (
		<div className={`flex flex-col border border-solid ${className}`}>
			{children}
		</div>
	);
}
export default FooterCard;
