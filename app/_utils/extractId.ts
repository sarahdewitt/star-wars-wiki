export const extractIdFromUrl = (url: string | undefined | null): number | null => {
    if (!url) return null;
    const match = url.match(/\/(\d+)\/?$/);
    return match ? parseInt(match[1], 10) : null;
  };