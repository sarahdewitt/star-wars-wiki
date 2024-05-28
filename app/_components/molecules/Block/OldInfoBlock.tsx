const formatValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  } else if (typeof value === "object" && value !== null) {
    return JSON.stringify(value); // or a more custom rendering if needed
  }
  return value;
};

const formatKey = (key: string) => {
  return key.replace(/_/g, " ");
};

export const InfoBlockTop = ({ props = {} }: any) => {
  const entries = Object.entries(props).slice(0, 3);

  return (
    <div className={"p-10 bg-blue-300 col-span-2"}>
      <ul className="list-none pb-2">
        {entries.map(([key, value]) => (
          <li key={key}>
            {formatKey(key)}: {formatValue(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const InfoBlockBL = ({ props = {} }: any) => {
  const entries = Object.entries(props).slice(3, 6);

  return (
    <div className={"p-10 bg-blue-400"}>
      <ul className="list-none pb-2">
        {entries.map(([key, value]) => (
          <li key={key}>
            {formatKey(key)}: {formatValue(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const InfoBlockBR = ({ props = {} }: any) => {
  const entries = Object.entries(props).slice(6, 9);

  return (
    <div className={"p-10 bg-blue-200"}>
      <ul className="list-none pb-2">
        {entries.map(([key, value]) => (
          <li key={key}>
            {formatKey(key)}: {formatValue(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};
