function getInitials(name: string): string {
  const splitedName = name.split(/\s+/);
  let initials = splitedName[0].slice(0, 1).toUpperCase();
  if (splitedName[1]) {
    initials += splitedName[1].slice(0, 1).toUpperCase();
  }
  return `<span>${initials}</span>`;
}

export default getInitials;
