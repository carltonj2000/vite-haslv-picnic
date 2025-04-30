function App() {
  return (
    <div>
      <div className="bg-[url(./assets/14e__47473.jpg)] bg-cover h-screen bg-blend-overlay bg-slate-300"></div>
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-3">Hike And Scramble Las Vegas</h1>
        <h2 className="text-xl font-semibold">
          Picnic <span className="text-lg font-normal">(May 3, 2025)</span>
        </h2>
        <div className="overflow-x-auto rounded-2xl mt-4">
          <table>
            <thead>
              <tr className="bg-yellow-300 opacity-60">
                <th className="px-3 py-3">Time</th>
                <th className="px-3 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">10:00 AM - 10:30 AM</td>
                <td className="px-3 py-2">Early Arrival And Setup</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">10:30 AM - 11:00 AM</td>
                <td className="px-3 py-2">Guest And Food Arrival</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">11:00 AM - 11:30 AM</td>
                <td className="px-3 py-2">
                  Board/Leader/ChipMaster Acknowledgments
                </td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">11:30 AM - 12:00 PM</td>
                <td className="px-3 py-2">
                  <p>
                    Raffle (50/40/10) And
                    <br />
                    Prize Presentations
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Pinata</li>
                    <li>Decorations (or Recycle)</li>
                    <li>Lowes Cards $35</li>
                    <li>Eddies Mexican Restaurant $50</li>
                    <li>45 ft Webbing $30</li>
                    <li>50 ft Webbing $40</li>
                    <li>Chip Trophy Case $70</li>
                  </ul>
                </td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">12:00 PM - 12:30 PM</td>
                <td className="px-3 py-2">Group Photo</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">12:30 PM - 1:00 PM</td>
                <td className="px-3 py-2">Social Time</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">1:00 PM - 1:30 PM</td>
                <td className="px-3 py-2">Raffle &amp; Hiker Thanks</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">1:30 PM - 2:00 PM</td>
                <td className="px-3 py-2">Social Time</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">2:00 PM - 2:30 PM</td>
                <td className="px-3 py-2">Wind Down &amp; Clean Up</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/*
const pages = {
  Main,
  AllPics,
};

const pageNames = Object.keys(pages);

const navOn = false;

function App() {
  const [page, pageSet] = useState(pageNames[0]);
  const Page = pages[page];
  return (
    <>
      {navOn && (
        <nav className="flex gap-2 bg-amber-100">
          {pageNames.map((p) => (
            <button key={p} onClick={() => pageSet(p)}>
              {p}
            </button>
          ))}
        </nav>
      )}
      {Page && <Page />}
    </>
  );
}
*/
export default App;
