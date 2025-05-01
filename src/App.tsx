import pin from "./assets/712cYUdimaL._AC_SL1500_small.png";
import dress from "./assets/A1mpMrJLhBL._AC_SX679_small.png";

function App() {
  return (
    <div>
      <div className="bg-[url(./assets/14e__47473.webp)] bg-cover h-screen bg-blend-overlay bg-slate-300"></div>
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <div className="flex gap-3 mt-3 items-center">
          <img src={pin} className="w-[70px] h-[70px]" loading="lazy" />
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mt-3">Hike And Scramble</h1>
            <h1 className="text-xl font-semi">Las Vegas</h1>
            <h2 className="text-lg font-semibold">Picnic</h2>
            <h3 className="text-lg font-normal">May 3, 2025</h3>
          </div>
          <img src={dress} className="w-[80px]" loading="lazy" />
        </div>
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
                <td className="px-3 py-2">10:00 AM</td>
                <td className="px-3 py-2">Early Arrival And Setup</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">10:30 AM</td>
                <td className="px-3 py-2">Hikers And Food Arrival</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">11:00 AM</td>
                <td className="px-3 py-2">
                  Board/Leader/ChipMaster
                  <br />
                  Acknowledgments
                </td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">11:15 AM</td>
                <td className="px-3 py-2">
                  <p>
                    Explain Cash Raffle (50/40/10)
                    <br />
                    Show Drawing/Raffle Prizes
                    <br />
                    Decorations give away or recycle
                  </p>
                  <p>Raffle Prizes</p>
                  <ul className="list-disc list-inside">
                    <li>Pinata (a)</li>
                    <li>Lowes Cards $35 (a)</li>
                    <li>45 ft Webbing $30 (a)</li>
                    <li>Eddies Mexican Restaurant $50 (b)</li>
                    <li>50 ft Webbing $40 (b)</li>
                    <li>Chip Trophy Case $70 (b)</li>
                    <li>REI Gift Card $50 (c)</li>
                    <li>Hiking Fanny Pack (c)</li>
                  </ul>
                </td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">11:30 PM</td>
                <td className="px-3 py-2">Raffle Group (a) Items</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">12:00 PM</td>
                <td className="px-3 py-2">Group Picture &amp; Hiker Thanks</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">12:30 PM</td>
                <td className="px-3 py-2">Raffle Group (b) Items</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">1:00 PM</td>
                <td className="px-3 py-2">Raffle Group (c) Items</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">1:30 PM</td>
                <td className="px-3 py-2">Raffle Cash (50/40/10)</td>
              </tr>
              <tr className="odd:bg-blue-200 even:bg-amber-200 opacity-60">
                <td className="px-3 py-2">2:00 PM</td>
                <td className="px-3 py-2">
                  Next Picnic Donations
                  <br />
                  Clean Up
                  <br />
                  Wind Down
                </td>
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
