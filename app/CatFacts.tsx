async function getData() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  // call public API to retrieve cat facts and ensure cache is disabled
  const res = await fetch('https://cat-fact.herokuapp.com/facts/', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function CatFacts() {
  // call API inside the React component
  const data = await getData();

  return (
    <ul className="list-disc">
      {data.map(({ text, _id }: { text: string; _id: string }) => (
        <li key={_id}>{text}</li>
      ))}
    </ul>
  );
}
