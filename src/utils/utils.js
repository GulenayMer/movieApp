export const formatYear = (dateString) => {
	if (!dateString)
		return 'N/A';
	const date = new Date(dateString);
	return date.getFullYear();
} 