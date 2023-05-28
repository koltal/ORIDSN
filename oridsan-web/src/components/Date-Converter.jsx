export  function formatDate(rawDate) {
    const currentDate = new Date();
    const diffInMs = currentDate - new Date(rawDate);
  
    const seconds = Math.floor(diffInMs / 1000);
    if (seconds < 60) {
      return "just now";
    }
  
    const minutes = Math.floor(diffInMs / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }
  
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours} hours ago`;
    }
  
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (days < 7) {
      return `${days} days ago`;
    }
  
    const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
    // weeks === 1 ? `${weeks}week ago` : `${weeks} weeks ago`;
    if(weeks === 1){
    return `${weeks} week ago`;
    }
    return `${weeks} weeks ago`;
  }