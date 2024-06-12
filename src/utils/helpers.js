export function formatCurrency(value) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "USD",
	}).format(value);
}

export function formatDate(dateStr) {
	return new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
	const d1 = new Date().getTime();
	const d2 = new Date(dateStr).getTime();
	return Math.round((d2 - d1) / 60000);
}

export function convertSecondsToTime(totalSeconds) {
	// I won't be needing days and the seconds for now, so the function will only be for h, and m
	// const days = Math.floor(totalSeconds / (24 * 60 * 60));

	const hoursRemaining = totalSeconds % (24 * 60 * 60);
	const hours = Math.floor(hoursRemaining / (60 * 60));

	const minutesRemaining = hoursRemaining % (60 * 60);
	const minutes = Math.floor(minutesRemaining / 60);

	// const seconds = minutesRemaining % 60;

	return `${hours}h${minutes}m`;
}
