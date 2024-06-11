export const sortShowsAZ = (shows) => {
  return shows.toSorted((a, b) => (a.title > b.title ? 1 : -1));
};

export const sortShowsZA = (shows) => {
  return shows.toSorted((a, b) => (a.title < b.title ? 1 : -1));
};

export const sortShowsDateUpdatedAsc = (shows) => {
  return shows.toSorted((a, b) => (new Date(a.updated) > new Date(b.updated) ? 1 : -1));
  console.log("date asc")
};

export const sortShowsDateUpdatedDesc = (shows) => {
  return shows.toSorted((a, b) => (new Date(a.updated) < new Date(b.updated) ? 1 : -1));
};

export const sortShowsByGenre = (shows) => {};
