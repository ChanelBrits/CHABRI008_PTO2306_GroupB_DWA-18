export const sortShowsAZ = (shows) => {
  return shows.slice().toSorted((a, b) => (a.title > b.title ? 1 : -1));
};

export const sortShowsZA = (shows) => {
  return shows.slice().toSorted((a, b) => (a.title < b.title ? 1 : -1));
};

export const sortShowsDateUpdatedAsc = (shows) => {
  const sortedShows = shows.slice().toSorted((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);
    
    if (dateA.getFullYear() !== dateB.getFullYear()) {
      return dateB.getFullYear() - dateA.getFullYear();
    } else if (dateA.getMonth() !== dateB.getMonth()) {
      return dateA.getMonth() - dateB.getMonth();
    } else {
      return dateA.getDate() - dateB.getDate();
    }

  });


  return sortedShows;

};

export const sortShowsDateUpdatedDesc = (shows) => {
  const sortedShows = shows.slice().sort((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);

    if (dateA.getFullYear() !== dateB.getFullYear()) {
      return dateA.getFullYear() - dateB.getFullYear(); 
    } else if (dateA.getMonth() !== dateB.getMonth()) {
      return dateA.getMonth() - dateB.getMonth(); 
    } else {
      return dateB.getDate() - dateA.getDate(); 
    }
  });

  return sortedShows;
};

export const sortShowsByGenre = (shows) => {

};
